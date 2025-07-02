import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
  });

  const data = { message: "Hello, World!" };

  res.end(JSON.stringify(data));
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server attivo sulla porta 3000");
});
// la funzione nel listen serve solo per mostrare il console.log e farci capire che funziona
