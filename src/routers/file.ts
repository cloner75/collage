// Packages

// Controllers
import FileController from "../controller/files";

// Middlewares

// Consts
enum Names {
  ROOT = "/user",
  PARAM = "/user/:id",
}
const File: any = new FileController();

export default (router) => {
  router
    .post(Names.ROOT, File.create)
    .get(Names.ROOT, File.find)
    .get(Names.PARAM, File.findOne)
    .put(Names.PARAM, File.update)
    .delete(Names.PARAM, File.delete);
};
