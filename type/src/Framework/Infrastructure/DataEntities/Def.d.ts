import { Model } from "sequelize-typescript";
import Word from './Word';
import Pos from './Pos';
/**
 * Def Entity
 **/
export default class Def extends Model<Def> {
    id?: string;
    def: string;
    image: string;
    posId: number;
    pos: Pos;
    wordId: string;
    word: Word;
    creationDate: Date;
    updatedOn: Date;
}
//# sourceMappingURL=Def.d.ts.map