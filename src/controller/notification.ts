// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import NotificationModel from "../models/notification";

// Helpers
import { send } from "./../helpers/fcm.notification";

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
      const { title, body } = req.body;
      const createNotification = await NotificationModel.create(req.body);
      // FIND All FCM TOKEN OF USERS THEN SEND NOTIFICATION
      await send("allUsers", title, body);
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
}
