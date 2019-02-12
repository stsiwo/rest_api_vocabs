'use strict';
const testUserJson = require('../tests/storage/Entities/User.json'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('User', testUserJson, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User', null, {});
  }
};
