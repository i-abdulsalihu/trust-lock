import type { Request, Response } from "express";
import logger from "../config/logger";
import httpStatus from "http-status";
import Task from "../models/taskModel";
import taskValidation from "../validation/taskValidation";
import type { CustomRequest } from "../types/type";
import Freelancer from "../models/freelancerModel";

const createTask = async (req: Request, res: Response) => {
  try {
    const { error } = taskValidation.validate(req.body);

    if (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
      return;
    }

    const newTask = new Task(req.body);
    await newTask.save();

    res
      .status(httpStatus.CREATED)
      .json({ message: "task created", task: newTask });
  } catch (error: any) {
    logger.error("Error creating task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const taskPaid = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const username = req.user;
    const task = await Task.findById(id);

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (task.client !== username) {
      res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: "You are not the task creator" });
      return;
    }

    if (task.status !== "Completed") {
      res.status(httpStatus.NOT_ACCEPTABLE).json({ error: "Task has not been marked as completed" });
      return;
    }

    if (task.payment !== "Pending") {
      res.status(httpStatus.NOT_ACCEPTABLE).json({ error: "Payment has been made already" });
      return;
    }

    task.payment = "Paid";
    await task.save();

    const freelancer = await Freelancer.findOne({ username: task.freelancer });
    freelancer!.totalProjects++;
    freelancer!.pendingProjects--;
    freelancer!.earnings += task.usdcAmount;

    const project = {
      projectName: task.title,
      workType: task.workType,
      cost: task.usdcAmount,
      state: task.status,
      payment: task.payment
    }

    freelancer!.projects.push(project);
    await freelancer!.save();

    res.status(httpStatus.OK).json({ message: "freelancer has been paid" })
  } catch (error: any) {
    logger.error("Error setting task as paid");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const taskHistory = async (req: CustomRequest, res: Response) => {
  try {
    const username = req.user;
    const tasks = await Task.find({ client: username });

    if (!tasks) {
      res.status(httpStatus.OK).json({ message: "No task available" });
      return;
    }
    
    res.status(httpStatus.OK).json({ message: "tasks fetched", tasks });
  } catch (error: any) {
    logger.error("Error fetching task history");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

export { createTask, taskPaid, taskHistory };
