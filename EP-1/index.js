//Information: This is a simple express.js Server which responds with a message.
import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Hello from Express.js server!");
});

app.listen(PORT, (req, res) => {
    console.log("Server is running on http://localhost:" + PORT);
});