// Packages

// Controllers
import UserController from "./../controller/user";

// Middlewares

// Consts
enum Names {
  ROOT = "/user",
  PARAM = "/user/:id",
}
const User: any = new UserController();

export default (router) => {
  router
    .post(Names.ROOT, User.create)
    .get(Names.ROOT, User.find)
    .get(Names.PARAM, User.findOne);
};
