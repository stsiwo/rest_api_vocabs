import sequelize from '../src/Framework/Infrastructure/connection'; 
import User from '../src/Framework/Infrastructure/DataEntities/User';
import Pos from '../src/Framework/Infrastructure/DataEntities/Pos';
import Def from '../src/Framework/Infrastructure/DataEntities/Def';
import Word from '../src/Framework/Infrastructure/DataEntities/Word';
import AccessToken from '../src/Framework/Infrastructure/DataEntities/AccessToken';
const testUserJson = require('./storage/Entities/User.json');
const testPosJson = require('./storage/Entities/Pos.json');
const testDefJson = require('./storage/Entities/Def.json');
const testWordJson = require('./storage/Entities/Word.json');

// create tables if does not exists
sequelize.sync({ force: true }).then(() => {
  
  // 1. insert test data
  // seed pos rows
  Pos.bulkCreate( testPosJson )
    .then(() => {
      // seed def rows
      Def.bulkCreate( testDefJson )
    })
    .then(() => {
      // seed word rows
      Word.bulkCreate( testWordJson )
    })
    .then(() => {
      // seed test user rows
      User.bulkCreate( testUserJson )
    })
    
  // 2. make association
  //  pick a user
    .then(() => {
      return User.findOne({ where: { name: "sample_name1" }})
    })
    // assign all word to the user
    .then(( user ) => {

      return Word.findAll().then(( words ) => {
        /**
         * to avoid ts error: Object possibley be null
         *  - use "!" where the variable possiblely null
         **/
        user!.$set('words', words)
        return words;
      })
    })
    // assign defs to each word 
    .then(( words ) => {

      Def.findAll().then(( defs ) => {
        // assign def (id=0,1,2) to word (id=0)
        words[0].$set('defs', [ defs[0], defs[1], defs[2] ])
      
        // assign def (id=3,4,5,6) to word (id=1)
        words[1].$set('defs', [ defs[3], defs[4], defs[5], defs[6]  ])
      
        // assign def (id=7,8,9,10) to word (id=2)
        words[2].$set('defs', [ defs[7], defs[8], defs[9], defs[10]  ])

        // assign def (id=11,12,13,14) to word (id=3)
        words[3].$set('defs', [ defs[11], defs[12], defs[13], defs[14]  ])

        // assign def (id=15,16,17,18,19) to word (id=4)
        words[4].$set('defs', [ defs[15], defs[16], defs[17], defs[18], defs[19] ])
      })
    });
  // clean up AccessToken
  AccessToken.destroy({
    where: {},
    truncate: true
  });

  // sequelize raw query for create Dictionary table and import csv file
  // problem: can't user relative path
  // #REFACTOR if there is a way to do relatively
  sequelize.query('COPY "Dictionary"(word) FROM \'C:\\tmp\\dictionary.csv\' DELIMITER \',\' CSV HEADER');

});


