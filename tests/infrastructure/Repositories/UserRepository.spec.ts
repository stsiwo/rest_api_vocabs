import UserRepository from '../../../src/infrastructure/Repositories/UserRepository';
import '../initialSetup';

describe('UserRepository', function() {

  const userRepo = new UserRepository();

  const testUserSize = 10;

  it('get all Users', async function() {
    const users = await userRepo.getAll();
    expect(users.length).toEqual(testUserSize);
  });
});

