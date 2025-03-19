import express from "express";
import { createTask, taskPaid, taskHistory } from "../controllers/client";
import clientAuth from "../middlewares/clientAuth";

const router = express.Router();

router
  .post("/create-task", clientAuth, createTask)
  .get("/history", clientAuth, taskHistory)
  .post("/paid/:id", clientAuth, taskPaid);

export default router;