// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Models
import FileModel from "../models/files";

/**
 * TODO File Controller
 */
export default class File {
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
      const createFile = await FileModel.create(req.body);
      return res.send(createFile);
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
      const getFiles = await FileModel.paginate({}, req.query);
      return res.status(200).send(getFiles);
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
      const getFile = await FileModel.paginate({ _id: req.params.id }, req.query);
      return res.send(getFile);
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
