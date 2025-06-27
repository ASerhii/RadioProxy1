const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const url = 'http://95.163.208.18:8000/;stream/1';
  request
    .get(url)
    .on('error', (err) => {
      console.error('Stream error:', err);
      res.sendStatus(500);
    })
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
