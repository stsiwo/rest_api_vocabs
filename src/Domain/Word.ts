import Def from './Def';
// POCO object
export default class Word {

  public id: string;

  public name: string;

  public defs: Def[];

  public createdAt: Date;

  public updatedAt: Date;

}

export interface IWord {
  id: string;
  name: string;
  defs: Def[];
  createdAt: Date;
  updatedAt: Date;
}

