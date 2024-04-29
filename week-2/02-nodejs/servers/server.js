const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
