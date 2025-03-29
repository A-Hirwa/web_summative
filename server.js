const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://api.api-ninjas.com/v1/exercises";

app.use(cors());
app.use(express.static(".")); 

app.get("/api/exercises", async (req, res) => {
  const { type, difficulty, offset } = req.query;

  try {
    const response = await fetch(`${API_URL}?type=${type}&difficulty=${difficulty}&offset=${offset || 0}`, {
      headers: {
        "X-Api-Key": process.env.apiKey
      }
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("API error:", error);
      return res.status(response.status).send("API Error");
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});