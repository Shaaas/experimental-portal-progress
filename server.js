require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
const cors = require("cors");
app.use(cors()); // <--- allow browser requests


app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
// Server setup coming soon
app.use(express.json()); // already needed for POST

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

