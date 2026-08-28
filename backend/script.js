const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Backend server is running!"
    });
});

app.get("/api/admins", (req, res) => {
    db.query("SELECT * FROM admins", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Database error"
            });
        }

        res.json(results);
    });
})

app.get("/api/projects", (req, res) => {
    db.query("SELECT * FROM projects", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Database error"
            });
        }

        res.json(results);
    });
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});