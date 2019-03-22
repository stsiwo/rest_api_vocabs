"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoogleAccountFromCode = getGoogleAccountFromCode;

var _googleapis = require("googleapis");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var googleConfig = {
  clientId: '834404038464-opp91a6vhbk1rd0v4b115hko1gjb3chj.apps.googleusercontent.com',
  clientSecret: 'OBsj0UU_Pqrp6F544KzMeTIg',
  // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'http://localhost:3000/login/oauth2/code/google' // this must match your google api settings

};
/**
 * Create the google auth object which gives us access to talk to google's apis.
 */

function createConnection() {
  return new _googleapis.google.auth.OAuth2(googleConfig.clientId, googleConfig.clientSecret, googleConfig.redirect);
}
/**
 * This scope tells google what information we want to request.
 */


var defaultScope = ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.email'];
/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope
  });
}
/**
 * Create the google url to be sent to the client.
 */


function urlGoogle() {
  var auth = createConnection(); // this is from previous step

  var url = getConnectionUrl(auth);
  return url;
}
/**
 * Helper function to get the library with access to the google plus api.
 */


function getGooglePlusApi(auth) {
  return _googleapis.google.plus({
    version: 'v1',
    auth: auth
  });
}
/**
 * Extract the email and id of the google account from the "code" parameter.
 */


function getGoogleAccountFromCode(_x) {
  return _getGoogleAccountFromCode.apply(this, arguments);
}

