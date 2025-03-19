import type { Response, Request } from "express";

export type roles = "freelancer" | "client" | "validator";

export type userObject = {
  username: string;
  email: string;
  bio: string;
  occupation: string;
  firstName: string;
  lastName: string;
}

export interface CustomRequest extends Request {
  user?: string;
  role?: string;
}

export type accountType = {
  [key in roles]: (user: userObject, req: CustomRequest, res: Response) => {}
}
