import type { Response } from "express";

export type roles = "freelancer" | "client" | "validator";

export type userObject = {
  username: string;
  email: string;
  bio: string;
  occupation: string;
  firstName: string;
  lastName: string;
}

export type accountType = {
  [key in roles]: (user: userObject, res: Response) => {}
}
