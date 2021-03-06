import { Model, Column, Table, PrimaryKey, AllowNull, HasMany, Unique, Length } from "sequelize-typescript";
import Sequelize from 'sequelize';
import Def from './Def';

/**
 * Pos Entity
 **/
@Table
export default class Pos extends Model<Pos> {

  @Unique
  @PrimaryKey
  @Length({ min: 0, max: 9 })
  @Column(Sequelize.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  pos: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  abbr: string;

  @HasMany(() => Def)
  defs: Def[];

}

