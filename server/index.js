const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const foodController = require('./controller/food');
const userController = require('./controller/user');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/foods', foodController.getAll);
app.get('/api/user', (req, res) => {

});
app.post('/api/user', userController.createUser);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})