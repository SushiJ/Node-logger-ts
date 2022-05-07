import logEvent from "./LogEvent";

import EventEmitter from "events";

class Emitter extends EventEmitter {}

//Initialise object

const _emitter = new Emitter();

// Adding listener for log events
_emitter.on("log", (msg) => {
  logEvent(msg);
});
// Test
setTimeout(() => {
  _emitter.emit("log", "This is a generic log event");
}, 2000);
