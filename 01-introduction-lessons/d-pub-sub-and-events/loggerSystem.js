// loggerSystem.js
//
import eventEmitter from "./messageBroker.js";

function onUserCreates(name) {
  console.log(`User ${name} was created`);
}

eventEmitter.on("user.created", onUserCreates);
