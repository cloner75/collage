// Packages

// Controllers
import ConversationController from "../controller/conversation";

// Middlewares

// Consts
enum Names {
  ROOT = "/conversation",
  PARAM = "/conversation/:id",
}
const Conversation: any = new ConversationController();

export default (router) => {
  router
    .post(Names.ROOT, Conversation.create)
    .get(Names.ROOT, Conversation.find)
    .get(Names.PARAM, Conversation.findOne)
    .put(Names.PARAM, Conversation.update)
    .delete(Names.PARAM, Conversation.delete);
};
