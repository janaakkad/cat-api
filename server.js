const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/fact', async (req, res) => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  res.json({ name: "Jana", fact: data.fact });
});

app.listen(3000, () => console.log('API running at http://localhost:3000'));