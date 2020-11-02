// Packages

// Controllers
import ChatController from "../controller/chat";

// Middlewares
import { create, update, find, findOne, remove } from "./../middlewares/chat";

// Consts
enum Names {
  ROOT = "/chat",
  PARAM = "/chat/:id",
}
const Chat: any = new ChatController();

export default (router) => {
  router
    .post(Names.ROOT, create, Chat.create)
    .get(Names.ROOT, find, Chat.find)
    .get(Names.PARAM, findOne, Chat.findOne)
    .put(Names.PARAM, update, Chat.update)
    .delete(Names.PARAM, remove, Chat.delete);
};
