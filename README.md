# RAVAN AI – AI Chatbot

RAVAN AI is a full-stack AI chatbot application built using React, Node.js, Express.js, and Google's Gemini AI API. It allows users to interact with an AI assistant and receive intelligent responses in real time.

## 🚀 Live Demo

[Try RAVAN AI](https://ravan-ai-iota.vercel.app)

## ✨ Features

- AI-powered real-time chat
- Google Gemini AI integration
- Responsive chat interface
- React-based frontend
- Node.js and Express backend
- REST API communication
- Input validation and error handling

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- CSS

**Backend**
- Node.js
- Express.js
- REST API

**AI Integration**
- Google Gemini API

**Deployment**
- Vercel – Frontend
- Render – Backend

## 📂 Project Structure

```text
RAVAN-AI/
├── client/
│   ├── src/
│   └── package.json
├── server/
│   ├── server.js
│   └── package.json
└── .gitignore
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/davidkirubha/RAVAN-AI.git
```

### 2. Setup Frontend

```bash
cd RAVAN-AI/client
npm install
npm run dev
```

### 3. Setup Backend

Open another terminal:

```bash
cd RAVAN-AI/server
npm install
```

Create a `.env` file inside the server folder:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the backend:

```bash
node server.js
```

## 🔐 Environment Variables

The Gemini API key is stored securely as an environment variable and is not exposed in the frontend.

## 👨‍💻 Developer

**David Kirubha**

GitHub: [davidkirubha](https://github.com/davidkirubha)

---

Built with ❤️ using React and Gemini AI.
