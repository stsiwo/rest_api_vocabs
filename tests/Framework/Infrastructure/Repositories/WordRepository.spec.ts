import WordRepository from '../../../../src/Framework/Infrastructure/Repositories/WordRepository';
import Word from '../../../../src/Framework/Infrastructure/DataEntities/Word';
// initialize database
import '../../../../src/Framework/Infrastructure/connection';

describe('WordRepository', function() {

  const wordRepo = new WordRepository();
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

  //it('get all Words', async function() {
    //await Word.find({ where: {
      //name: "sample_word1",
    //}})
      //.then(( word ) => word.destroy());

    ////const word = await Word.upsert(testData[0], {
      ////include: [{ model: Def }] 
    ////}).then(() => console.log("done"));
  //})

  it('get all Words', async function() {
    const words = await wordRepo.bulkUpsert(testData);
    expect(words).toEqual(true);
  });
});