function _getGoogleAccountFromCode() {
  _getGoogleAccountFromCode = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(code) {
    var auth, data, tokens, plus, me, userGoogleId, userGoogleEmail;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = createConnection(); // get the auth "tokens" from the request

            _context.next = 3;
            return auth.getToken(code);

          case 3:
            data = _context.sent;
            tokens = data.tokens;
            console.log(data); // add the tokens to the google api so we have access to the account

            auth.setCredentials(tokens); // connect to google plus - need this to get the user's email

            plus = getGooglePlusApi(auth);
            _context.next = 10;
            return plus.people.get({
              userId: 'me'
            });

          case 10:
            me = _context.sent;
            //// get the google id and email
            userGoogleId = me.data.id;
            userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value; //// return so we can login or sign up the user

            return _context.abrupt("return", {
              id: userGoogleId,
              email: userGoogleEmail,
              tokens: tokens // you can save these to the user if you ever want to get their details without making them log in again

            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getGoogleAccountFromCode.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvV2ViU2VydmVyL09BdXRoL2dvb2dsZUFwaVV0aWwudHMiXSwibmFtZXMiOlsiZ29vZ2xlQ29uZmlnIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJyZWRpcmVjdCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJnb29nbGUiLCJhdXRoIiwiT0F1dGgyIiwiZGVmYXVsdFNjb3BlIiwiZ2V0Q29ubmVjdGlvblVybCIsImdlbmVyYXRlQXV0aFVybCIsImFjY2Vzc190eXBlIiwicHJvbXB0Iiwic2NvcGUiLCJ1cmxHb29nbGUiLCJ1cmwiLCJnZXRHb29nbGVQbHVzQXBpIiwicGx1cyIsInZlcnNpb24iLCJnZXRHb29nbGVBY2NvdW50RnJvbUNvZGUiLCJjb2RlIiwiZ2V0VG9rZW4iLCJkYXRhIiwidG9rZW5zIiwiY29uc29sZSIsImxvZyIsInNldENyZWRlbnRpYWxzIiwicGVvcGxlIiwiZ2V0IiwidXNlcklkIiwibWUiLCJ1c2VyR29vZ2xlSWQiLCJpZCIsInVzZXJHb29nbGVFbWFpbCIsImVtYWlscyIsImxlbmd0aCIsInZhbHVlIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxRQUFRLEVBQUUsMEVBRFM7QUFFbkJDLEVBQUFBLFlBQVksRUFBRSwwQkFGSztBQUV1QjtBQUMxQ0MsRUFBQUEsUUFBUSxFQUFFLGdEQUhTLENBR3dDOztBQUh4QyxDQUFyQjtBQU1BOzs7O0FBR0EsU0FBU0MsZ0JBQVQsR0FBMEM7QUFDeEMsU0FBTyxJQUFJQyxtQkFBT0MsSUFBUCxDQUFZQyxNQUFoQixDQUNMUCxZQUFZLENBQUNDLFFBRFIsRUFFTEQsWUFBWSxDQUFDRSxZQUZSLEVBR0xGLFlBQVksQ0FBQ0csUUFIUixDQUFQO0FBS0Q7QUFFRDs7Ozs7QUFHQSxJQUFNSyxZQUFZLEdBQUcsQ0FDbkIseUNBRG1CLEVBRW5CLGdEQUZtQixDQUFyQjtBQUtBOzs7O0FBR0EsU0FBU0MsZ0JBQVQsQ0FBMEJILElBQTFCLEVBQThDO0FBQzVDLFNBQU9BLElBQUksQ0FBQ0ksZUFBTCxDQUFxQjtBQUMxQkMsSUFBQUEsV0FBVyxFQUFFLFNBRGE7QUFFMUJDLElBQUFBLE1BQU0sRUFBRSxTQUZrQjtBQUVQO0FBQ25CQyxJQUFBQSxLQUFLLEVBQUVMO0FBSG1CLEdBQXJCLENBQVA7QUFLRDtBQUVEOzs7OztBQUdBLFNBQVNNLFNBQVQsR0FBcUI7QUFDbkIsTUFBTVIsSUFBa0IsR0FBR0YsZ0JBQWdCLEVBQTNDLENBRG1CLENBQzRCOztBQUMvQyxNQUFNVyxHQUFHLEdBQUdOLGdCQUFnQixDQUFDSCxJQUFELENBQTVCO0FBQ0EsU0FBT1MsR0FBUDtBQUNEO0FBRUQ7Ozs7O0FBR0EsU0FBU0MsZ0JBQVQsQ0FBMEJWLElBQTFCLEVBQThDO0FBQzVDLFNBQU9ELG1CQUFPWSxJQUFQLENBQVk7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJaLElBQUFBLElBQUksRUFBSkE7QUFBakIsR0FBWixDQUFQO0FBQ0Q7QUFFRDs7Ozs7U0FTc0JhLHdCOzs7Ozs7OzBCQUFmLGlCQUF3Q0MsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUNkLFlBQUFBLElBRkQsR0FFc0JGLGdCQUFnQixFQUZ0QyxFQUdMOztBQUhLO0FBQUEsbUJBSWNFLElBQUksQ0FBQ2UsUUFBTCxDQUFjRCxJQUFkLENBSmQ7O0FBQUE7QUFJQ0UsWUFBQUEsSUFKRDtBQUtDQyxZQUFBQSxNQUxELEdBS1VELElBQUksQ0FBQ0MsTUFMZjtBQU9MQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQVBLLENBUUw7O0FBQ0FoQixZQUFBQSxJQUFJLENBQUNvQixjQUFMLENBQW9CSCxNQUFwQixFQVRLLENBV0w7O0FBQ01OLFlBQUFBLElBWkQsR0FZUUQsZ0JBQWdCLENBQUNWLElBQUQsQ0FaeEI7QUFBQTtBQUFBLG1CQWFZVyxJQUFJLENBQUNVLE1BQUwsQ0FBWUMsR0FBWixDQUFnQjtBQUFFQyxjQUFBQSxNQUFNLEVBQUU7QUFBVixhQUFoQixDQWJaOztBQUFBO0FBYUNDLFlBQUFBLEVBYkQ7QUFlTDtBQUNNQyxZQUFBQSxZQWhCRCxHQWdCZ0JELEVBQUUsQ0FBQ1IsSUFBSCxDQUFRVSxFQWhCeEI7QUFpQkNDLFlBQUFBLGVBakJELEdBaUJtQkgsRUFBRSxDQUFDUixJQUFILENBQVFZLE1BQVIsSUFBa0JKLEVBQUUsQ0FBQ1IsSUFBSCxDQUFRWSxNQUFSLENBQWVDLE1BQWpDLElBQTJDTCxFQUFFLENBQUNSLElBQUgsQ0FBUVksTUFBUixDQUFlLENBQWYsRUFBa0JFLEtBakJoRixFQW1CTDs7QUFuQkssNkNBb0JFO0FBQ0xKLGNBQUFBLEVBQUUsRUFBRUQsWUFEQztBQUVMTSxjQUFBQSxLQUFLLEVBQUVKLGVBRkY7QUFHTFYsY0FBQUEsTUFBTSxFQUFFQSxNQUhILENBR1c7O0FBSFgsYUFwQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ2dvb2dsZWFwaXMnO1xuaW1wb3J0IHsgT0F1dGgyQ2xpZW50LCBDcmVkZW50aWFscyB9IGZyb20gJ2dvb2dsZS1hdXRoLWxpYnJhcnknO1xuXG5jb25zdCBnb29nbGVDb25maWcgPSB7XG4gIGNsaWVudElkOiAnODM0NDA0MDM4NDY0LW9wcDkxYTZ2aGJrMXJkMHY0YjExNWhrbzFnamIzY2hqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJywgXG4gIGNsaWVudFNlY3JldDogJ09Cc2owVVVfUHFycDZGNTQ0S3pNZVRJZycsIC8vIGUuZy4gX0FTREZBJURGQVNERkFTREZBU0QjRkFELVxuICByZWRpcmVjdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbi9vYXV0aDIvY29kZS9nb29nbGUnIC8vIHRoaXMgbXVzdCBtYXRjaCB5b3VyIGdvb2dsZSBhcGkgc2V0dGluZ3Ncbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBnb29nbGUgYXV0aCBvYmplY3Qgd2hpY2ggZ2l2ZXMgdXMgYWNjZXNzIHRvIHRhbGsgdG8gZ29vZ2xlJ3MgYXBpcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGlvbigpOiBPQXV0aDJDbGllbnQge1xuICByZXR1cm4gbmV3IGdvb2dsZS5hdXRoLk9BdXRoMihcbiAgICBnb29nbGVDb25maWcuY2xpZW50SWQsXG4gICAgZ29vZ2xlQ29uZmlnLmNsaWVudFNlY3JldCxcbiAgICBnb29nbGVDb25maWcucmVkaXJlY3RcbiAgKTtcbn1cblxuLyoqXG4gKiBUaGlzIHNjb3BlIHRlbGxzIGdvb2dsZSB3aGF0IGluZm9ybWF0aW9uIHdlIHdhbnQgdG8gcmVxdWVzdC5cbiAqL1xuY29uc3QgZGVmYXVsdFNjb3BlID0gW1xuICAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9wbHVzLm1lJyxcbiAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8uZW1haWwnLFxuXTtcblxuLyoqXG4gKiBHZXQgYSB1cmwgd2hpY2ggd2lsbCBvcGVuIHRoZSBnb29nbGUgc2lnbi1pbiBwYWdlIGFuZCByZXF1ZXN0IGFjY2VzcyB0byB0aGUgc2NvcGUgcHJvdmlkZWQgKHN1Y2ggYXMgY2FsZW5kYXIgZXZlbnRzKS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29ubmVjdGlvblVybChhdXRoOiBPQXV0aDJDbGllbnQpIHtcbiAgcmV0dXJuIGF1dGguZ2VuZXJhdGVBdXRoVXJsKHtcbiAgICBhY2Nlc3NfdHlwZTogJ29mZmxpbmUnLFxuICAgIHByb21wdDogJ2NvbnNlbnQnLCAvLyBhY2Nlc3MgdHlwZSBhbmQgYXBwcm92YWwgcHJvbXB0IHdpbGwgZm9yY2UgYSBuZXcgcmVmcmVzaCB0b2tlbiB0byBiZSBtYWRlIGVhY2ggdGltZSBzaWducyBpblxuICAgIHNjb3BlOiBkZWZhdWx0U2NvcGVcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBnb29nbGUgdXJsIHRvIGJlIHNlbnQgdG8gdGhlIGNsaWVudC5cbiAqL1xuZnVuY3Rpb24gdXJsR29vZ2xlKCkge1xuICBjb25zdCBhdXRoOiBPQXV0aDJDbGllbnQgPSBjcmVhdGVDb25uZWN0aW9uKCk7IC8vIHRoaXMgaXMgZnJvbSBwcmV2aW91cyBzdGVwXG4gIGNvbnN0IHVybCA9IGdldENvbm5lY3Rpb25VcmwoYXV0aCk7XG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgbGlicmFyeSB3aXRoIGFjY2VzcyB0byB0aGUgZ29vZ2xlIHBsdXMgYXBpLlxuICovXG5mdW5jdGlvbiBnZXRHb29nbGVQbHVzQXBpKGF1dGg6IE9BdXRoMkNsaWVudCkge1xuICByZXR1cm4gZ29vZ2xlLnBsdXMoeyB2ZXJzaW9uOiAndjEnLCBhdXRoIH0pO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIGVtYWlsIGFuZCBpZCBvZiB0aGUgZ29vZ2xlIGFjY291bnQgZnJvbSB0aGUgXCJjb2RlXCIgcGFyYW1ldGVyLlxuICovXG5pbnRlcmZhY2UgSVVzZXJBY2NvdW50IHtcbiAgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW1haWw6IHN0cmluZyB8IDAgfCB1bmRlZmluZWQ7XG4gIHRva2VuczogQ3JlZGVudGlhbHM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHb29nbGVBY2NvdW50RnJvbUNvZGUoY29kZTogc3RyaW5nKTogUHJvbWlzZTxJVXNlckFjY291bnQ+IHtcblxuICBjb25zdCBhdXRoOiBPQXV0aDJDbGllbnQgPSBjcmVhdGVDb25uZWN0aW9uKCk7XG4gIC8vIGdldCB0aGUgYXV0aCBcInRva2Vuc1wiIGZyb20gdGhlIHJlcXVlc3RcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF1dGguZ2V0VG9rZW4oY29kZSk7XG4gIGNvbnN0IHRva2VucyA9IGRhdGEudG9rZW5zO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyBhZGQgdGhlIHRva2VucyB0byB0aGUgZ29vZ2xlIGFwaSBzbyB3ZSBoYXZlIGFjY2VzcyB0byB0aGUgYWNjb3VudFxuICBhdXRoLnNldENyZWRlbnRpYWxzKHRva2Vucyk7XG5cbiAgLy8gY29ubmVjdCB0byBnb29nbGUgcGx1cyAtIG5lZWQgdGhpcyB0byBnZXQgdGhlIHVzZXIncyBlbWFpbFxuICBjb25zdCBwbHVzID0gZ2V0R29vZ2xlUGx1c0FwaShhdXRoKTtcbiAgY29uc3QgbWUgPSBhd2FpdCBwbHVzLnBlb3BsZS5nZXQoeyB1c2VySWQ6ICdtZScgfSk7XG5cbiAgLy8vLyBnZXQgdGhlIGdvb2dsZSBpZCBhbmQgZW1haWxcbiAgY29uc3QgdXNlckdvb2dsZUlkID0gbWUuZGF0YS5pZDtcbiAgY29uc3QgdXNlckdvb2dsZUVtYWlsID0gbWUuZGF0YS5lbWFpbHMgJiYgbWUuZGF0YS5lbWFpbHMubGVuZ3RoICYmIG1lLmRhdGEuZW1haWxzWzBdLnZhbHVlO1xuXG4gIC8vLy8gcmV0dXJuIHNvIHdlIGNhbiBsb2dpbiBvciBzaWduIHVwIHRoZSB1c2VyXG4gIHJldHVybiB7XG4gICAgaWQ6IHVzZXJHb29nbGVJZCxcbiAgICBlbWFpbDogdXNlckdvb2dsZUVtYWlsLFxuICAgIHRva2VuczogdG9rZW5zLCAvLyB5b3UgY2FuIHNhdmUgdGhlc2UgdG8gdGhlIHVzZXIgaWYgeW91IGV2ZXIgd2FudCB0byBnZXQgdGhlaXIgZGV0YWlscyB3aXRob3V0IG1ha2luZyB0aGVtIGxvZyBpbiBhZ2FpblxuICB9O1xufVxuIl19