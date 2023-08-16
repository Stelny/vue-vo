import { createServer } from "http";
import { Server, Socket } from "socket.io";

import type { TUser } from "./../src/types/User";


const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
    credentials: true
  },
});

io.on("connection", (socket: Socket) => {
  console.log("Client connected");

  socket.on("addUser", (user: TUser) => {
    console.log(`[addUser]: Received user from client`, user)
    socket.broadcast.emit("addUser", user);
  })

  socket.on("editUser", (user: TUser) => {
    console.log(`[editUser]: Received user from client`,user)
    socket.broadcast.emit("editUser", user);
  })

  socket.on("deleteUser", (id_user: string) => {
    console.log(`[editUser]: Delete user `,id_user)
    socket.broadcast.emit("deleteUser", id_user);
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error: Error) => {
    console.error(`Socket error: ${error.message}`);
  });
});

const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});