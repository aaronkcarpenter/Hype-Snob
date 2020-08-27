'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { email: 'test@gmail.com', password: 'hashed', session_token: '123412', createdAt: new Date(), updatedAt: new Date() },
      { email: 'aaron@gmail.com', password: 'twice', session_token: '9876543', createdAt: new Date(), updatedAt: new Date() },
      { email: 'Sebby@gmail.com', password: 'quatro', session_token: '3692112', createdAt: new Date(), updatedAt: new Date() }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', {
      id: { [Sequelize.Op.gt]: 0 }
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
