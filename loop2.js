const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Resolve").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("setImmediate"));
  console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of code");

/*
Last line of code
nextTick
Resolve
Timer expired
setImmediate
File reading CB
2nd nextTick
setImmediate
2nd Timer
*/
