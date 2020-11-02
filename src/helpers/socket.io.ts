// Package
import * as socket from "socket.io";

// Consts
const io: any = socket(4000);

/**
 * TODO Export IO
 */
export const IO: any = io;

/**
 * TODO Disconnect Event
 * @param {socket} client
 */
export const disconnect = (client: any) => {
  client.on("disconnect", () => {
    console.log("user disconnected", client.id);
  });
};

/**
 * TODO Join To Room
 * @param {socket} io
 * @param {string} roomName
 */
export const joinToRoom = (io: any, roomName: string) => {
  io.join(roomName);
};

/**
* TODO Leave To Room
* @param {socket} io
* @param {string} roomName
*/
export const leaveToRoom = (io: any, roomName: string) => {
 io.leave(roomName);
};

/**
 * TODO Emit To Room 
 * @param {socket} io
 * @param {string} roomName
 * @param {string} eventName
 * @param {object} data
 */
export const sendToRoom = (
  io: any,
  roomName: string,
  eventName: string,
  data: object
) => {
  io.sockets.in(roomName).emit(eventName, data);
};

