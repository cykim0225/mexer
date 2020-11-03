const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Food = require('../db/models/Food');
const User = require('../db/models/User');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/foods', (req, res) => {
  Food.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.post('/api/user', (req, res) => {
  req = req.body;
  User.create(req)
    .then(() => res.send(201))
    .catch((err) => {
      console.log(err);
      res.send(401);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})