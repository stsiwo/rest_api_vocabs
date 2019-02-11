import { Model, Column, Table, CreatedAt, UpdatedAt, IsUUID, PrimaryKey, AllowNull, Default, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import Sequelize from 'sequelize';
import User from './User';
import Def from './Def';

/**
 * Word Entity
 **/
@Table
export default class Word extends Model<Word> {

  @IsUUID(4)
  @PrimaryKey
  @Default(Sequelize.UUIDV4)
  @Column(Sequelize.STRING)
  id?: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  name: string;

  @ForeignKey(() => User)
  @Column(Sequelize.STRING)
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Def)
  defs: Def[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}

