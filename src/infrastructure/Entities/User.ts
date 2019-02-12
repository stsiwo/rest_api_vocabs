import { Model, Column, Table, CreatedAt, UpdatedAt, IsUUID, PrimaryKey, AllowNull, IsEmail, Unique, Default, HasMany } from "sequelize-typescript";
import Sequelize from 'sequelize';
import Word from './Word';

/**
 * User Entity
 **/
@Table
export default class User extends Model<User> {

  @IsUUID(4)
  @PrimaryKey
  @Default(Sequelize.UUIDV4)
  @Column(Sequelize.UUID)
  id?: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  name: string;

  @IsEmail
  @Unique
  @AllowNull(false)
  @Column(Sequelize.STRING)
  email: string;

  @AllowNull(false)
  @Column(Sequelize.STRING)
  password: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @HasMany(() => Word)
  words: Word[];
  /**
   * since typescript refers "this" to wrong object (pointing UserAttributeType, but actually UserInstanceType)
   * i assign this as any to remove compile error
   * 
   * error TS2339: Property 'setDataValue' does not exist on type 'String | DataTypeAbstract | DefineAttributeColumnOptions'.
   * Property 'setDataValue' does not exist on type 'String'.
   **/
  // bcrypt does not work properly so i skip bcrypt password for now
}
