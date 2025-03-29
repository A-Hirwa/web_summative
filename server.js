require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://api.api-ninjas.com/v1/exercises";

app.use(cors());
app.use(express.json());
app.use(express.static(".")); 
app.get("/api/exercises", async (req, res) => {
  try {
    const { type, difficulty } = req.query;

    if (!type || !difficulty) {
      return res.status(400).json({ error: "Missing type or difficulty" });
    }

    const url = `${API_URL}?type=${type}&difficulty=${difficulty}`;
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("API error:", text);
      return res.status(response.status).send("Error fetching exercises");
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error fetching exercises" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is up" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
