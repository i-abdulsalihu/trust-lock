import type { Request, Response } from "express";
import logger from "../config/logger";
import Task from "../models/taskModel";
import httpStatus from "http-status";
import Validator from "../models/validatorModel";
import type { CustomRequest } from "../types/type";

type statuses = "Completed" | "Disputed";

const validateTask = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { verdict } = req.body;
    const username = req.user;
    const validator = await Validator.findOne({ username });

    const status = verdict as unknown as statuses;

    const task = await Task.findById(id);
    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (task.status !== "Submitted") {
      res.status(httpStatus.NOT_ACCEPTABLE).json({
        error: "Task needs to be marked as Submitted to be able to validate",
      });
      return;
    }

    task.status = status;
    task.validator = username;
    await task.save();

    if (status !== "Disputed") {
      validator!.earnings += 2;
      validator!.totalProjects++;
      await validator!.save();
    }

    res
      .status(httpStatus.OK)
      .json({ message: "task has validated by validator" });
  } catch (error: any) {
    logger.error("Error marking task as completed");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const clearDispute = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { verdict } = req.body;
    const username = req.user;

    const status = verdict as unknown as statuses;

    const task = await Task.findById(id);
    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (task.validator === username) {
      res
        .status(httpStatus.FORBIDDEN)
        .json({ error: "You can't perform this action" });
      return;
    }

    if (task.status !== "Revision Requested") {
      res
        .status(httpStatus.NOT_ACCEPTABLE)
        .json({ error: "Nothing to resolve" });
      return;
    }

    task.status = status;
    await task.save();
    res
      .status(httpStatus.OK)
      .json({ message: "disputed task has been given a verdict" });
  } catch (error: any) {
    logger.error("Error clearing dispute");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const tasks = async (req: Request, res: Response) => {
  try {
    const tasksToBeSent = await Task.find().sort({ _id: -1 });
    const submittedTasks = tasksToBeSent.filter(
      (task) => task.status === "Submitted"
    );

    if (submittedTasks?.length === 0) {
      res.status(httpStatus.OK).json({ message: "No submitted tasks" });
      return;
    }

    res
      .status(httpStatus.OK)
      .json({ message: "submitted tasks fetched", tasks: submittedTasks });
  } catch (error: any) {
    logger.error("Error fetching validator tasks");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const getDisputes = async (req: Request, res: Response) => {
  try {
    const tasksToBeSent = await Task.find();
    const disputedTasks = tasksToBeSent.filter(
      (task) => task.status === "Revision Requested"
    );

    if (disputedTasks?.length === 0) {
      res.status(httpStatus.OK).json({ message: "No disputed tasks" });
      return;
    }

    res
      .status(httpStatus.OK)
      .json({ message: "disputed tasks fetched", tasks: disputedTasks });
  } catch (error: any) {
    logger.error("Error fetching all tasks");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

export { validateTask, clearDispute, tasks, getDisputes };
