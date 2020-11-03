const faker = require('faker');

const dummyData = [
  {
    id: 1,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: faker.commerce.price(),
    imageUrl: 'https://loremflickr.com/320/240/food',
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: faker.commerce.price(),
    imageUrl: 'https://loremflickr.com/320/240/food',
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: faker.commerce.price(),
    imageUrl: 'https://loremflickr.com/320/240/food',
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: faker.commerce.price(),
    imageUrl: 'https://loremflickr.com/320/240/food',
  },
  {
    id: 5,
    name: faker.commerce.productName(),
    address: faker.address.streetAddress(),
    price: faker.commerce.price(),
    imageUrl: 'https://loremflickr.com/320/240/food',
  },
];

export default dummyData;