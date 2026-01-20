require("dotenv").config();
const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
app.use(cors()); // allow browser requests
app.use(express.json()); // needed for POST requests

// Test route
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

// POST route for form submissions
app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO submissions (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// GET route to see all submissions (optional for portfolio)
app.get("/submissions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM submissions ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
