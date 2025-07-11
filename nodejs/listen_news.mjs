// The newsEvent object continuously emits three different events: newsEvent, breakingNews and error

// Attach event listeners for each event and log out their data.

import { EventEmitter } from "node:events";

function createNewsFeed() {
  const emitter = new EventEmitter();

  emitter.on("newsEvent", (value1) => {
    console.log(value1);
  });
  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  emitter.on("breakingNews", (value2) => {
    console.log(value2);
  });
  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  emitter.on("error", (value3) => {
    console.log(value3);
  });
  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}
createNewsFeed();
