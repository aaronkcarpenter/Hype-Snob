'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'test@gmail.com', password: 'hashed', session_token: '123412', createdAt: new Date(), updatedAt: new Date() },
      { email: 'aaron@gmail.com', password: 'twice', session_token: '9876543', createdAt: new Date(), updatedAt: new Date() },
      { email: 'Sebby@gmail.com', password: 'quatro', session_token: '3692112', createdAt: new Date(), updatedAt: new Date() }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};
