// Packages

import * as express from "express";
import * as dotenv from "dotenv";

// Connections
import { appSetting, startServer } from "./src/helpers/connection";
import routes from "./src/routers";

dotenv.config();

const app: any = appSetting(express);

startServer(app, Number(process.env.PORT));

app.use(routes);
 