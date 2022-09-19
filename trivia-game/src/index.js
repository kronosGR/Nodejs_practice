const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const formatMessage = require("./utils/formatMessage");

const {
  addPlayer,
  getAllPlayers,
  getPlayer,
  removePlayer,
} = require("./utils/players");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("A new player just connected.");

  socket.on("join", ({playerName, room}, callback) => {
    const {error, newPlayer} = addPlayer({id: socket.id, playerName, room})

    if (error) return callback(error.message)
    callback()
    socket.join(newPlayer.room)
    socket.emit("message", formatMessage("Admin", "Welcome"))
  })
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
