// Packages
import { Router } from "express";
// Routes

import userRoute from "./user";
import notificationRoute from "./notification";
import chatRoute from "./chat";
import conversationRoute from "./conversation";
import fileRoute from "./file";

// Consts
const router: any = Router();

userRoute(router);
notificationRoute(router);
chatRoute(router);
conversationRoute(router);
fileRoute(router);

export default router;
