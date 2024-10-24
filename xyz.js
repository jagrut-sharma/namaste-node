const crypto = require("node:crypto");
const fs = require("fs");
const https = require("https");

console.log("Very important js code");

var a = 1078968;
var b = 98752;

crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log("Sync key is generated");

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("key is generated");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log(data);
});

https.get("https://dummyjson.com/products", (res) => {
  console.log("Fetched successfully");
});

function multiply(x, y) {
  const product = x * y;
  return product;
}

var c = multiply(a, b);
console.log(c);
