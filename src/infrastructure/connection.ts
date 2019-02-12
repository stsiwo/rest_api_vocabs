import "../env";
import { Sequelize } from 'sequelize-typescript';

/**
 * since process.env.xxx return string or undefined (union type)
 * so need type gaurd like "as string" or "<string>"
 **/
const dbName: string = process.env.DB_NAME_DEV as string;
const dbUserName: string = process.env.DB_USER as string;
const dbPassword: string = process.env.DB_PASSWORD as string;

const sequelize =  new Sequelize({
  database: dbName, 
  dialect: 'postgres',
  username: dbUserName,
  password: dbPassword, 
  modelPaths: [
    __dirname + '/Entities'
  ]
});

export default sequelize;
