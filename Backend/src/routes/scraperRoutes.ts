// src/routes/scraperRoutes.ts
import express from 'express';
import { scrapeAndStore } from '../controllers/scraperController';

const router = express.Router();

/**
 * POST /scraper/scrape
 * Trigger scraping and storing data.
 */
router.post('/scrape', scrapeAndStore);

export { router as scraperRouter };
