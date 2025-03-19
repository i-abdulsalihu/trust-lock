import express from "express";
import { acceptTask, getTask, getTasks, requestDispute, taskDone } from "../controllers/freelancer";
import freelancerAuth from "../middlewares/freelancerAuth";

const router = express.Router();

router
  .post("/accept-task", freelancerAuth, acceptTask)
  .get("/tasks", freelancerAuth, getTasks)
  .post("/submit-task", freelancerAuth, taskDone)
  .post("/request-dispute", freelancerAuth, requestDispute)
  .get("/task/:id", freelancerAuth, getTask);

export default router;