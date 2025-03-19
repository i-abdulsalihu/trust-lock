import express from "express";
import { clearDispute, tasks, validateTask, getDisputes } from "../controllers/validator";
import validatorAuth from "../middlewares/validatorAuth";

const router = express.Router();

router
  .post("/clear-dispute", validatorAuth, clearDispute)
  .get("/disputes", validatorAuth, getDisputes)
  .post("/validate-task/:id", validatorAuth, validateTask)
  .get("/tasks", validatorAuth, tasks);

export default router;