import { Model } from "sequelize-typescript";
import Word from './Word';
/**
 * User Entity
 **/
export default class User extends Model<User> {
    id?: string;
    name: string;
    email: string;
    password: string;
    creationDate: Date;
    updatedOn: Date;
    words: Word[];
    accessToken: string;
}
//# sourceMappingURL=User.d.ts.map