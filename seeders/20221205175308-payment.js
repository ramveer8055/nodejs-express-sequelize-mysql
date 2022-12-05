'use strict';
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var newData = [];

    for (let i = 0; i < 100; i++) {
      const seedData = {
        uuid: faker.datatype.uuid(),
        status: faker.random.arrayElement(["paid", "unpaid", "failed"]),
        mid: faker.random.arrayElement([1, 2, 3, 4]),
        createdAt: faker.date.between('2020-01-01', '2020-12-31'),
        updatedAt: new Date()
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert('payments', newData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payments', null, {});
  }
};
