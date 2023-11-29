// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize-typescript';
import { initPropertyModel } from './models/PropertyModel';
import { scraperRouter } from './routes/scraperRoutes';
import { searchRouter } from './routes/searchRoutes';
import propertyRoutes from './routes/propertyRoutes';

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware for JSON parsing
app.use(bodyParser.json());

// Create a new Sequelize instance
const sequelize = new Sequelize(require('./../configs/sequelize.config')[process.env.NODE_ENV || 'development']);

// Add your models to Sequelize
initPropertyModel(sequelize);

// Sync the database (create tables)
sequelize.sync();

// Set up routes
app.use('/scraper', scraperRouter);
app.use('/search', searchRouter);
app.use('/properties', propertyRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
