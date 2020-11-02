// Packages
import * as  Redis from "ioredis";

// Consts
const redis = new Redis();
const pub = new Redis();

redis.subscribe("news", "music", (err, count) => {
  // Now we are subscribed to both the 'news' and 'music' channels.
  // `count` represents the number of channels we are currently subscribed to.
 
  pub.publish("news", "Hello world!");
  pub.publish("music", "Hello again!");
});
 
redis.on("message", (channel, message) => {
  // Receive message Hello world! from channel news
  // Receive message Hello again! from channel music
  console.log("Receive message %s from channel %s", message, channel);
});
 
// There's also an event called 'messageBuffer', which is the same as 'message' except
// it returns buffers instead of strings.
redis.on("messageBuffer", (channel, message) => {
  // Both `channel` and `message` are buffers.
});