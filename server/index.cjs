"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var httpServer = (0, http_1.createServer)();
// Create a socket.io instance and configure CORS
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
    },
});
io.on("connection", function (socket) {
    console.log("Client connected");
    socket.on("addUser", function (user) {
        console.log("[addUser]: Received user from client", user);
        socket.broadcast.emit("addUser", user);
    });
    socket.on("editUser", function (user) {
        console.log("[editUser]: Received user from client", user);
        socket.broadcast.emit("editUser", user);
    });
    socket.on("deleteUser", function (id_user) {
        console.log("[editUser]: Delete user ", id_user);
        socket.broadcast.emit("deleteUser", id_user);
    });
    socket.on("disconnect", function () {
        console.log("Client disconnected");
    });
    socket.on("error", function (error) {
        console.error("Socket error: ".concat(error.message));
    });
});
var PORT = 3000;
httpServer.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
