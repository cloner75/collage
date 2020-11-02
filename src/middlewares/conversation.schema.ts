// Pacjages
import * as Joi from "joi";

// Consts
import configs from "./../configs/index";
const messages = {
  "any.required": configs.errors[1],
  "object.unknown": configs.errors[1],
  "array.base": configs.errors[2],
  "string.base": configs.errors[2],
  "string.pattern.base": configs.errors[2],
  "any.only": configs.errors[2],
  "string.empty": configs.errors[10],
  "string.min": configs.errors[11],
  "string.max": configs.errors[12],
};

// Schemas
export default {
  /**
   * TODO Export Schema Create
   */
  create: Joi.object({
    userId: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .required()
      .messages(messages),
    clientId: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .required()
      .messages(messages),
    status: Joi.number().valid(1, 2, 3).required().messages(messages),
  }),

  /**
   * TODO Export Schema Find
   */
  find: Joi.object({
    userId: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .messages(messages),
    clientId: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .messages(messages),
    status: Joi.number().valid(1, 2, 3).messages(messages),
  }),

  /**
   * TODO Export Schema Find One
   */
  findOne: Joi.object({
    id: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .messages(messages),
    clientId: Joi.string(),
  }),

  /**
   * TODO Export Schema Update
   */
  update: Joi.object({
    id: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .messages(messages),
    clientId: Joi.string(),
    status: Joi.number().valid(1, 2, 3).required().messages(messages),
  }),

  /**
   * TODO Export Schema Delete
   */
  delete: Joi.object({
    id: Joi.string()
      .trim()
      .pattern(/^0?9\d{9}$/)
      .messages(messages),
    clientId: Joi.string(),
  }),
};
