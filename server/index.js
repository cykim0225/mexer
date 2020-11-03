const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello from GET');
})

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})