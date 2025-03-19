import type { Request, Response } from "express";
import logger from "../config/logger";
import Freelancer from "../models/freelancerModel";
import Task from "../models/taskModel";
import httpStatus from "http-status";
import type { CustomRequest } from "../types/type";

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    res.status(httpStatus.OK).json({ message: "task fetched", task });
  } catch (error: any) {
    logger.error("Error fetching task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasksToBeSent = await Task.find();
    const openTasks = tasksToBeSent.filter((task) => task.status === "Open");

    if (openTasks?.length === 0) {
      res.status(httpStatus.OK).json({ message: "No open tasks" });
      return;
    }

    res
      .status(httpStatus.OK)
      .json({ message: "open tasks fetched", tasks: openTasks });
  } catch (error: any) {
    logger.error("Error fetching freelancer tasks");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const acceptTask = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const username = req.user;

    const task = await Task.findById(id);
    const freelancer = await Freelancer.findOne({ username });

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (!freelancer) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "the username sent is invalid" });
      return;
    }

    if (!task.freelancer) {
      task.freelancer = username;
      task.status = "In Progress";
      await task.save();

      freelancer.pendingProjects += 1;
      await freelancer.save();

      res.status(httpStatus.OK).json({ message: "freelancer updated" });
      return;
    }

    res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "freelancer already set" });
  } catch (error: any) {
    logger.error("Error accepting task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const taskDone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    task.status = "Submitted";
    await task.save();
    res.status(httpStatus.OK).json({ message: "task marked as done" });
  } catch (error: any) {
    logger.error("Error marking task as done");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const requestDispute = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const username = req.user;
    const task = await Task.findById(id);

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (task.freelancer !== username) {
      res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: "You're not the freelancer" });
      return;
    }

    if (task.status !== "Disputed") {
      res
        .status(httpStatus.NOT_ACCEPTABLE)
        .json({ error: "Task needs to be marked as Disputed by a validator" });
      return;
    }

    task.status = "Revision Requested";
    await task.save();

    res.status(httpStatus.OK).json({ message: "Revision requested" });
  } catch (error: any) {
    logger.error("Error requesting dispute");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

export { requestDispute, acceptTask, getTask, getTasks, taskDone };