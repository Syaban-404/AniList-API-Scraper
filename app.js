const express = require('express');
const mangaRoutes = require('./src/routes/mangaRoutes');

const app = express();
// Using dynamic port for deploy needed
const PORT = process.env.PORT || 3000;

// 1. Global Middleware
app.use(express.json()); // allowed server read request JSON format
app.use(express.urlencoded({ extended: true })); // allow URL-encoded body

// 2. Routing Middleware
app.use('/api', mangaRoutes);

// 3. Global Route For Fallback (if endpoint not found)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'API Endpoint not found.'
    });
});

// 4. Running Server
app.listen(PORT, () => {
    console.log(`🚀 Manga API Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export for easier testing