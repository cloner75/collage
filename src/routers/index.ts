// Packages
import { Router } from "express";
// Routes

import userRoute from './user';

// Consts
const router: any = Router();

userRoute(router)

export default router;
