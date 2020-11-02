// Packages
import { Request, Response } from "express";

// Schema
import ConversationSchema from "./conversation.schema";

/**
 * TODO Create Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export const create = (req: Request, res: Response, next: any) => {
  ConversationSchema.create
    .validateAsync(req.body)
    .then((_response) => next())
    .catch((err) => res.status(422).send(err));
};

/**
 * TODO Find Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export const find = (req: Request, res: Response, next: any) => {
  ConversationSchema.find
    .validateAsync(req.query)
    .then((_response) => next())
    .catch((err) => res.status(422).send(err));
};

/**
 * TODO FindOne Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export const findOne = (req: Request, res: Response, next: any) => {
  ConversationSchema.findOne
    .validateAsync({ ...req.params, ...req.query })
    .then((_response) => next())
    .catch((err) => res.status(422).send(err));
};

/**
 * TODO Update Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export const update = (req: Request, res: Response, next: any) => {
  ConversationSchema.update
    .validateAsync({ ...req.body, ...req.params })
    .then((_response) => next())
    .catch((err) => res.status(422).send(err));
};

/**
 * TODO Delete Middleware
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export const remove = (req: Request, res: Response, next: any) => {
  ConversationSchema.delete
    .validateAsync({ ...req.body, ...req.params })
    .then((_response) => next())
    .catch((err) => res.status(422).send(err));
};
