import { IDef } from './Def';

interface IWord {
  id: string;
  name: string;
  defs: IDef[];
  creationDate: Date;
  userId?: string;
}

export default IWord;
