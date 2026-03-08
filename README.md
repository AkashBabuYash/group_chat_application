# 💬 Real-Time Group Chat Application

A modern **real-time group chat application** built using **React, Node.js, Express, and Socket.io**.
Users can join the chat room, send messages instantly, share images, upload files, and capture photos using their webcam.

---

## 🚀 Features

* ⚡ **Real-Time Messaging** – Instant communication using Socket.io
* 👥 **Online Users List** – View all active users in the chat
* 📷 **Camera Capture** – Take photos directly from your webcam
* 🖼 **Image Sharing** – Send images inside the chat
* 📎 **File Upload** – Share files with other users
* 📱 **Responsive UI** – Works on desktop and mobile devices
* 🟢 **Live User Count** – Displays number of users online
* 💬 **Message Bubbles UI** – Clean chat interface

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* Socket.io Client
* React Icons
* React Webcam
* CSS

### Backend

* Node.js
* Express
* Socket.io

---

## 📂 Project Structure

```
group_chat_application
│
├── frontend
│   ├── src
│   │ |--pages
        ├── Chat.js
│   │   ├── Join.js
│   │   ├── chat.css
│   │   └── Join.css
│   └── package.json
│
├── backend
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/AkashBabuYash/group_chat_application.git
cd group_chat_application
```

---

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

Start the server:

```
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Install Frontend Dependencies

Open another terminal:

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 💡 How It Works

1. User enters a **name on the Join page**.
2. User joins the **group chat room**.
3. Messages are sent through **Socket.io**.
4. Files, images, and webcam captures are converted to **Base64** and shared in the chat.
5. The server broadcasts messages to **all connected users**.

---

## 📸 Screenshots

Add screenshots here for better presentation.

Example:

```
screenshots/join_page.png
screenshots/chat_interface.png
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
```

---

## 👨‍💻 Author

**Akash Babu**

GitHub:
https://github.com/AkashBabuYash

---

## ⭐ Support

If you like this project, consider **starring the repository** on GitHub.
