import express from 'express';
const router = express.Router();
import { getAnime, getManga } from '../controllers/apiControllers.js';

router.get('/anime', getAnime); // Anime Route
router.get('/manga', getManga); // Manga Route

export default router;
