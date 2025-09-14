// thirdModule.js
import eventEmitter from "./messageBroker.js";

eventEmitter.on("user.created", () => {
  console.log("Another module is listening for user.created...");
});
