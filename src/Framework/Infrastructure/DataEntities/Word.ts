import { Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey, AllowNull, HasMany, BelongsTo, ForeignKey, IsUUID, Default } from "sequelize-typescript";
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
  @Column(Sequelize.UUID)
  id?: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  name: string;

  @ForeignKey(() => User)
  @Column(Sequelize.UUID)
  userId: string;

  // when a user is deleted, its associate words are also deleted
  @BelongsTo(() => User, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  user: User;

  @HasMany(() => Def)
  defs: Def[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}

