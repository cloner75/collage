// Packages
import { Router } from "express";

// Controllers
// import UserController from "./../controller/user";

// Middlewares

// Consts
enum Names {
  ROOT = "/",
  PARAM = "/:id",
}
const router: any = Router();
// const User: any = new UserController();

router.get("/", (_req, _res) => {
  throw new Error("BROKEN"); // Express will catch this on its own.
});
// define the home page route
// router.post(Names.ROOT, User.create);

// // define the about route
// router.get(Names.PARAM, User.findOne);

export default router;
