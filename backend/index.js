require('dotenv').config(); // Load env vars early
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Url = require('./models/urls');
const urlRoutes = require('./routes/urlRoutes');

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, 'https://your-frontend.up.railway.app'] // Add both for safety
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

// Database connection with retry logic
const startServer = async () => {
  const maxRetries = 5;
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
      
      // Sync models - alter tables in dev, don't force in production
      await Url.sync({ alter: process.env.NODE_ENV !== 'production' });
      
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`CORS allowed origin: ${corsOptions.origin}`);
      });
      
      break; // Exit loop if successful
    } catch (err) {
      retries++;
      console.error(`Connection attempt ${retries} failed:`, err.message);
      
      if (retries === maxRetries) {
        console.error('Maximum retries reached. Exiting...');
        process.exit(1);
      }
      
      // Wait 5 seconds before retrying
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

startServer();

// Enhanced error handling
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});