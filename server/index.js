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

// listening events from Home for connenction event that starts on webpage openeing
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//   });
// 
// 
//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

  socket.on("send_data",(data)=> {console.log(data);
    dataTemp = data;
   
  socket.broadcast.emit("recieve_message_from_server",dataTemp);
  
  })

});





server.listen(3001, () => {
    console.log("------------------------------------------SERVER IS RUNNING---------------------------------------------------");
  });

