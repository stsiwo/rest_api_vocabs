import { interfaces } from "inversify-express-utils";
import IUserService from '../../UseCase/IServices/IUserService';
export default class UserController implements interfaces.Controller {
    private _userService;
    constructor(userService: IUserService);
    /**
     * request for check user name is unique when signup
     **/
    private checkUserNameUnique;
    /**
     * request for check email already exist when signup
     **/
    private checkEmailAlreadyExist;
    /**
     * request for get all words of a specific user
     **/
    private get;
    /**
     * request for upsert new or editted words of a specific user
     **/
    private post;
    /**
     * request for upsert new or editted words of a specific user
     **/
    private deleteImagesOfUser;
    /**
     * request for signup
     **/
    private signUp;
}
//# sourceMappingURL=UserController.d.ts.map