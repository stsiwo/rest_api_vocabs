import sequelize from './Framework/Infrastructure/connection'; 
import User from './Framework/Infrastructure/DataEntities/User';
const testUserJson = require('../tests/storage/Entities/User.json');

sequelize.sync({ force: true }).then(() => {
  
  // create initial test data
  User.bulkCreate( testUserJson );

});

