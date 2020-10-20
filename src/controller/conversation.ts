// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import ConversationModel from "../models/conversation";

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
      const getConversations = await ConversationModel.paginate({}, req.query);
      return res.status(200).send(getConversations);
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
      const getConversation = await ConversationModel.paginate({ _id: req.params.id }, req.query);
      return res.send(getConversation);
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
      return res.send({ success: true, request: "findOne" });
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
      return res.send({ success: true, request: "findOne" });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
