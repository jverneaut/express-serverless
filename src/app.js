const express = require('express');
const faker = require('faker');

const app = express();

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, Serverless!',
    routes: [{ name: 'users', url: '/users' }],
  });
});

app.get('/users', (req, res) => {
  const users = new Array(50).fill(0).map(() => ({
    name: faker.name.findName(),
    mail: faker.internet.email(),
    avatar: faker.internet.avatar(),
  }));

  res.json(users);
});

module.exports = app;
