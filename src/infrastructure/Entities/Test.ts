import sequelize from '../database/connection';
import Sequelize from 'sequelize';

/**
 * User Entity
 *
 **/
interface UserAttributeType {
  id?: string;
  name: string
}

type UserInstanceType = Sequelize.Instance<UserAttributeType> & UserAttributeType;

const User = sequelize.define<UserInstanceType, UserAttributeType>('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING
  }
});
  
/**
 * Picture Entity
 *
 **/
interface PictureAttributeType {
  id?: string;
  content: string;
}

type PictureInstanceType = Sequelize.Instance<PictureAttributeType> & PictureAttributeType;

const Picture = sequelize.define<PictureInstanceType, PictureAttributeType>('picture', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING
  }
});

const user1 = Picture.belongsTo(User);
// force: true will drop the table if it already exists
Picture.sync({force: true}).then(() => {
  // Table created
  return Picture.create({ 
    content: "test pic",  
    user: {
      name: "kaoru",
    },
  }, {
    include: [ user1 ],
  });
});

export default Picture;



