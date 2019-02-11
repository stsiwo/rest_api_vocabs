import Sequelize from 'sequelize';

const sequelize = new Sequelize('vocabs', 'postgres', 'sts1551iwo', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(( err: string ) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
