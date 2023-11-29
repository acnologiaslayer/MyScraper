// src/routes/searchRoutes.ts
import express from 'express';
import { searchData } from '../controllers/searchController';

const router = express.Router();

/**
 * POST /search
 * Search for properties based on a search term.
 */
router.post('/search', searchData);

export { router as searchRouter };
