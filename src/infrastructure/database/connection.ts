import { Sequelize } from 'sequelize-typescript';

const sequelize =  new Sequelize({
  database: 'vocabs',
  dialect: 'postgres',
  username: 'postgres',
  password: 'sts1551iwo',
  modelPaths: [__dirname + '/infrastructure/Entities']
});

export default sequelize;
