const { User } = require('../models');

const userData = [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    },
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "password": "password456"
    },
    {
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "password": "password789"
    },
    {
      "name": "Bob Brown",
      "email": "bob@example.com",
      "password": "password321"
    },
    {
      "name": "Emily Davis",
      "email": "emily@example.com",
      "password": "password654"
    }
  ]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;