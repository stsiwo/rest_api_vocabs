import '../../env';
import { injectable, inject } from 'inversify';
import "reflect-metadata";
import ICloudinaryAPI from '../../UseCase/IAPIs/ICloudinaryAPI';
import cloudinary from 'cloudinary';
import { IDef } from '../../Domain/Def';

@injectable()
export default class CloudinaryAPI implements ICloudinaryAPI {

  // cloudinary for nodejs does have type definition file so for now, add "any"
  private _cloudinary: any = cloudinary; 

  public constructor() {
    this._cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME as string, 
      api_key: process.env.CLOUDINARY_API_KEY as string, 
      api_secret: process.env.CLOUDINARY_SECRET as string,
    });
  }

  public deleteImagesOfUser(userName: string, urls: string[]) {
    console.log(urls);
    return Promise.all(urls.map(( url ) => this._cloudinary.v2.uploader.destroy(`${ userName }/${ url }`)))
      .then(( data ) => { console.log(data); return true})
      .catch(() => false);
  }
}


