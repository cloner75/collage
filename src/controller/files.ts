// Packages
import * as _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import { Request, Response } from "express";

// Models
import FileModel from "../models/files";

// Helpers
import { upload } from "./../helpers/upload.multer";

// Consts
const CDN = path.join(__dirname, "./../uploads/");

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
      const urls = await upload(req);
      const createFile = await FileModel.insertMany(urls);
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
  async showFile(req: Request, res: Response) {
    try {
      const cdnFile = req.params.file;
      const getFile = await FileModel.findOne({ cdnFile });
      if (!getFile) {
        return res.sendStatus(404);
      }
      res.setHeader("content-type", getFile.mimeType);
      const reader = fs.createReadStream(CDN.concat(cdnFile));
      // Stream
      reader.on("data", (chunk) => res.write(chunk));
      reader.on("error", (error) => res.end());
      reader.on("end", () => res.end());
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
