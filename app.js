const { calcSum, calcProduct, x } = require("./calculate");
const util = require("node:util");

require("./xyz.js");
// const { calcSum, x } = require("./calculate/sum.js");
// import { calcSum, x } from "./sum.js";

let namePerson = "Jagrut";

let a = 10;
let b = 20;

console.log(namePerson);
console.log(globalThis === global);

calcSum(a, b);
calcProduct(a, b);
console.log(x);

setTimeout(() => {
  console.log("Waited for 5 sec");
}, 5000);
setTimeout(() => {
  console.log("Waited for 10 sec");
}, 10000);
setTimeout(() => {
  console.log("Waited for 5 sec again");
}, 5000);
