import { Model, Column, Table, PrimaryKey } from "sequelize-typescript";
import Sequelize from 'sequelize';


/**
 * Image Entity
 **/
@Table
export default class Image extends Model<Image> {

  @PrimaryKey
  @Column(Sequelize.INTEGER)
  id?: number;

  @Column(Sequelize.STRING)
  name: string;

  @Column(Sequelize.STRING)
  path: string;
}


