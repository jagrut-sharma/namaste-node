const fs = require("fs");

setImmediate(() => {
  Promise.resolve("Resolve setImmediate").then(console.log);
  process.nextTick(() => console.log("inner nextTick setImmediate"));
  console.log("setImmediate");
});

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Resolve").then((data) => {
  process.nextTick(() => console.log("Inside Promise nextTick"));
  Promise.resolve("Inner Promise Resolve").then(console.log);
  Promise.resolve("Inner Promise reject").then(console.log);
  console.log(data);
});

fs.readFile("./file.txt", "utf-8", () => console.log("File reading CB"));

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  Promise.resolve("Inner Resolve").then(console.log);
  console.log("nextTick");
});

console.log("Last line of code");

/* 
Last line of code
nextTick
inner nextTick
Resolve
Inner Resolve
Inner Promise Resolve
Inner Promise reject
Inside Promise nextTick
Timer expired
setImmediate
inner nextTick setImmediate
Resolve setImmediate
File reading CB
*/
