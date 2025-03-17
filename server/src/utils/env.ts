import * as dotenv from "dotenv";

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV || "development";

export const PORT = process.env.PORT || 5050;

export const DB_URL = process.env.DB_URL!;