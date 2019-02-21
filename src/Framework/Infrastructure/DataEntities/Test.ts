import { Model, Column, Table, PrimaryKey } from "sequelize-typescript";
import Sequelize from 'sequelize';

/**
 * Test Entity
 **/
@Table
export default class Test extends Model<Test> {

  @PrimaryKey
  @Column(Sequelize.INTEGER)
  id: number;

  @Column(Sequelize.STRING)
  test: string;

}


