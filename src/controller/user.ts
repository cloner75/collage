// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import UserModel from "./../models/user";

/**
 * TODO User Controller
 */
export default class User {
  /**
   * TODO Constructor
   */
  constructor() {
    console.log("User Conatroller");
  }

  /**
   * TODO Root Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      return res.send({ success: true });
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
      return res.send({ success: true, request: "find" });
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
      return res.send({ success: true, request: "findOne" });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
