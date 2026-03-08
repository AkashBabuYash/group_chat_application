const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let users = [];

io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("join", (name) => {

    const user = { id: socket.id, name };
    users.push(user);

    io.emit("users", users);

    socket.emit("message", {
      user: "Admin",
      text: `${name} joined chat`
    });
  });

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("fileMessage", (data) => {
    io.emit("fileMessage", data);
  });

  socket.on("disconnect", () => {

    const user = users.find(u => u.id === socket.id);

    if (user) {

      users = users.filter(u => u.id !== socket.id);

      io.emit("users", users);

      io.emit("message", {
        user: "Admin",
        text: `${user.name} left chat`
      });
    }

  });

});

server.listen(5000, () => {
  console.log("Server running on 5000");
});