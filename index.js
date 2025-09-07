const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Home page (username + room selection)
app.get("/", (req, res) => {
    res.render("index");
});

// Chat page
app.get("/chat", (req, res) => {
    const { username, room } = req.query;
    if (!username || !room) {
        return res.redirect("/");
    }
    res.render("chat", { username, room });
});

// Socket.io logic
io.on("connection", (socket) => {
    console.log("🔌 A new user connected");

    socket.on("joinRoom", ({ username, room }) => {
        socket.join(room);
        socket.to(room).emit("message", { user: "System", text: `${username} joined the room.` });
    });

    socket.on("chatMessage", ({ username, room, message }) => {
        io.to(room).emit("message", { user: username, text: message, time: new Date().toLocaleTimeString() });
    });

    socket.on("disconnect", () => {
        console.log("❌ A user disconnected");
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
