// Packages
import * as mongoose from "mongoose";
import { urlencoded, json } from "body-parser";
import * as cors from "cors";
import { nextTick } from "process";

/**
 * TODO Return app
 * @param {any} express
 */
export const appSetting = (express): any => {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use((err, _req, res, next) => {
    if (err) {
      return res.sendStatus(400);
    }
    next();
  });
  app.use(cors());
  app.use(express.static("public"));
  return app;
};

/**
 *  TODO Connection Mongo
 * @param {number} port
 * @param {string} host
 * @param {string} dbName
 */
export const mongoConnection = (
  dbName: string = "typeScript",
  port: number = 27017,
  host: string = "localhost"
): void => {
  mongoose.connect(
    `mongodb://${host}:${port}/${dbName}`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err, _) => {
      if (err) {
        console.log("Mongo Is Down");
      } else {
        console.log(`Mongo Is Runnign On Port: ${Number(port)}`);
      }
    }
  );
};

/**
 *  TODO Server Runner
 * @param {any} app
 * @param {number} port
 * @param {string} message
 */
export const startServer = (
  app: any,
  port: number,
  message: string = "App Is Running On Port: "
): void => {
  app.listen(port, () => {
    mongoConnection(process.env.DB_NAME);
    console.log(message, port);
  });
};
