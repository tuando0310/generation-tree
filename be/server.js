const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware for JSON parsing (built-in since Express 4.16+)
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/api/persons', async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all persons
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));
// Basic route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
  console.error('Server error:', err.message);
});