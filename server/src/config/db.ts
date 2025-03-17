import mongoose from "mongoose";
import logger from "./logger";
import { DB_URL } from "../utils/env";

// General container

const DB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    logger.info(
      `\x1b[36m%s\x1b[0m`,
      `DB: MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error: any) {
    logger.error(
      `\x1b[31m%s\x1b[0m`,
      `DB: MongoDB Connection Failure: ${error.message}`
    );
    process.exit(1);
  }
};

export default DB;
