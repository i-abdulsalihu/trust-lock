import type { Request, Response } from "express";
import logger from "../config/logger";
import httpStatus from "http-status";
import Task from "../models/taskModel";
import taskValidation from "../validation/taskValidation";
import Freelancer from "../models/freelancerModel";
import Validator from "../models/validatorModel";

const createTask = async (req: Request, res: Response) => {
  try {
    const { error } = taskValidation.validate(req.body);

    if (error) {
      res.status(httpStatus.BAD_REQUEST).json({ error: error.details[0].message });
      return;
    }

    const newTask = new Task(req.body);
    newTask.save();

    res.status(httpStatus.CREATED).json({ message: "task created", task: newTask });
  } catch (error: any) {
    logger.error("Error creating task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
};

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
    const openTasks = tasksToBeSent.filter(task => task.status === "Open");

    if (openTasks?.length === 0) {
      res.status(httpStatus.OK).json({ message: "No open tasks" });
      return;
    }

    res.status(httpStatus.OK).json({ message: "open tasks fetched", tasks: openTasks });
  } catch (error: any) {
    logger.error("Error fetching all tasks");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
};

const setValidator = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const task = await Task.findById(id);
    const validator = await Validator.findOne({ username });

    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (!validator) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "the username sent is invalid" });
      return;
    }

    if (!task.validator) {
      task.validator = username;
      await task.save();

      res.status(httpStatus.OK).json({ message: "validator set" });
      return;
    }

    res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "validator already set" });
  } catch (error: any) {
    logger.error("Error adding validator to task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const acceptTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const task = await Task.findById(id);
    const freelancer = await Freelancer.findOne({ username });
    
    if (!task) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "invalid id" });
      return;
    }

    if (!freelancer) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "the username sent is invalid" });
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

    res.status(httpStatus.BAD_REQUEST).json({ error: "freelancer already set" });
  } catch (error: any) {
    logger.error("Error accepting task");
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
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
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
};

const requestDispute = async (req: Request, res: Response) => {

};

export { taskDone, createTask, setValidator, getTask, getTasks, acceptTask };