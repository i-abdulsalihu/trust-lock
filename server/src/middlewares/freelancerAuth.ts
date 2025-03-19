import type { Response, NextFunction } from "express";
import httpStatus from "http-status";
import type { CustomRequest } from "../types/type";

const freelancerAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const role = req.role;
  
  if (!role) {
    res.status(httpStatus.FORBIDDEN).json({ error: "user needs to be logged in" });
    return;
  }

  if (role !== "freelancer") {
    res.status(httpStatus.UNAUTHORIZED).json({ error: "You can't access this route" });
    return;
  }
  next();
}

export default freelancerAuth;