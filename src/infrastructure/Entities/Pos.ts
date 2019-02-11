import sequelize from '../database/connection';
import Sequelize from 'sequelize';

/**
 * Pos Entity
 *
 **/
interface PosAttributeType {
  id: number;
  pos: string;
}

type PosInstanceType = Sequelize.Instance<PosAttributeType> & PosAttributeType;

const Pos = sequelize.define<PosInstanceType, PosAttributeType>('def', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    defaultValue: 0,
    allowNull: false,
    unique: true,
    validate: {
      min: 0,
      max: 9
    }
  },
  pos: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
  
// force: true will drop the table if it already exists
//Pos.sync({force: true}).then(() => {
  //// Table created
  //return Pos.create({
  //});
//});

export default Pos;



