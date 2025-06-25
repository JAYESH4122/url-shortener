const { Sequelize } = require('sequelize');
require('dotenv').config();

// Change to 'let' since you're reassigning it
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres', // Add this for Render
    dialectOptions: {
      ssl: { // Required for Render
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;