import { Model, Column, Table, PrimaryKey, BelongsTo, ForeignKey, Default } from "sequelize-typescript";
import Sequelize from 'sequelize';
import User from './User';

/**
 * AccessToken Entity
 **/
@Table
export default class AccessToken extends Model<AccessToken> {

  /**
   * hooks in sequelize-typescript does not work currently because of internal bug
   * see more detail: https://github.com/RobinBuschmann/sequelize-typescript/issues/517
   *  - what i want to do is to change camel name to under_score name when define column in postgres
   *  - in order to do this, need to use "hook" as sequelize author recommends but sequelize-typescript's hook cause this bug
   *  - maybe this is minor issue so i skip to change type of name and use camel case in postgres for now
   **/
  //@BeforeDefine
  //static changeToUnderScore(target: any, propertyName: string): void {
    //console.log("======================================================================================inside BeforeDefine");
    //console.log(target);
    //console.log(propertyName);
  //}

  @PrimaryKey
  @Column(Sequelize.STRING(40))
  accessToken: string;

  @Default(null)
  @ForeignKey(() => User)
  @Column(Sequelize.UUID)
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @Default(null)
  @Column(Sequelize.STRING)
  refreshToken: string;

  @Default(null)
  @Column(Sequelize.DATE)
  accessTokenExpiresAt: Date;

  @Default(null)
  @Column(Sequelize.STRING)
  scope: string;

}

