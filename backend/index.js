const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Url = require('./models/urls');
const urlRoutes = require('./routes/urlRoutes')

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json())

app.use('/api', urlRoutes)

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    Url.sync();
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });