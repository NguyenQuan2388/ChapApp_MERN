import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET","POST"]
    }
});

const userSocketMap = {};  //{userId: socketId}

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }

    io.emit("user-socket-map", userSocketMap);

    //socket.on() is used to listen to the events, both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});

export {app, server}