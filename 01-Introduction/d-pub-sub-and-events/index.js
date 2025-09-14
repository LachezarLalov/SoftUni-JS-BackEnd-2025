// index.js

import "./init.js";

import eventEmitter from "./messageBroker.js";

function createUser(name) {
  // TODO create user in database
  console.log(`Creating user ${name}...`);
  // Emit event
  eventEmitter.emit("user.created", name);
}

createUser("John");
createUser("Jane");
