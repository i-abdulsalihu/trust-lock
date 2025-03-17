import Joi from "joi";

const userValidation = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  bio: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  username: Joi.string().trim().required(),
  role: Joi.string().trim()
});

export default userValidation;