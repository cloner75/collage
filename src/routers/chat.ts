// Packages

// Controllers
import ChatController from "../controller/chat";

// Middlewares

// Consts
enum Names {
  ROOT = "/chat",
  PARAM = "/chat/:id",
}
const Chat: any = new ChatController();

export default (router) => {
  router
    .post(Names.ROOT, Chat.create)
    .get(Names.ROOT, Chat.find)
    .get(Names.PARAM, Chat.findOne)
    .put(Names.PARAM, Chat.update)
    .delete(Names.PARAM, Chat.delete);
};
