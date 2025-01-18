const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("hello world the server is running");
});

server.listen(3000);
