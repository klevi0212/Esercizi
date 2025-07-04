import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
  });
  res.end(JSON.stringify({ message: "Hello!" }));
});
server.listen(3000, "127.0.0.1", console.log("Questo è il server"));
