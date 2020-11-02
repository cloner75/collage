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
  constructor() {}

  /**
   * TODO Root Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      _.assign(req.body, { status: 1, isUser: true });
      const createUser = await UserModel.create(req.body);
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
      const getUsers = await UserModel.paginate({}, req.query);
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
      const getUser = await UserModel.paginate(
        { _id: req.params.id },
        req.query
      );
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
      const updateUser: any = await UserModel.updateOne(
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
      const deleteUser: any = await UserModel.remove({ _id });
      return res.sendStatus(deleteUser.n ? 200 : 404);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
