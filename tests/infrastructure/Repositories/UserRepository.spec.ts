import UserRepository from '../../../src/infrastructure/Repositories/UserRepository';
import sequelize from '../../../src/infrastructure/database/connection';

describe('UserRepository', function() {

  
  const userRepo = new UserRepository();

  it('get all Users', async function() {

    const users = await userRepo.getAll();

    console.log(users);
     
  });
});

