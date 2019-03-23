import * as express from 'express';
import "reflect-metadata";
import { interfaces, controller, httpPost, httpDelete } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IWordService from '../../UseCase/IServices/IWordService';
import oauth from '../Services/oauthUtil';
import multer from 'multer';
import path from 'path';
const upload = multer({ dest: path.join(__dirname, '/images') });

@controller("/word")
export default class WordController implements interfaces.Controller {

  private _wordService: IWordService;

  public constructor(
    @inject(TYPES.IWordService) wordService: IWordService
  ) {
    this._wordService = wordService;
  }

  @httpDelete("/")
  private async delete(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isOk = await this._wordService.deleteWords(req.body.id);
    isOk ? res.status(200).json({ isOk: true }) : res.status(409).json({ isOk: false});
  }

  @httpPost("/image", upload.single('myFile'))
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    res.status(200).json({ isOk: "success" });
    //isOk ? res.status(200).json({ isOk: true }) : res.status(409).json({ isOk: false});
  }
}



