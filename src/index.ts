import sequelize from './infrastructure/connection'; 
import Test from './infrastructure/Entities/Test';

sequelize.sync({ force: true }).then(() => {

  const test1 = new Test({ id: 1, test: "test" });
  test1.save();

});



