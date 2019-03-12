import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, httpDelete } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../../UseCase/IServices/IUserService';
import oauth from '../Services/oauthUtil';
import multer from 'multer';
import path from 'path';
import { IDef } from '../../Domain/Def';
const upload = multer({ dest: path.join(__dirname, '/images') });

@controller("/user")
export default class UserController implements interfaces.Controller {

  private _userService: IUserService;

  public constructor(
    @inject(TYPES.IUserService) userService: IUserService
  ) {
    this._userService = userService;
  }

  /**
   * request for check user name is unique when signup
   **/
  @httpGet("/name")
  private async checkUserNameUnique(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isUnique = await this._userService.checkUserNameUnique(req.query.name);
    res.status(200).json({ isUnique: isUnique });
  }

  /**
   * request for check email already exist when signup
   **/
  @httpGet("/email")
  private async checkEmailAlreadyExist(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isAlreadyExists = await this._userService.checkEmailAlreadyExist(req.query.email);
    res.status(200).json({ isAlreadyExists: isAlreadyExists });
  }

  /**
   * request for get all words of a specific user
   **/
  @httpGet("/:username/word", oauth.authenticate())
  private async get(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const words = await this._userService.getWordsOfUser(req.params.username);
    res.status(200).json({ words: words });
  }

  /**
   * request for upsert new or editted words of a specific user
   **/
  @httpPost("/:username/word", oauth.authenticate()/*, upload.any()*/)
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isOk = await this._userService.upsertWordsOfUser(req.params.username, req.body);
    isOk ? res.status(200).json({ message: "upsert is completed" }) : res.status(409).json({ message: "upsert is NOT completed" });
  }

  /**
   * request for upsert new or editted words of a specific user
   **/
  @httpDelete("/:username/image", oauth.authenticate()/*, upload.any()*/)
  private async deleteImagesOfUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    console.log(req.body);
    // extract image storage url of each def
    const storageDirectory: string[] = req.body.map(( def: IDef ) => def.image.match(`/(${ req.params.username }\/.*)/`)[1]);

    const isOk = await this._userService.deleteImagesOfUser(req.params.username, storageDirectory);
    isOk ? res.status(200).json({ message: "deletion is completed" }) : res.status(409).json({ message: "deletion is NOT completed" });
  }

  /**
   * request for signup
   **/
  @httpPost("/")
  private async signUp(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    console.log(JSON.parse(JSON.stringify(req.body)));
    const isSignUpCompleted = await this._userService.signUp(req.body.name, req.body.email, req.body.password);
    isSignUpCompleted ? res.status(200).json({ isSignUpCompleted: true }) : res.status(409).json({ isSignUpCompleted: false });
  }
}


