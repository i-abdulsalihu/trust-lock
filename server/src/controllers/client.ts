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

const taskPaid = async (req: Request, res: Response) => {
  
};

const taskHistory = async (req: Request, res: Response) => {

};


export { createTask, taskPaid, taskHistory };