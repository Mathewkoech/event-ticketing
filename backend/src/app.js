const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const frontendURL = process.env.FRONTEND_URL;

// CORS configuration
const corsOptions = {
  origin: frontendURL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Routes for tickets
const ticketRoutes = require('./routes/tickets');
app.use('/api/tickets', ticketRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
