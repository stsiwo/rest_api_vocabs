import { Model, Column, Table, PrimaryKey, AllowNull, AutoIncrement } from "sequelize-typescript";
import Sequelize from 'sequelize';

/**
 * Dictionary Entity
 **/
@Table
export default class Dictionary extends Model<Dictionary> {

  @PrimaryKey
  @AutoIncrement
  @Column(Sequelize.INTEGER)
  id?: number;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  word: string;

}



