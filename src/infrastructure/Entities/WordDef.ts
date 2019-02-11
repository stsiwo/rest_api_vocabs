import sequelize from '../database/connection';
import Sequelize from 'sequelize';

/**
 * WordDef Entity
 *
 **/
interface WordDefAttributeType {
  id: string;
  name: string;
   
}

type WordDefInstanceType = Sequelize.Instance<WordDefAttributeType> & WordDefAttributeType;

const WordDef = sequelize.worddefine<WordDefInstanceType, WordDefAttributeType>('word_def', {
  word_id: {
    type: Sequelize.UUIDV4,
    references: {
      model: Word,
      key: id,
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
    },
  },
  def_id: {
    type: Sequelize.UUIDV4,
    references: {
      model: Def,
      key: id,
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
    },
  }
});
  
// force: true will drop the table if it already exists
//WordDef.sync({force: true}).then(() => {
  //// Table created
  //return WordDef.create({
  //});
//});

export worddefault WordDef;




