// POCO object
export default class Def {

  public id: string;

  public pos: number;

  public image: string; 

  public wordId: string;

  public createdAt: Date;

  public updatedAt: Date;

}

export interface IDef {
  id: string;
  pos: number;
  image: string | null;
  wordId: string;
  createdAt: Date;
  updatedAt: Date;
}


