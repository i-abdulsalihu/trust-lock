import type { Request, Response } from "express";
import userValidation from "../validation/userValidation";
import Validator from "../models/validatorModel";
import Client from "../models/clientModel";
import Freelancer from "../models/freelancerModel";
import logger from "../config/logger";
import httpStatus from "http-status";
import type { accountType, roles } from "../types/type";

const userAccount: accountType = {
  freelancer: async (user, res) => {
    const emailExistsOnFreelancer = await Freelancer.findOne({ email: user.email });
    const emailExistsOnValidator = await Validator.findOne({ email: user.email });
    const emailExistsOnClient = await Client.findOne({ email: user.email });

    if (emailExistsOnClient || emailExistsOnFreelancer || emailExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "email already exists" });
      return;
    }

    const usernameExistsOnFreelancer = await Freelancer.findOne({ username: user.username });
    const usernameExistsOnValidator = await Validator.findOne({ username: user.username });
    const usernameExistsOnClient = await Client.findOne({ username: user.username });

    if (usernameExistsOnClient || usernameExistsOnFreelancer || usernameExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "username already exists" });
      return;
    }

    const freeLancer = new Freelancer(user);
    await freeLancer.save();

    res.
      status(httpStatus.CREATED)
      .json({ message: "freelancer created", freelancer: freeLancer })
    return;
  },

  client: async (user, res) => {
    const emailExistsOnFreelancer = await Freelancer.findOne({ email: user.email });
    const emailExistsOnValidator = await Validator.findOne({ email: user.email });
    const emailExistsOnClient = await Client.findOne({ email: user.email });

    if (emailExistsOnClient || emailExistsOnFreelancer || emailExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "email already exists" });
      return;
    }

    const usernameExistsOnFreelancer = await Freelancer.findOne({ username: user.username });
    const usernameExistsOnValidator = await Validator.findOne({ username: user.username });
    const usernameExistsOnClient = await Client.findOne({ username: user.username });

    if (usernameExistsOnClient || usernameExistsOnFreelancer || usernameExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "username already exists" });
      return;
    }

    const clienT = new Client(user);
    await clienT.save();

    res
      .status(httpStatus.CREATED)
      .json({ message: "client created", client: clienT });
    return;
  },
  
  validator: async (user, res) => {
    const emailExistsOnFreelancer = await Freelancer.findOne({ email: user.email });
    const emailExistsOnValidator = await Validator.findOne({ email: user.email });
    const emailExistsOnClient = await Client.findOne({ email: user.email });

    if (emailExistsOnClient || emailExistsOnFreelancer || emailExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "email already exists" });
      return;
    }

    const usernameExistsOnFreelancer = await Freelancer.findOne({ username: user.username });
    const usernameExistsOnValidator = await Validator.findOne({ username: user.username });
    const usernameExistsOnClient = await Client.findOne({ username: user.username });
    
    if (usernameExistsOnClient || usernameExistsOnFreelancer || usernameExistsOnValidator) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "username already exists" });
      return;
    }

    const vaLidator = new Validator(user);
    await vaLidator.save();

    res
      .status(httpStatus.CREATED)
      .json({ message: "validator created", validator: vaLidator });
    return;
  }
}

const auth = async (req: Request, res: Response) => {
  try {
    const { error } = userValidation.validate(req.body);

    if (error) {
      res.status(httpStatus.BAD_REQUEST).json({ error: error.details[0].message });
      return;
    }

    const { role } = req.body;
    userAccount[role as roles](req.body, res);
  } catch (error: any) {
    logger.error("Error authenticating user");
    console.dir(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
};


export {
  auth
};