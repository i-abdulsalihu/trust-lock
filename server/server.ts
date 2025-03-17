import express from "express";
import cors from "cors";
import { PORT }  from "./src/utils/env";
import logger from "./src/config/logger";
import DB from "./src/config/db";
import apiRoutes from "./src/routes/api";

const server = express();

// server.use(cors({ origin: ["http://localhost:3000", "https://trust-lock.vercel.app"] }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", apiRoutes);

server.listen(PORT, async () => {
  logger.info(`✅ Server is running on port ${PORT}`);
  await DB();
})