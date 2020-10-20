// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import NotificationModel from "../models/notification";

/**
 * TODO Notification Controller
 */
export default class Notification {
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
      const createNotification = await NotificationModel.create(req.body);
      return res.send(createNotification);
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
      const getNotifications = await NotificationModel.paginate({}, req.query);
      return res.status(200).send(getNotifications);
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
      const getNotification = await NotificationModel.paginate({ _id: req.params.id }, req.query);
      return res.send(getNotification);
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
