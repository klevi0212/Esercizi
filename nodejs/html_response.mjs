// Our HTTP server sends an HTML response body. Replace the text in the HTML with your own message.
// Run the server and use your web browser to test your changes.

// Imports the Node.js core http module (or with node:http).
// Creates an HTTP server with the http.createServer method.
// Set the response status code to 200
// Sets the response header: Content-Type: text/html
// Sends an HTML response body containing any message.
// Make the server listen to the port 3000
import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content_type", "text/html");
  res.end("<html><body><h1>This is an HTML element!</h1></body></html>");
});
server.listen(3000, () => {
  console.log("Il server è attivo su http://localhost:3000");
});
