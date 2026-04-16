require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Postman se data lene ke liye

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("✅ MongoDB Connected!");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
    })
    .catch(err => console.log("❌ DB Error:", err));

// Test Route
app.get('/', (req, res) => res.send("Bookstore API is Live!"));

// app.js mein mongoose connection ke niche ye add karein:

const bookRoutes = require('./routes/bookRoutes');

// Middleware
app.use(express.json());

// API Routes
app.use('/books', bookRoutes); 

