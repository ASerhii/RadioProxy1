const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ibiza', (req, res) => {
  const url = 'http://air.radiorecord.ru:805/ibiza_320';
  request
    .get(url)
    .on('error', (err) => {
      console.error('Stream error:', err);
      res.sendStatus(500);
    })
    .on('response', (response) => {
      res.setHeader('Content-Type', 'audio/mpeg');
    })
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
