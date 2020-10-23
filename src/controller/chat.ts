// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import ChatModel from "./../models/chat";

// Helper
import { initialMongoQuery } from "./../helpers/mogodb";

// Consts
enum Consts {
  name = "chat",
}

/**
 * TODO Conversation Controller
 */
export default class Chat {
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
      const createUser = await ChatModel.create(req.body);
      return res.send(createUser);
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
      const getUsers = await ChatModel.paginate(where, options);
      return res.status(200).send(getUsers);
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
      const getChat = await ChatModel.paginate(where, options);
      return !getChat._doc.length ? res.sendStatus(404) : res.send(getChat);
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
      const updateUser: any = await ChatModel.updateOne(
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
      const deleteUser: any = await ChatModel.remove({ _id });
      return res.sendStatus(deleteUser.n ? 200 : 404);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
