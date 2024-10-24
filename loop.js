const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve("Resolve").then((data) => console.log(data));

fs.readFile("./file.txt", "utf-8", () => console.log("Reading file"));

setTimeout(() => {
  console.log("Timer expired");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick");
});

function printA() {
  console.log("A=", a);
}

printA();
console.log("Last line of code");

/* 
A= 100
Last line of code
process.nextTick
Resolve
Timer expired
setImmediate
Reading file
*/
