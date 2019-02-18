const Sequelize = require('sequelize');
import { Sequelize, Instance } from 'sequelize';

const sequelize: Sequelize = new Sequelize('vocabs_auth', 'postgres', 'sts1551iwo', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export interface IUser {
  id?: string;
  name: string;
  password: string;
}

export interface IUserInstance extends Instance<IUser>, IUser{};

export const User = sequelize.define<IUserInstance, IUser>('user', {

  // id
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },

  // name
  name: {
    type: Sequelize.STRING,
  },

  // password
  password: {
    type: Sequelize.STRING,
  },

});

export interface IOauthAccessTokens {
  access_tokens: string;
  user_id: string;
  refresh_tokens: string;
  expires: string;
  scope: string;
}

export interface IOauthAccessTokensInstance extends Instance<IOauthAccessTokens>, IOauthAccessTokens{};

export const OauthAccessTokens = sequelize.define<IOauthAccessTokensInstance, IOauthAccessTokens>('oauth_access_tokens_test', {

  // access_tokens
  access_tokens: {
    type: Sequelize.STRING(40),
    allowNull: false,
    primaryKey: true,
  },

  // user_id
  user_id: {
    type: Sequelize.UUID,
    defaultValue: null,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },

  // refresh_tokens
  refresh_tokens: {
    type: Sequelize.STRING,
    defaultValue: null
  },

  // expires
  expires: {
    type: Sequelize.DATE,
    defaultValue: null
  },

  // scope
  scope: {
    type: Sequelize.STRING(4000),
    defaultValue: null
  }
});

//User.create({ name: "satoshi", password: "pw" });

sequelize.sync({ force: true })


export default sequelize;

