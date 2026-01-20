const express = require('express');
const cors = require('cors');
const path = require('path'); // Added this
const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage (resets when Render sleeps)
let submissions = [];

// API Endpoints
app.get('/submissions', (req, res) => {
    res.json(submissions);
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    if (name && message) {
        submissions.push({ name, email, message, id: Date.now() });
        return res.status(201).json({ status: "success" });
    }
    res.status(400).json({ status: "error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
