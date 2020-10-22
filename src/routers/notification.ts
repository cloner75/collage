// Packages

// Controllers
import NotificationController from "../controller/notification";

// Middlewares

// Consts
enum Names {
  ROOT = "/notification",
  SEND = "/notification/send",
}
const Notification: any = new NotificationController();

export default (router) => {
  router
    .post(Names.ROOT, Notification.create)
    .get(Names.ROOT, Notification.find)
    .get(Names.SEND, Notification.send);
};
