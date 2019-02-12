import UserRepository from '../../../src/infrastructure/Repositories/UserRepository';
import sequelize from '../../../src/infrastructure/connection';

describe('UserRepository', function() {

  const userRepo = new UserRepository();

  it('get all Users', async function() {

    await sequelize.sync({ force: true });

    const users = await userRepo.getAll();
    console.log(users);

     
  });
});

