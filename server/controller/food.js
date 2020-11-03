const Food = require('../../db/models/Food');

exports.getAll = (req, res) => {
  Food.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.send(400);
    })
};
