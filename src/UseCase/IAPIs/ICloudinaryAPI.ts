
export default interface ICloudinaryAPI {

  deleteImagesOfUser: (userName: string, urls: string[]) => Promise<boolean>;
}

