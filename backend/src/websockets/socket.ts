import { Server } from "socket.io";
import http from "http";

let io: Server;

export const initializeSockets = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("trade-update", (data) => {
      console.log("Trade Update Received:", data);
      io.emit("trade-update", data);
    });

    socket.on("event-update", (data) => {
      console.log("Event Update Received:", data);
      io.emit("event-update", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
};


export { io };
