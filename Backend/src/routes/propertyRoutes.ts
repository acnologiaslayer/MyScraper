// routes/propertyRoutes.ts

import express from 'express';
import { getPropertyById } from '../controllers/propertyController';

const router = express.Router();

// GET a single property by ID
router.get('/:propertyId', getPropertyById);

export default router;
