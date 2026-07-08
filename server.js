const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// serve the built Angular frontend (files live in /public)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint: live cat fact + name  ->  works in Postman at /fact
app.get('/fact', async (req, res) => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  res.json({ name: "Jana", fact: data.fact });
});

// any other route -> send the Angular page
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on port ' + PORT));
