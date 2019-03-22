import { Model } from "sequelize-typescript";
import User from './User';
import Def from './Def';
/**
 * Word Entity
 **/
export default class Word extends Model<Word> {
    id?: string;
    name: string;
    userId: string;
    user: User;
    defs: Def[];
    creationDate: Date;
    updatedOn: Date;
}
//# sourceMappingURL=Word.d.ts.map