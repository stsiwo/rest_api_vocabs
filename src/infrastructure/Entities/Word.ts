import sequelize from '../database/connection';
import Sequelize from 'sequelize';

/**
 * Word Entity
 *
 **/
interface WordAttributeType {
  id: string;
  name: string;
   
}

type WordInstanceType = Sequelize.Instance<WordAttributeType> & WordAttributeType;

const Word = sequelize.wordine<WordInstanceType, WordAttributeType>('word', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    wordaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
  
// force: true will drop the table if it already exists
//Word.sync({force: true}).then(() => {
  //// Table created
  //return Word.create({
  //});
//});

export wordault Word;



