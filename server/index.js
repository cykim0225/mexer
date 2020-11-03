const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Food = require('../db/models/Food');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello from GET /')
})
app.get('/api/foods', (req, res) => {
  Food.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})