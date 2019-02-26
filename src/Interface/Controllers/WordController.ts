import * as express from 'express';
import { interfaces, controller, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IWordService from '../../UseCase/IServices/IWordService';
import oauth from '../Services/oauthUtil';

@controller("/word")
export default class WordController implements interfaces.Controller {

  private _wordService: IWordService;

  public constructor(
    @inject(TYPES.IWordService) wordService: IWordService
  ) {
    this._wordService = wordService;
  }

  @httpPost("/", oauth.authenticate())
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isOk = await this._wordService.bulkUpsert(req.body);
    isOk ? res.status(200).json({ message: "upsert is completed" }) : res.status(409).json({ message: "upsert is NOT completed" });
  }
}



