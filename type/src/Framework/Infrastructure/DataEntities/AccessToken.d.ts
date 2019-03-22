import { Model } from "sequelize-typescript";
import User from './User';
/**
 * AccessToken Entity
 **/
export default class AccessToken extends Model<AccessToken> {
    /**
     * hooks in sequelize-typescript does not work currently because of internal bug
     * see more detail: https://github.com/RobinBuschmann/sequelize-typescript/issues/517
     *  - what i want to do is to change camel name to under_score name when define column in postgres
     *  - in order to do this, need to use "hook" as sequelize author recommends but sequelize-typescript's hook cause this bug
     *  - maybe this is minor issue so i skip to change type of name and use camel case in postgres for now
     **/
    accessToken: string;
    userId: string;
    user: User;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    scope: string;
}
//# sourceMappingURL=AccessToken.d.ts.map