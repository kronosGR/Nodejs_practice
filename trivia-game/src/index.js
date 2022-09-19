const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("A new player just connected.");
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
