import { Model } from "sequelize-typescript";
import Def from './Def';
/**
 * Pos Entity
 **/
export default class Pos extends Model<Pos> {
    id: number;
    pos: string;
    abbr: string;
    defs: Def[];
}
//# sourceMappingURL=Pos.d.ts.map