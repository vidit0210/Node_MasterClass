const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url == "/course") {
    res.write(JSON.stringify(["Python", "JavaScript"]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening To Port 3000");
