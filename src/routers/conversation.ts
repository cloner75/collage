// Packages

// Controllers
import ConversationController from "../controller/conversation";

// Middlewares
import { create, update, find, findOne, remove } from "./../middlewares/chat";

// Consts
enum Names {
  ROOT = "/conversation",
  PARAM = "/conversation/:id",
}
const Conversation: any = new ConversationController();

export default (router) => {
  router
    .post(Names.ROOT, create, Conversation.create)
    .get(Names.ROOT, find, Conversation.find)
    .get(Names.PARAM, findOne, Conversation.findOne)
    .put(Names.PARAM, update, Conversation.update)
    .delete(Names.PARAM, remove, Conversation.delete);
};
