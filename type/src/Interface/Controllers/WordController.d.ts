import { interfaces } from "inversify-express-utils";
import IWordService from '../../UseCase/IServices/IWordService';
export default class WordController implements interfaces.Controller {
    private _wordService;
    constructor(wordService: IWordService);
    private delete;
    private post;
}
//# sourceMappingURL=WordController.d.ts.map