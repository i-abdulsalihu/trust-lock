import Joi from "joi";

const taskValidation = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  date: Joi.date().required(),
  deadline: Joi.string().trim().required(),
  status: Joi.string(),
  skills: Joi.array().items(Joi.string()),
  usdcAmount: Joi.string().trim().required(),
  network: Joi.string().trim().required(),
  client: Joi.string().trim().required(),
  workType: Joi.string().trim().required()
});

export default taskValidation;