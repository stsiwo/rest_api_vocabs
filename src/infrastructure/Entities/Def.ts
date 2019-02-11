import sequelize from '../database/connection';
import Sequelize from 'sequelize';

/**
 * Def Entity
 *
 **/
interface DefAttributeType {
  id: string;
  def: string;
  pos: number;
  image: string;
}

type DefInstanceType = Sequelize.Instance<DefAttributeType> & DefAttributeType;

const Def = sequelize.define<DefInstanceType, DefAttributeType>('def', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  def: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pos: {
    type: Sequelize.NUMBER,
    references: {
      model: Pos,
      key: id,
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
    },
    allowNull: false,
    defaultValue: 0;
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  word_id: {
    type: Sequelize.UUIDV4,
    references: {
      model: Word,
      key: id,
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
    },
    allowNull: false,
  }
});
  
// force: true will drop the table if it already exists
//Def.sync({force: true}).then(() => {
  //// Table created
  //return Def.create({
  //});
//});

export default Def;


