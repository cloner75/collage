// Packages

// Controllers
import FileController from "../controller/files";

// Middlewares
import { config } from "./../helpers/upload.multer";

// Consts
enum Names {
  ROOT = "/file",
  PARAM = "/file/:file",
}
const multer: any = config();
const File: any = new FileController();

export default (router) => {
  router
    .post(Names.ROOT, multer.array("files", 15), File.create)
    .get(Names.ROOT, File.find)
    .get(Names.PARAM, File.showFile);
};
