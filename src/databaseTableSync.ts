import sequelize from './infrastructure/connection'; 
import User from './infrastructure/Entities/User';
const testUserJson = require('../tests/storage/Entities/User.json');

sequelize.sync({ force: true }).then(() => {
  
  console.log("hey");
  User.bulkCreate( testUserJson );

});

