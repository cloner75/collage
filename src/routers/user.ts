// Packages

// Controllers
import UserController from "./../controller/user";

// Middlewares
import { create, update, find, findOne, remove } from "./../middlewares/chat";

// Consts
enum Names {
  ROOT = "/user",
  PARAM = "/user/:id",
}
const User: any = new UserController();

export default (router) => {
  router
    .post(Names.ROOT, create, User.create)
    .get(Names.ROOT, find, User.find)
    .get(Names.PARAM, findOne, User.findOne)
    .put(Names.PARAM, update, User.update)
    .delete(Names.PARAM, remove, User.delete);
};
