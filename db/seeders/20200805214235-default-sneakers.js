'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sneakers', [
      {
        brand: "Jordan",
        colorway: "White/White-Lucky Green-Black",
        name: "White Lucky Green",
        retailPrice: 190,
        shoe: "Jordan 13 Retro",
        title: "Jordan 13 Retro White Lucky Green",
        year: 2020,
        imageUrl: "https://stockx.imgix.net/Air-Jordan-13-Retro-White-Lucky-Green.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1593581952",
        smallImageUrl: "https://stockx.imgix.net/Air-Jordan-13-Retro-White-Lucky-Green.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1593581952",
        thumbUrl: "https://stockx.imgix.net/Air-Jordan-13-Retro-White-Lucky-Green.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1593581952"
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sneakers', {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};
