// server.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.WEATHER_API_KEY;

// Enable CORS to allow requests from your frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    try {
    const city = req.query.city;
    console.log('Received request for city:', city);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('API Response:', data);

    if (response.status === 404) {
      // Forward the 404 status to the frontend
      res.status(404).json({ error: 'City not found' });
    } else {
      res.json(data);
    }
} catch (error) {
    console.error('Error handling weather request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});