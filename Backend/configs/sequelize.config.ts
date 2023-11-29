require('dotenv').config(); // If you are using dotenv for environment variables

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Set to true to see SQL logs in the console
  },
  // Add configurations for other environments (production, test) as needed
};
