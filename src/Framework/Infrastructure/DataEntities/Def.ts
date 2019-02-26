import { Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey, AllowNull, BelongsTo, ForeignKey, IsUUID, Default } from "sequelize-typescript";
import Sequelize from 'sequelize';
import Word from './Word';
import Pos from './Pos';

/**
 * Def Entity
 **/
@Table
export default class Def extends Model<Def> {

  @IsUUID(4)
  @PrimaryKey
  @Default(Sequelize.UUIDV4)
  @Column(Sequelize.UUID)
  id?: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  def: string;

  @Column(Sequelize.BLOB)
  image: string;

  @ForeignKey(() => Pos)
  @Column(Sequelize.INTEGER)
  posId: number;

  @BelongsTo(() => Pos)
  pos: Pos;

  @ForeignKey(() => Word)
  @Column(Sequelize.UUID)
  wordId: string;

  // when a word is deleted, its associated defs are also deleted
  @BelongsTo(() => Word, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  word: Word;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}


