// Packages
import * as express from "express";

// Connections
import { appSetting, startServer } from "./src/helpers/connection";
import userRoutes from "./src/routers/user";

const app: any = appSetting(express);

startServer(app, 4000);

app.use(userRoutes);
