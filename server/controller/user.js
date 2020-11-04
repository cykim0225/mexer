const User = require('../../db/models/User');

exports.createUser = (req, res) => {
  req = req.body;
  User.find({ username: req.username })
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
  const id = req.query._id;
  User.findById(id)
    .then((data) => {
      res.send([data]);
    })
    .catch((err) => res.send(err));
};

exports.update = (req, res) => {
  const id = req.body.params._id;
  const list = req.body.params.list;

  User.findByIdAndUpdate(id, { cartList: list })
    .then(() => res.send(200))
    .catch((err) => res.send(err));
}