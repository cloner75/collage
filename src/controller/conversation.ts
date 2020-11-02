// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import ConversationModel from "./../models/conversation";

// Helpers
import { initialMongoQuery } from "./../helpers/mogodb";

// Consts
enum Consts {
  name = "conversation",
}

/**
 * TODO Conversation Controller
 */
export default class Conversation {
  /**
   * TODO Constructor
   */
  constructor() {}

  /**
   * TODO Root Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const createConversation = await ConversationModel.create(req.body);
      return res.send(createConversation);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  /**
   * TODO Find One Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      const { where, options } = initialMongoQuery(req.query, Consts.name);
      const getConversation = await ConversationModel.paginate(where, options);
      return res.status(200).send(getConversation);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  /**
   * TODO Find One Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      _.assign(req.query, { _id: req.params.id });
      const { where, options } = initialMongoQuery(req.query, Consts.name);
      const getUser = await ConversationModel.paginate(where, options);
      return res.send(getUser);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  /**
   * TODO Find One Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const _id: string = String(req.params.id);
      const updateUser: any = await ConversationModel.updateOne(
        { _id },
        { $set: req.body }
      );
      return updateUser.n ? res.send(updateUser) : res.sendStatus(404);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  /**
   * TODO Find One Controller
   * @param {request} req
   * @param {response} res
   */
  async delete(req: Request, res: Response) {
    try {
      const _id: string = String(req.params.id);
      const deleteUser: any = await ConversationModel.remove({ _id });
      return res.sendStatus(deleteUser.n ? 200 : 404);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
