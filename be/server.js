const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person-routes');
const authRoutes = require('./routes/auth');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware for JSON parsing (built-in since Express 4.16+)
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  console.log('Request body 📥:', req.body);
  next();
});
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected 🗄️'))
  .catch(err => console.error('MongoDB connection error 😵:', err));

// Mount routes
app.use('/api/persons', personRoutes);
app.use('/api/auth', authRoutes);
// Basic route for testing
app.get('/', (req, res) => {
  res.send('Generation Tree API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port} 🎉`);
  console.log(`Visit the server at http://localhost:${port} 🚀`);
}).on('error', (err) => {
  console.error('Server error:', err.message);
});