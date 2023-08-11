const express = require("express");

const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

// socket server
const server = http.createServer(app);


const FRONTEND_URL = "http://localhost:3000"; 

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});




server.listen(3001, () => {
    console.log("------------------------------------------SERVER IS RUNNING---------------------------------------------------");
  });

