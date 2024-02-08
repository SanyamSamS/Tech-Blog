const sequelize = require('../config/connection');  

const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log(`\n----users seeded----\n`);

  await seedPosts();
  console.log(`\n----posts seeded----\n`);

  await seedComments();
  console.log(`\n----comments seeded----\n`);

  process.exit(0);
};

seedDatabase();
