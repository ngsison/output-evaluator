const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/translate', (req, res) => {
  res.send('Some text translated from OCR');
});

app.get('/check', (req, res) => {
  const body = {
    aiGenerated: true
  }
  res.send(body);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});