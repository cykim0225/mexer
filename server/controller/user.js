const User = require('../../db/models/User');

exports.createUser = (req, res) => {
  req = req.body;
  User.find(req)
    .then((data) => {
      if (data.length === 0) {
        User.create(req)
        .then(() => res.send(200))
        .catch((err) => {
          res.send(err);
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.send(err));
};

exports.getUser = (req, res) => {

};
