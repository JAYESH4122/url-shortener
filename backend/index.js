require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Url = require('./models/urls');
const urlRoutes = require('./routes/urlRoutes');

const app = express();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, 'https://url-shortener-rho-olive.vercel.app/'] 
    : 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  const maxRetries = 5;
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
      
      await Url.sync({ alter: process.env.NODE_ENV !== 'production' });
      
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`CORS allowed origin: ${corsOptions.origin}`);
      });
      
      break;
    } catch (err) {
      retries++;
      console.error(`Connection attempt ${retries} failed:`, err.message);
      
      if (retries === maxRetries) {
        console.error('Maximum retries reached. Exiting...');
        process.exit(1);
      }
      
      
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

startServer();

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});