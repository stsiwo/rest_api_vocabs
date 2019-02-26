import Def from './Def';

interface IWord {
  id: string;
  name: string;
  defs: Def[];
  creationDate: Date;
}

export default IWord;
