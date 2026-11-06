
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply }
      ]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry! Unable to connect. Please try again."
        }
      ]);

      console.error(error);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>✦ RAVAN AI</h2>

        <button
          className="new-chat"
          onClick={() => setMessages([])}
        >
          + New Chat
        </button>

        <div className="history">
          <p>AI Assistant</p>
          <span>Start a new conversation</span>
        </div>

        <div className="profile">
          <div className="avatar">U</div>
          <div>
            <h4>My Account</h4>
            <small>Free Plan</small>
          </div>
        </div>
      </aside>

      <main className="chat-area">
        <header className="topbar">
          <h3>AI Assistant</h3>
          <span>● Online</span>
        </header>

        {messages.length === 0 ? (
          <section className="welcome">
            <div className="ai-icon">✦</div>

            <h1>
              Welcome to <span>RAVAN AI</span>
            </h1>

            <p>
              Your intelligent AI assistant.
              Ask me anything and let's explore together.
            </p>
          </section>
        ) : (
          <section className="messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`message ${item.role}`}
              >
                <strong>
                  {item.role === "user" ? "You" : "RAVAN AI"}
                </strong>

                <p>{item.text}</p>
              </div>
            ))}

            {loading && (
              <div className="message ai">
                <strong>RAVAN AI</strong>
                <p>Thinking...</p>
              </div>
            )}
          </section>
        )}

        <div className="chat-input">
          <input
            type="text"
            placeholder="Message RAVAN AI..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
          >
            ↑
          </button>
        </div>

        <small className="disclaimer">
          RAVAN AI can make mistakes. Verify important information.
        </small>
      </main>
    </div>
  );
}

export default App;
