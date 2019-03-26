import "../../env";
import { Sequelize } from 'sequelize-typescript';

/**
 * since process.env.xxx return string or undefined (union type)
 * so need type gaurd like "as string" or "<string>"
 **/
const dbName: string = ( process.env.NODE_ENV as string ) = 'production' ? ( process.env.DB_NAME_PROD as string ) : ( process.env.DB_NAME_DEV as string );
const dbUserName: string = process.env.DB_USER as string;
const dbPassword: string = process.env.DB_PASSWORD as string;

const sequelize =  new Sequelize({
  database: dbName, 
  dialect: 'postgres',
  username: dbUserName,
  password: dbPassword, 
  modelPaths: [
    __dirname + '/DataEntities'
  ],
  /**
   * this is to disable following warning:
   * sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operato
rs node_modules\sequelize\lib\sequelize.js:242:13
   **/
  operatorsAliases: false
});

export default sequelize;
