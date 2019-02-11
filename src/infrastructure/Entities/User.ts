import sequelize from '../database/connection';
import Sequelize from 'sequelize';
// bcrypt does not work properly so i skip bcrypt password for now
//import generateHash from '../services/generateHash';

/**
 * User Entity
 *
 **/
interface UserAttributeType {
  id: string;
  name: string;
  email: string;
  password: string;
}

type UserInstanceType = Sequelize.Instance<UserAttributeType> & UserAttributeType;

const User = sequelize.define<UserInstanceType, UserAttributeType>('user', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set( password: string ) {
      /**
       * since typescript refers "this" to wrong object (pointing UserAttributeType, but actually UserInstanceType)
       * i assign this as any to remove compile error
       * 
       * error TS2339: Property 'setDataValue' does not exist on type 'String | DataTypeAbstract | DefineAttributeColumnOptions'.
       * Property 'setDataValue' does not exist on type 'String'.
       **/
      // bcrypt does not work properly so i skip bcrypt password for now
      //(this as any).setDataValue('password', generateHash( password ) );
      (this as any).setDataValue('password', password );
    }
  },
});
  
export default User;

