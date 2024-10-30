// backend/server.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const matchingRoutes = require("./routes/matching"); // Import matching routes
require("dotenv").config();
const http = require("http");
const socketIo = require("socket.io");

const app = express(); // Initialize the app before creating the server
const port = process.env.PORT || 3000;
const server = http.createServer(app); // Now you can create the server with app
const io = socketIo(server);

app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Collaborative Learning Platform API");
});

// User routes
app.use("/api/users", userRoutes);
app.use("/api/matching", matchingRoutes); // Use matching routes

// Socket.io logic
io.on("connection", (socket) => {
  socket.on("offer", (data) => {
    socket.to(data.room).emit("offer", data.offer);
  });

  socket.on("answer", (data) => {
    socket.to(data.room).emit("answer", data.answer);
  });

  socket.on("ice-candidate", (data) => {
    socket.to(data.room).emit("ice-candidate", data.candidate);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
