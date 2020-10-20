// Packages

// Controllers
import NotificationController from "../controller/notification";

// Middlewares

// Consts
enum Names {
  ROOT = "/notification",
  PARAM = "/notification/:id",
}
const Notification: any = new NotificationController();

export default (router) => {
  router
    .post(Names.ROOT, Notification.create)
    .get(Names.ROOT, Notification.find)
    .get(Names.PARAM, Notification.findOne)
    .put(Names.PARAM, Notification.update)
    .delete(Names.PARAM, Notification.delete);
};
