// Packages

// Controllers
import NotificationController from "../controller/notification";

// Middlewares
import { create, update, find, findOne, remove } from "./../middlewares/chat";

// Consts
enum Names {
  ROOT = "/notification",
  SEND = "/notification/send",
}
const Notification: any = new NotificationController();

export default (router) => {
  router
    .post(Names.ROOT, create, Notification.create)
    .get(Names.ROOT, find, Notification.find);
};
