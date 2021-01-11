const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/mexer';

const db = mongoose.connect(mongoURI , { useNewUrlParser: true, useUnifiedTopology: true });

db
  .then(db => console.log('Connected to mongoose'))
  .catch((err) => console.log(err));

module.exports = db;
