"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const themes = [
      {
        title: "ЧТО ? ГДЕ ? КОГДА ?",
        game_id: 1,
      },
      {
        title: "КАВЕРЗНЫЕ ВОПРОСЫ",
        game_id: 1,
      },
      {
        title: "ТЕЛЕВИКТОРИНА",
        game_id: 1,
      },
      {
        title: "ЕДИНСТВЕННЫЕ В МИРЕ ГОСУДАРСТВА",
        game_id: 1,
      },
      {
        title: "ОСТРОУМНЫЕ ВОПРОСЫ",
        game_id: 1,
      },
      {
        title: "УГАДАЙ МЕЛОДИЮ!",
        game_id: 1,
      },
    ];

    const result = themes.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Themes", result);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes");
  },
};
