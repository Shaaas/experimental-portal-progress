require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
// Server setup coming soon

