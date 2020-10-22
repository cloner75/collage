// Package
import * as multer from "multer";
import * as path from "path";
import * as _ from "lodash";
import * as jimp from "jimp";

// Conts
import mimeTypes from "./../configs/mimeTypes";
const sizeOf = require("image-size");
const LIMIT: number = 10;
const UPLOAD: string = "./../uploads";

// Functions

/**
 * TODO Set Config Multer
 */
export const config = () => {
  return multer({
    storage: multer.diskStorage({
      destination: (_req, _file, cb) => {
        cb(null, path.join(__dirname, UPLOAD));
      },
    }),

    // FileFilter
    fileFilter: (_req, file, cb) => {
      _.keys(mimeTypes).includes(file.mimetype)
        ? cb(null, true)
        : cb(new Error("File Type Not Permissend"));
    },
    // Limits
    limits: { fileSize: LIMIT * 1024 * 1024 },
  });
};

/**
 * TODO Set Resize Multer
 */
export const resize = (cdnFile: string) => {
  const { height, width } = sizeOf(String(UPLOAD.concat(cdnFile)));
  const converLiset = [
    {
      fileName: `thumbnail-${cdnFile}`,
      width: 256,
      height: height / (width / 256),
      quality: 50,
    },
    {
      fileName: `512-${cdnFile}`,
      width: 512,
      height: height / (width / 512),
      quality: 40,
    },
    {
      fileName: `128-${cdnFile}`,
      width: 128,
      height: height / (width / 128),
      quality: 30,
    },
    {
      fileName: `blur-${cdnFile}`,
      width: 128,
      height: height / (width / 128),
      quality: 50,
      blur: 5,
    },
  ];
  jimp.read(UPLOAD.concat(cdnFile), (err, image) => {
    for (let item of converLiset) {
      image.resize(item.width, item.height).quality(item.quality);
      item.blur ? image.blur(item.blur) : false;
      image.write(`./uploads/${item.fileName}`);
    }
  });
};
