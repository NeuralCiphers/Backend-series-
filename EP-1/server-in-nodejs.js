// Information: This is a simple Node.js Server which responds with a message.
import http from "http";

const PORT = 9000;
const server = http.createServer((req, res) => {
    res.end("Hello from Node.js server!");
});

server.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
