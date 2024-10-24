const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Namaste World");
});

server.listen(7000);
