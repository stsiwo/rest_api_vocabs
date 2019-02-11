import sequelize from './infrastructure/database/connection'; 
import { User } from './infrastructure/Entities/User';
import { Word } from './infrastructure/Entities/Word';
import { Def } from './infrastructure/Entities/Def';
import { Pos } from './infrastructure/Entities/Pos';

sequelize.addModels([ User, Word, Def, Pos ]);

sequelize.sync({ force: true }).then(() => {
  const user = new User({ name: "satoshi", email: "sts@gmail.com", password: "password" }); 

  user.save();

});



