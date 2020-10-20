// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import ChatModel from "../models/chat";

/**
 * TODO Chat Controller
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
      const createChat = await ChatModel.create(req.body);
      return res.send(createChat);
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
      const getChats = await ChatModel.paginate({}, req.query);
      return res.status(200).send(getChats);
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
      const getChat = await ChatModel.paginate({ _id: req.params.id }, req.query);
      return res.send(getChat);
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
