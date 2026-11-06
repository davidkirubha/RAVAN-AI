
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

let ai;

app.get("/", (req, res) => {
    res.send("RAVAN AI Backend is Running!");
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({
                error: "Gemini API key is missing"
            });
        }

        if (!ai) {
            const { GoogleGenAI } = await import("@google/genai");

            ai = new GoogleGenAI({
                apiKey: process.env.GEMINI_API_KEY
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message
        });

        res.json({
            reply: response.text
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            error: "Unable to get AI response. Please try again."
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`RAVAN AI Server running on port ${PORT}`);
});
