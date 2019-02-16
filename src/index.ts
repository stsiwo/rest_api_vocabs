import express from 'express';
import * as bodyParser from 'body-parser';
import { getGoogleAccountFromCode } from './googleApiUtil';
import { Credentials } from 'google-auth-library';

const app = express();

interface IUserAccount {
  id: string | undefined;
  email: string | 0 | undefined;
  tokens: Credentials;
}

app.get('/login/oauth2/code/google', async function(req: express.Request, res: express.Response) {
  // extract code from query string
  const authorizationCode = req.query.code;

  // get user google account 
  const userAccount: IUserAccount = await getGoogleAccountFromCode(authorizationCode);
  console.log(userAccount);

  res.status(200).json({ account: userAccount });
});

app.get('/', function(req: express.Request, res: express.Response) {
  console.log('home page');
  res.status(200).json({ ok: "home page" });
});


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(3000);
