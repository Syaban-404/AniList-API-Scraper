const express = require('express');
const router = express.Router();
const { searchManga } = require('../controllers/mangaControllers');

// Direct route to mangaController
router.get('/search-manga', searchManga);

module.exports = router;
