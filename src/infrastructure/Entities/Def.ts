import { Model, Column, Table, CreatedAt, UpdatedAt, IsUUID, PrimaryKey, AllowNull, Default, BelongsTo, ForeignKey } from "sequelize-typescript";
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
  @Column(Sequelize.STRING)
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
  @Column(Sequelize.STRING)
  wordId: string;

  @BelongsTo(() => Word)
  word: Word;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}


