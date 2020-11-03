require('../index.js');
const mongoose = require('mongoose');
const faker = require('faker');
const Food = require('../models/Food');

const reviews = [];

for (let i = 1; i <= 10; i += 1) {
  const data = {
    id: i,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: (Math.random() * 50 + 5).toFixed(2),
    imageUrl: `https://ghrsea12-mvp.s3-us-west-2.amazonaws.com/mvpPic/pic${i}.jpg`,
  };
  reviews.push(data);
}

const insertData = () => {
  Food.deleteMany({})
    .then(() => {
      Food.create(reviews)
        .then(() => mongoose.disconnect())
        .catch((err) => console.log(err));
    });
};

insertData();
