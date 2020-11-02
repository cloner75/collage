// Packages

// Controllers
import AuthorizationController from "../controller/authorization";

// Middlewares
import { signIn, signUp } from "./../middlewares/authorization";

// Consts
enum Names {
  ROOT = "/signin",
  PARAM = "/signup",
}
const Authorization: any = new AuthorizationController();

export default (router) => {
  router
    .post(Names.ROOT, signUp, Authorization.signIn)
    .post(Names.ROOT, signIn, Authorization.signUp);
};
