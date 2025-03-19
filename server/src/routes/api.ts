import express from "express";
import auth from "../controllers/api";
import clientRoutes from "./client.route";
import validatorRoutes from "./validator.route";
import freelancerRoutes from "./freelancer.route";

const router = express.Router();

router
  .use("/client", clientRoutes)
  .use("/validator", validatorRoutes)
  .use("/freelancer", freelancerRoutes)
  .post("/auth", auth);

export default router;