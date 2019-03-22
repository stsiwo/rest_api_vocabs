import { interfaces } from "inversify-express-utils";
import IDictionaryService from '../../UseCase/IServices/IDictionaryService';
export default class DictionaryController implements interfaces.Controller {
    private _dictionaryService;
    constructor(dictionaryService: IDictionaryService);
    private post;
}
//# sourceMappingURL=DictionaryController.d.ts.map