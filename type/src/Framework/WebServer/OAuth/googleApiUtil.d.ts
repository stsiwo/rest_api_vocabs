import { Credentials } from 'google-auth-library';
/**
 * Extract the email and id of the google account from the "code" parameter.
 */
interface IUserAccount {
    id: string | undefined;
    email: string | 0 | undefined;
    tokens: Credentials;
}
export declare function getGoogleAccountFromCode(code: string): Promise<IUserAccount>;
export {};
//# sourceMappingURL=googleApiUtil.d.ts.map