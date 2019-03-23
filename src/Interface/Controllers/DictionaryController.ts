import * as express from 'express';
import "reflect-metadata";
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IDictionaryService from '../../UseCase/IServices/IDictionaryService';
import oauth from '../Services/oauthUtil';

@controller("/dictionary")
export default class DictionaryController implements interfaces.Controller {

  private _dictionaryService: IDictionaryService;

  public constructor(
    @inject(TYPES.IDictionaryService) dictionaryService: IDictionaryService
  ) {
    this._dictionaryService = dictionaryService;
  }

  @httpGet("/")
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const suggestionList = await this._dictionaryService.searchWords(req.query.keyWord);
    res.status(200).json({ suggestionList: suggestionList })  
  }
}




