"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const games = [
      {
        title: "Игра 1",
      },
    ];

    const result = games.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Games", result);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games");
  },
};
