const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware for JSON parsing (built-in since Express 4.16+)
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});