import '../../env';
import "reflect-metadata";
import ICloudinaryAPI from '../../UseCase/IAPIs/ICloudinaryAPI';
export default class CloudinaryAPI implements ICloudinaryAPI {
    private _cloudinary;
    constructor();
    deleteImagesOfUser(userName: string, urls: string[]): Promise<boolean>;
}
//# sourceMappingURL=CloudinaryAPI.d.ts.map