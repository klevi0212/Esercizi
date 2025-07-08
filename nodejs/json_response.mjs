// Our HTTP server now sends a JSON response body.

// Change the location in the response to "Mars".
// Run the server and make a request to it with curl using the --verbose flag.
// What is the value of the Content-Length response header?
// There should be a single script that:

// Imports the Node.js core http module (or with node:http).
// Creates an HTTP server with the http.createServer method.
// Sets the response header: Content-Type: application/json
// Sends the JSON response body: { location: "Mars" }
// The value of the Content-Length response header is 19.
import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  const data = {
    location: "Mars",
  };
  const jsonResponseBody = JSON.stringify(data);
  res.end(jsonResponseBody);
});
server.listen(3000, () => {
  console.log("Il server è attivo su http://localhost:3000");
});
