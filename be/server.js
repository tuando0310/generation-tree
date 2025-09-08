const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person-routes');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware for JSON parsing (built-in since Express 4.16+)
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

// Mount routes
app.use('/api/persons', personRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Generation Tree API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
  console.error('Server error:', err.message);
});