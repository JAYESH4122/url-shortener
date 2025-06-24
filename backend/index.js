const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json())

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });