// Packages
import { Router } from "express";
// Routes

import userRoute from "./user";
import notificationRoute from "./notification";
import chatRoute from "./chat";
import conversationRoute from "./conversation";
import fileRoute from "./file";
import authorization from './authorization';

// Consts
const router: any = Router();


authorization(router);
userRoute(router);
notificationRoute(router);
chatRoute(router);
conversationRoute(router);
fileRoute(router);

export default router;
