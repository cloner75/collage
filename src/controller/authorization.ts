// Packages
import * as _ from "lodash";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcrypt';

// Models
import UserModel from "./../models/user";

// Helper
import { initialMongoQuery } from "./../helpers/mogodb";
import User from "./user";

// Consts
enum Consts {
  name = "user",
}

/**
 * TODO Conversation Controller
 */
export default class Authorization {
  /**
   * TODO Constructor
   */
  constructor() {}

  /**
   * TODO Root Controller
   * @param {request} req
   * @param {response} res
   */
  async signIn(req: Request, res: Response) {
    try {
      const { username, password: passwordInput } = req.body;
      const checkUser = await UserModel.findOne({ username });
      if (!checkUser) {
        return res.sendStatus(404);
      }
      const { password, ...rest } = checkUser;
      const token = jwt.sign(rest, process.env.SECRET_KEY_JWT, {
        expairIn: "1d",
      });
      return res.send(token);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  /**
   * TODO Find One Controller
   * @param {request} req
   * @param {response} res
   */
  async signUp(req: Request, res: Response) {
    try {
      const { where, options } = initialMongoQuery(req.query, Consts.name);
      const getUsers = await UserModel.paginate(where, options);
      return res.status(200).send(getUsers);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
