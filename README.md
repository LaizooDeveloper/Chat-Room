# 💬 Chat Room

A modern real-time chat web application built with **Node.js (Express)**, **EJS**, **Socket.io**, and **Bootstrap 5**.  
It allows multiple users to join chat rooms, send messages, and experience a clean, stylish interface with Dark/Light mode support.

---

## ✨ Features
- 🔗 Real-time communication using **Socket.io**.
- 🗨️ Chat rooms with multiple users.
- 🎨 Modern chat bubble design (WhatsApp/Messenger style).
- ✅ User messages aligned right (green), other messages aligned left (gray).
- ⚙️ System messages appear in the center with a neutral color.
- 🌙 Dark & Light mode toggle (saved in `localStorage`).
- 🔔 Notification sound for new messages.
- ⏰ Timestamp for each message.
- 📱 Responsive design with **Bootstrap 5**.

---

## 🛠️ Tech Stack
- **Backend:** Node.js + Express
- **Frontend:** EJS + Bootstrap 5 + Custom CSS
- **Real-time:** Socket.io
- **Storage:** In-memory (can be extended to DB later)

---

## 📂 Project Structure
chat-app/
│── public/
│ ├── css/
│ │ └── style.css
│ ├── sounds/
│ │ └── notify.mp3
│── views/
│ ├── index.ejs
│ └── chat.ejs
│── index.js
│── package.json
│── README.md


---


### 1️⃣ Clone the repository
```bash

git clone https://github.com/LaizooDeveloper/Chat-Room.git
cd chat-app

2️⃣ Install dependencies
npm i express ejs socket.io http

3️⃣ Run the app

Copy code
node node.js
4️⃣ Open in browser

```