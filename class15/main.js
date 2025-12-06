const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.end("404 Not Found");
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log("Server running on port", port);
});
