'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: '1',
        email: 'qwe@mail.ru',
        password: await bcrypt.hash('1213dfd', 10),
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2',
        email: 'qwed@mail.ru',
        password: await bcrypt.hash('sdsvdd6565', 10),
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3',
        email: 'qwecc@mail.ru',
        password: await bcrypt.hash('df323232', 10),
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4',
        email: 'qweh@mail.ru',
        password: await bcrypt.hash('dfd232', 10),
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users');
  },
};
