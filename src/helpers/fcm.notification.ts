// Packages
import * as FCM from "fcm-node";
import { promisify } from "util";

// Consts
const fcm = new FCM("SERVER_KEY");

/**
 * TODO SEND FCM
 */
export const send = async (to: string, title: string, body: string) => {
  return new Promise((resolve, reject) => {
    const sendNotification = promisify(fcm.send);
    sendNotification({
      to,
      collapse_key: "your_collapse_key",
      notification: { title, body },
    })
      .then((response) => {
        console.log({ response });
        resolve(response);
      })
      .catch((error) => {
        console.log({ error });
        reject(error);
      });
  });
};
