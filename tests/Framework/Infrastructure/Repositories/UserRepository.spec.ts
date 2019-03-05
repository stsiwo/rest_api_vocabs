import UserRepository from '../../../../src/Framework/Infrastructure/Repositories/UserRepository';

describe('UserRepository', function() {

  const userRepo = new UserRepository();
  const testData = [
    { 
      id: "e9dd8cfd-1422-4af8-997c-9c7ced3973eb",
      name: "new_word66",
      defs: [
        {
          id: "c409618f-0a0b-4c27-bc7e-9e0a63f6c4cb",
          def: "update_def_name1",
          pos: 0,
          image: "image",
        },
        {
          id: "9ba68169-df1e-4788-9819-0bfb2c3a245a",
          def: "update_def_name2",
          pos: 0,
          image: "image",
        }
      ],
      creationDate: new Date("2019-02-24 13:31:32.061-08")
    },
    { 
      id: "3745b9a3-ad43-4658-aa89-1a567b14a908",
      name: "upupdate_word33",
      defs: [
        {
          id: "49ba29fe-d9df-40a5-8b28-ba5f8958bf00",
          def: "update_def_name",
          pos: 0,
          image: "image",
        }
      ],
      creationDate: new Date("2019-02-24 13:31:32.061-08")
    },
  ];
  const testUserName = "sample_name1";

  it('upsert words of user', async function() {
    const isOk = await userRepo.upsertWordsOfUser(testUserName, testData);
    expect(isOk).toEqual(true);
  });

  it('check user name is unique; should return true', async function() {
    const testUserName = "stupid";
    const isUnique = await userRepo.checkUserNameUnique(testUserName);
    expect(isUnique).toEqual(true);
  });

  it('check user name is unique; should return false', async function() {
    const testUserName = "sample_name1";
    const isUnique = await userRepo.checkUserNameUnique(testUserName);
    expect(isUnique).toEqual(false);
  });

  it('check email already exists: should return true', async function() {
    const testEmail = "sample@sample_email1.com";
    const isAlreadyExists = await userRepo.checkEmailAlreadyExist(testEmail);
    expect(isAlreadyExists).toEqual(true);
  });

  it('check email already exists: should return false', async function() {
    const testEmail = "stupid@stupid.com";
    const isAlreadyExists = await userRepo.checkEmailAlreadyExist(testEmail);
    expect(isAlreadyExists).toEqual(false);
  });
});

