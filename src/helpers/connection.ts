// Packages
import * as mongoose from "mongoose";
import { urlencoded, json } from "body-parser";
import * as cors from "cors";

/**
 * TODO Return app
 * @param {any} express
 */
export const appSetting = (express): any => {
  const app = express();
  app.use(urlencoded({ extended: true }));
  app.use(json());
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
  port: number = 27017,
  host: string = "localhost",
  dbName: string = "typeScript"
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
        console.log("Mongo Error:", err.messageP);
      } else {
        console.log(`Mongo Is Runnign On Port: ${port}`);
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
    mongoConnection();
    console.log(message, port);
  });
};