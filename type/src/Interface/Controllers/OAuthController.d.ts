import { interfaces } from "inversify-express-utils";
export default class OAuthController implements interfaces.Controller {
    /**
     * issue new access token to post request
     *
     *   - do not implement inside this function since middleware (oauth.token()) returns new token to client
     **/
    private index;
    /**
     * revoke token
     *   - delete the row to invalidate access tokena and refresh token
     **/
    private post;
}
//# sourceMappingURL=OAuthController.d.ts.map