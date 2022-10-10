const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const server = app.listen(
  process.env.PORT,
  console.log(`LISTENING TO PORT ${process.env.PORT}`)
);
const io = require("socket.io")(server, {
  pingTimeout: 10000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("create-room", (room_id) => {
    socket.join(room_id);
    console.log("Joined socket with id : ", room_id);
    // socket.broadcast.emit("connected",room_id);
  });

  socket.on("send-msg", (room_id, msg) => {
    socket.to(room_id).emit("new-msg", msg);
  });
});
