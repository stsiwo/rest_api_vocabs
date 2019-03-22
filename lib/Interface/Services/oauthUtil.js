"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressOauthServer = _interopRequireDefault(require("express-oauth-server"));

var _AccessToken = _interopRequireDefault(require("../../Framework/Infrastructure/DataEntities/AccessToken"));

var _User = _interopRequireDefault(require("../../Framework/Infrastructure/DataEntities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * NOTE: OAuth protocol recommends to separate Authroization server and Resource server, but I don't know how to implement this using express-oauth-server because of "oauthenticate()". it resides in Authorization Server ( not Resource Server ); therefore, there is no way to authenticate request in Resource Server.
 *  - if you use jwt, that could be authenticated in Resource server, but currently i use simple token (random string) *  - for now, i implement Authorization Server and Resource Server at a same server
 **/
var TempClient = {
  id: "temp_client_id",
  clientId: "sample_cid",
  clientSecret: "sample_cs",
  grants: ['password', 'refresh_token']
};
var model = {
  /**
   * get refresh token in db when 'refresh_token' grant type
   *
   * @param { string } refreshToken - a token from request
   *
   * @return { Promise<RefreshToken | null> } refresh token object 
   **/
  getRefreshToken: function () {
    var _getRefreshToken = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(refreshToken) {
      var refreshTokenObject, user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _AccessToken.default.findOne({
                where: {
                  refreshToken: refreshToken
                },
                raw: true
              });

            case 2:
              refreshTokenObject = _context.sent;

              if (!(refreshTokenObject === null)) {
                _context.next = 5;
                break;
              }

              throw new Error("there is no such a refresh token");

            case 5:
              _context.next = 7;
              return _User.default.findOne({
                where: {
                  id: refreshTokenObject.userId
                },
                raw: true
              });

            case 7:
              user = _context.sent;

              if (!(user === null)) {
                _context.next = 10;
                break;
              }

              throw new Error("there is no such user for the corresponding refresh token");

            case 10:
              return _context.abrupt("return", {
                refreshToken: refreshTokenObject.refreshToken,
                client: {
                  id: TempClient.id,
                  grants: TempClient.grants
                },
                user: user
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getRefreshToken(_x) {
      return _getRefreshToken.apply(this, arguments);
    }

    return getRefreshToken;
  }(),
  // optional 
  // generate access token 
  // default implementation is ok for now so don't implement this
  //generateAccessToken: function(client, user, scope, [callback]) {
  //}

  /**
   * get access token from database
   *
   * @param { string } accessToken - this from request
   * 
   * @return { Promise<Token | null> } accessToken object - queried by database if exists otherwise null
   *
   * - require if authenticate() is used
   * - retrieve an existing access token previously saved through saveToken() 
   * 
   **/
  getAccessToken: function () {
    var _getAccessToken = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(accessToken) {
      var accessTokenObject, user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _AccessToken.default.findOne({
                where: {
                  accessToken: accessToken
                },
                raw: true
              });

            case 2:
              accessTokenObject = _context2.sent;

              if (!(accessTokenObject === null)) {
                _context2.next = 5;
                break;
              }

              throw new Error("there is no such access token to be gotten");

            case 5:
              _context2.next = 7;
              return _User.default.findOne({
                where: {
                  id: accessTokenObject.userId
                },
                raw: true
              });

            case 7:
              user = _context2.sent;

              if (!(user === null)) {
                _context2.next = 10;
                break;
              }

              throw new Error("there is no such user for the corrsponding access token");

            case 10:
              return _context2.abrupt("return", {
                accessToken: accessTokenObject.accessToken,
                accessTokenExpiresAt: accessTokenObject.accessTokenExpiresAt,
                refreshToken: accessTokenObject.refreshToken,
                client: {
                  id: TempClient.id,
                  grants: TempClient.grants
                },
                user: user
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getAccessToken(_x2) {
      return _getAccessToken.apply(this, arguments);
    }

    return getAccessToken;
  }(),

  /**
   *  get client from database
   *
   *  @param { string } clientId - from request
   *  @param { string } clientSecret - from request
   *
   *  @return { Promise<Client> } client
   *
   *  - NOTE: for current implementation, i don't implement this function because client that uses this api is the only one
   *  - require for all grant type including password 
   *  - get a client by client id and its secret 
   **/
  getClient: function () {
    var _getClient = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(clientId, clientSecret) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", TempClient);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getClient(_x3, _x4) {
      return _getClient.apply(this, arguments);
    }

    return getClient;
  }(),

  /**
   * get user from db to compare with one from request
   *
   *  - require for password grant type
   *  - get user by username, password 
   *
   * @param { string } username - username from request
   * @param { string } password - from request
   *
   * @return { Promise<User> } return user from database if exists otherwise error 
   *  - return error means credentials from requst does not match one in database
   **/
  getUser: function () {
    var _getUser = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(username, password) {
      var user;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _User.default.findOne({
                where: {
                  name: username,
                  password: password
                },
                raw: true
              });

            case 2:
              user = _context4.sent;

              if (!(user === null)) {
                _context4.next = 5;
                break;
              }

              throw new Error("there is no such user to be retrieved");

            case 5:
              return _context4.abrupt("return", user);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getUser(_x5, _x6) {
      return _getUser.apply(this, arguments);
    }

    return getUser;
  }(),

  /**
   * save newly created access token to db
   *
   * @param { IToken } token - newly created token from this api. it need to be saved in accessTokens table
   * @param { Client } client - associated client from database. need this because access token table has the relationship
   * @param { User } user - associate user from database. need this because access token table has the relationship
   * @return { Promise<IToken> } object contains token, client and user
   *
   *  - require for all grant type including password
   *  - save token (access token, expiration, and its associating user)
   **/
  saveToken: function () {
    var _saveToken = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(token, client, user) {
      var newAccessToken;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _AccessToken.default.create({
                accessToken: token.accessToken,
                accessTokenExpiresAt: token.accessTokenExpiresAt,
                refreshToken: token.refreshToken,
                scope: token.scope,
                userId: user.id
              });

            case 2:
              newAccessToken = _context5.sent;
              return _context5.abrupt("return", _objectSpread({}, token, {
                client: client,
                user: user
              }));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function saveToken(_x7, _x8, _x9) {
      return _saveToken.apply(this, arguments);
    }

    return saveToken;
  }(),

  /**
   *  verify scope
   *
   *  @param { Token } token - token object
   *  @param { string } scope - scope
   *
   *  @return { Promise<boolean> } verified or not
   *
   *  - NOTE: currently don't use scope at all so always return true to pass this verify function
   *
   **/
  verifyScope: function () {
    var _verifyScope = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(token, scope) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", true);

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function verifyScope(_x10, _x11) {
      return _verifyScope.apply(this, arguments);
    }

    return verifyScope;
  }(),

  /**
   * revoke refresh token when no longer necessary
   *  - means delete refresh token data from access token table
   *
   * @param { RefreshToken } refresh token - the token from getRefreshToken
   *
   * @return { Promise<boolean> } revocation success or not
   **/
  revokeToken: function () {
    var _revokeToken = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(refreshTokenObject) {
      var targetAccessToken, isDeleted;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _AccessToken.default.findOne({
                where: {
                  refreshToken: refreshTokenObject.refreshToken
                }
              });

            case 2:
              targetAccessToken = _context7.sent;

              if (!(targetAccessToken === null)) {
                _context7.next = 5;
                break;
              }

              throw new Error("there is no such a refresh token to be revoked");

            case 5:
              _context7.next = 7;
              return targetAccessToken.update({
                refreshToken: null
              }).then(function () {
                // return true if success
                return true;
              }).catch(function () {
                // return false if err
                return false;
              });

            case 7:
              isDeleted = _context7.sent;
              return _context7.abrupt("return", isDeleted);

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function revokeToken(_x12) {
      return _revokeToken.apply(this, arguments);
    }

    return revokeToken;
  }()
}; // create oauth server

var oauth = new _expressOauthServer.default({
  model: model,
  accessTokenLifetime: 4 * 60 * 60,
  // disable clientSecret in request
  requireClientAuthentication: {
    password: false
  }
});
var _default = oauth;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2UvU2VydmljZXMvb2F1dGhVdGlsLnRzIl0sIm5hbWVzIjpbIlRlbXBDbGllbnQiLCJpZCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiZ3JhbnRzIiwibW9kZWwiLCJnZXRSZWZyZXNoVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJFQWNjZXNzVG9rZW4iLCJmaW5kT25lIiwid2hlcmUiLCJyYXciLCJyZWZyZXNoVG9rZW5PYmplY3QiLCJFcnJvciIsIkVVc2VyIiwidXNlcklkIiwidXNlciIsImNsaWVudCIsImdldEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlbk9iamVjdCIsImFjY2Vzc1Rva2VuRXhwaXJlc0F0IiwiZ2V0Q2xpZW50IiwiZ2V0VXNlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJuYW1lIiwic2F2ZVRva2VuIiwidG9rZW4iLCJjcmVhdGUiLCJzY29wZSIsIm5ld0FjY2Vzc1Rva2VuIiwidmVyaWZ5U2NvcGUiLCJyZXZva2VUb2tlbiIsInRhcmdldEFjY2Vzc1Rva2VuIiwidXBkYXRlIiwidGhlbiIsImNhdGNoIiwiaXNEZWxldGVkIiwib2F1dGgiLCJPQXV0aDJTZXJ2ZXIiLCJhY2Nlc3NUb2tlbkxpZmV0aW1lIiwicmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBS0EsSUFBTUEsVUFBa0IsR0FBRztBQUN6QkMsRUFBQUEsRUFBRSxFQUFFLGdCQURxQjtBQUV6QkMsRUFBQUEsUUFBUSxFQUFFLFlBRmU7QUFHekJDLEVBQUFBLFlBQVksRUFBRSxXQUhXO0FBSXpCQyxFQUFBQSxNQUFNLEVBQUUsQ0FBRSxVQUFGLEVBQWMsZUFBZDtBQUppQixDQUEzQjtBQVNBLElBQU1DLEtBQUssR0FBRztBQUVaOzs7Ozs7O0FBT0FDLEVBQUFBLGVBQWU7QUFBQTtBQUFBO0FBQUEsNEJBQUUsaUJBQWVDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFa0JDLHFCQUFhQyxPQUFiLENBQXFCO0FBQUVDLGdCQUFBQSxLQUFLLEVBQUU7QUFBRUgsa0JBQUFBLFlBQVksRUFBRUE7QUFBaEIsaUJBQVQ7QUFBeUNJLGdCQUFBQSxHQUFHLEVBQUU7QUFBOUMsZUFBckIsQ0FGbEI7O0FBQUE7QUFFVEMsY0FBQUEsa0JBRlM7O0FBQUEsb0JBSVZBLGtCQUFrQixLQUFLLElBSmI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBS1AsSUFBSUMsS0FBSixDQUFVLGtDQUFWLENBTE87O0FBQUE7QUFBQTtBQUFBLHFCQVFJQyxjQUFNTCxPQUFOLENBQWM7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRTtBQUFFVCxrQkFBQUEsRUFBRSxFQUFFVyxrQkFBa0IsQ0FBQ0c7QUFBekIsaUJBQVQ7QUFBNENKLGdCQUFBQSxHQUFHLEVBQUU7QUFBakQsZUFBZCxDQVJKOztBQUFBO0FBUVRLLGNBQUFBLElBUlM7O0FBQUEsb0JBVVZBLElBQUksS0FBSyxJQVZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQVdQLElBQUlILEtBQUosQ0FBVSwyREFBVixDQVhPOztBQUFBO0FBQUEsK0NBY1I7QUFDTE4sZ0JBQUFBLFlBQVksRUFBRUssa0JBQWtCLENBQUNMLFlBRDVCO0FBRUxVLGdCQUFBQSxNQUFNLEVBQUU7QUFDTmhCLGtCQUFBQSxFQUFFLEVBQUVELFVBQVUsQ0FBQ0MsRUFEVDtBQUVORyxrQkFBQUEsTUFBTSxFQUFFSixVQUFVLENBQUNJO0FBRmIsaUJBRkg7QUFNTFksZ0JBQUFBLElBQUksRUFBRUE7QUFORCxlQWRROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FUSDtBQWlDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBRSxFQUFBQSxjQUFjO0FBQUE7QUFBQTtBQUFBLDRCQUFFLGtCQUFlQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWtCWCxxQkFBYUMsT0FBYixDQUFxQjtBQUFFQyxnQkFBQUEsS0FBSyxFQUFFO0FBQUVTLGtCQUFBQSxXQUFXLEVBQUVBO0FBQWYsaUJBQVQ7QUFBdUNSLGdCQUFBQSxHQUFHLEVBQUU7QUFBNUMsZUFBckIsQ0FGbEI7O0FBQUE7QUFFUlMsY0FBQUEsaUJBRlE7O0FBQUEsb0JBSVRBLGlCQUFpQixLQUFLLElBSmI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBS04sSUFBSVAsS0FBSixDQUFVLDRDQUFWLENBTE07O0FBQUE7QUFBQTtBQUFBLHFCQVFLQyxjQUFNTCxPQUFOLENBQWM7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRTtBQUFFVCxrQkFBQUEsRUFBRSxFQUFFbUIsaUJBQWlCLENBQUNMO0FBQXhCLGlCQUFUO0FBQTJDSixnQkFBQUEsR0FBRyxFQUFFO0FBQWhELGVBQWQsQ0FSTDs7QUFBQTtBQVFSSyxjQUFBQSxJQVJROztBQUFBLG9CQVVUQSxJQUFJLEtBQUssSUFWQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFXTixJQUFJSCxLQUFKLENBQVUseURBQVYsQ0FYTTs7QUFBQTtBQUFBLGdEQWNQO0FBQ0xNLGdCQUFBQSxXQUFXLEVBQUVDLGlCQUFpQixDQUFDRCxXQUQxQjtBQUVMRSxnQkFBQUEsb0JBQW9CLEVBQUVELGlCQUFpQixDQUFDQyxvQkFGbkM7QUFHTGQsZ0JBQUFBLFlBQVksRUFBRWEsaUJBQWlCLENBQUNiLFlBSDNCO0FBSUxVLGdCQUFBQSxNQUFNLEVBQUU7QUFDTmhCLGtCQUFBQSxFQUFFLEVBQUVELFVBQVUsQ0FBQ0MsRUFEVDtBQUVORyxrQkFBQUEsTUFBTSxFQUFFSixVQUFVLENBQUNJO0FBRmIsaUJBSkg7QUFRTFksZ0JBQUFBLElBQUksRUFBRUE7QUFSRCxlQWRPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FsREY7O0FBNEVaOzs7Ozs7Ozs7Ozs7QUFZQU0sRUFBQUEsU0FBUztBQUFBO0FBQUE7QUFBQSw0QkFBRSxrQkFBZXBCLFFBQWYsRUFBaUNDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFDRkgsVUFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBeEZHOztBQTRGWjs7Ozs7Ozs7Ozs7O0FBWUF1QixFQUFBQSxPQUFPO0FBQUE7QUFBQTtBQUFBLDRCQUFFLGtCQUFlQyxRQUFmLEVBQWlDQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVZWCxjQUFNTCxPQUFOLENBQWM7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRTtBQUFFZ0Isa0JBQUFBLElBQUksRUFBRUYsUUFBUjtBQUFrQkMsa0JBQUFBLFFBQVEsRUFBRUE7QUFBNUIsaUJBQVQ7QUFBaURkLGdCQUFBQSxHQUFHLEVBQUU7QUFBdEQsZUFBZCxDQUZaOztBQUFBO0FBRURLLGNBQUFBLElBRkM7O0FBQUEsb0JBSUZBLElBQUksS0FBSyxJQUpQO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQUtDLElBQUlILEtBQUosQ0FBVSx1Q0FBVixDQUxEOztBQUFBO0FBQUEsZ0RBUUFHLElBUkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQXhHSzs7QUFtSFo7Ozs7Ozs7Ozs7O0FBV0FXLEVBQUFBLFNBQVM7QUFBQTtBQUFBO0FBQUEsNEJBQUUsa0JBQWVDLEtBQWYsRUFBNkJYLE1BQTdCLEVBQTZDRCxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVNvQlIscUJBQWFxQixNQUFiLENBQW9CO0FBQy9DVixnQkFBQUEsV0FBVyxFQUFFUyxLQUFLLENBQUNULFdBRDRCO0FBRS9DRSxnQkFBQUEsb0JBQW9CLEVBQUVPLEtBQUssQ0FBQ1Asb0JBRm1CO0FBRy9DZCxnQkFBQUEsWUFBWSxFQUFFcUIsS0FBSyxDQUFDckIsWUFIMkI7QUFJL0N1QixnQkFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNFLEtBSmtDO0FBSy9DZixnQkFBQUEsTUFBTSxFQUFFQyxJQUFJLENBQUNmO0FBTGtDLGVBQXBCLENBVHBCOztBQUFBO0FBU0g4QixjQUFBQSxjQVRHO0FBQUEsa0VBbUJKSCxLQW5CSTtBQW9CUFgsZ0JBQUFBLE1BQU0sRUFBTkEsTUFwQk87QUFxQlBELGdCQUFBQSxJQUFJLEVBQUpBO0FBckJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0E5SEc7O0FBdUpaOzs7Ozs7Ozs7OztBQVdBZ0IsRUFBQUEsV0FBVztBQUFBO0FBQUE7QUFBQSw0QkFBRSxrQkFBZUosS0FBZixFQUE2QkUsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUNKLElBREk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQWxLQzs7QUFzS1o7Ozs7Ozs7O0FBUUFHLEVBQUFBLFdBQVc7QUFBQTtBQUFBO0FBQUEsNEJBQUUsa0JBQWVyQixrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdxQkoscUJBQWFDLE9BQWIsQ0FBcUI7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRTtBQUFFSCxrQkFBQUEsWUFBWSxFQUFFSyxrQkFBa0IsQ0FBQ0w7QUFBbkM7QUFBVCxlQUFyQixDQUhyQjs7QUFBQTtBQUdMMkIsY0FBQUEsaUJBSEs7O0FBQUEsb0JBS05BLGlCQUFpQixLQUFLLElBTGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQU1ILElBQUlyQixLQUFKLENBQVUsZ0RBQVYsQ0FORzs7QUFBQTtBQUFBO0FBQUEscUJBVWFxQixpQkFBaUIsQ0FBQ0MsTUFBbEIsQ0FBeUI7QUFBRTVCLGdCQUFBQSxZQUFZLEVBQUU7QUFBaEIsZUFBekIsRUFDdkI2QixJQUR1QixDQUNsQixZQUFRO0FBQ1o7QUFDQSx1QkFBTyxJQUFQO0FBQ0QsZUFKdUIsRUFLdkJDLEtBTHVCLENBS2pCLFlBQVE7QUFDYjtBQUNBLHVCQUFPLEtBQVA7QUFDRCxlQVJ1QixDQVZiOztBQUFBO0FBVUxDLGNBQUFBLFNBVks7QUFBQSxnREFvQkpBLFNBcEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE5S0MsQ0FBZCxDLENBc01BOztBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJQywyQkFBSixDQUFpQjtBQUM3Qm5DLEVBQUFBLEtBQUssRUFBRUEsS0FEc0I7QUFFN0JvQyxFQUFBQSxtQkFBbUIsRUFBRSxJQUFJLEVBQUosR0FBUyxFQUZEO0FBRzdCO0FBQ0FDLEVBQUFBLDJCQUEyQixFQUFFO0FBQUNqQixJQUFBQSxRQUFRLEVBQUU7QUFBWDtBQUpBLENBQWpCLENBQWQ7ZUFPZWMsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPQXV0aDJTZXJ2ZXIgZnJvbSAnZXhwcmVzcy1vYXV0aC1zZXJ2ZXInO1xuaW1wb3J0IHsgVXNlciwgQ2xpZW50LCBUb2tlbiwgUmVmcmVzaFRva2VuIH0gZnJvbSAnb2F1dGgyLXNlcnZlcic7XG4vLyBuZWVkIHRvIGhhdmUgZGVwZW5kZW5jeSBvZiBJUmVwbyBpbnN0ZWFkIG9mIERhdGFFbnRpdGllcy4gdGhpcyB2aW9sYXRlIFwiZGVwZW5kZW5jeSBydWxlc1wiXG4vLyAjUkVGQUNUT1IgdGFnXG5pbXBvcnQgRUFjY2Vzc1Rva2VuIGZyb20gJy4uLy4uL0ZyYW1ld29yay9JbmZyYXN0cnVjdHVyZS9EYXRhRW50aXRpZXMvQWNjZXNzVG9rZW4nOyBcbmltcG9ydCBFVXNlciBmcm9tICcuLi8uLi9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL1VzZXInOyBcblxuLyoqXG4gKiBOT1RFOiBPQXV0aCBwcm90b2NvbCByZWNvbW1lbmRzIHRvIHNlcGFyYXRlIEF1dGhyb2l6YXRpb24gc2VydmVyIGFuZCBSZXNvdXJjZSBzZXJ2ZXIsIGJ1dCBJIGRvbid0IGtub3cgaG93IHRvIGltcGxlbWVudCB0aGlzIHVzaW5nIGV4cHJlc3Mtb2F1dGgtc2VydmVyIGJlY2F1c2Ugb2YgXCJvYXV0aGVudGljYXRlKClcIi4gaXQgcmVzaWRlcyBpbiBBdXRob3JpemF0aW9uIFNlcnZlciAoIG5vdCBSZXNvdXJjZSBTZXJ2ZXIgKTsgdGhlcmVmb3JlLCB0aGVyZSBpcyBubyB3YXkgdG8gYXV0aGVudGljYXRlIHJlcXVlc3QgaW4gUmVzb3VyY2UgU2VydmVyLlxuICogIC0gaWYgeW91IHVzZSBqd3QsIHRoYXQgY291bGQgYmUgYXV0aGVudGljYXRlZCBpbiBSZXNvdXJjZSBzZXJ2ZXIsIGJ1dCBjdXJyZW50bHkgaSB1c2Ugc2ltcGxlIHRva2VuIChyYW5kb20gc3RyaW5nKSAqICAtIGZvciBub3csIGkgaW1wbGVtZW50IEF1dGhvcml6YXRpb24gU2VydmVyIGFuZCBSZXNvdXJjZSBTZXJ2ZXIgYXQgYSBzYW1lIHNlcnZlclxuICoqL1xuXG5jb25zdCBUZW1wQ2xpZW50OiBDbGllbnQgPSB7XG4gIGlkOiBcInRlbXBfY2xpZW50X2lkXCIsXG4gIGNsaWVudElkOiBcInNhbXBsZV9jaWRcIixcbiAgY2xpZW50U2VjcmV0OiBcInNhbXBsZV9jc1wiLFxuICBncmFudHM6IFsgJ3Bhc3N3b3JkJywgJ3JlZnJlc2hfdG9rZW4nIF1cbn1cblxuXG5cbmNvbnN0IG1vZGVsID0ge1xuXG4gIC8qKlxuICAgKiBnZXQgcmVmcmVzaCB0b2tlbiBpbiBkYiB3aGVuICdyZWZyZXNoX3Rva2VuJyBncmFudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7IHN0cmluZyB9IHJlZnJlc2hUb2tlbiAtIGEgdG9rZW4gZnJvbSByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4geyBQcm9taXNlPFJlZnJlc2hUb2tlbiB8IG51bGw+IH0gcmVmcmVzaCB0b2tlbiBvYmplY3QgXG4gICAqKi9cbiAgZ2V0UmVmcmVzaFRva2VuOiBhc3luYyBmdW5jdGlvbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IFByb21pc2U8UmVmcmVzaFRva2VuIHwgbnVsbD4ge1xuXG4gICAgY29uc3QgcmVmcmVzaFRva2VuT2JqZWN0ID0gYXdhaXQgRUFjY2Vzc1Rva2VuLmZpbmRPbmUoeyB3aGVyZTogeyByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbiB9LCByYXc6IHRydWUgfSk7XG5cbiAgICBpZiAoIHJlZnJlc2hUb2tlbk9iamVjdCA9PT0gbnVsbCApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInRoZXJlIGlzIG5vIHN1Y2ggYSByZWZyZXNoIHRva2VuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBFVXNlci5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IHJlZnJlc2hUb2tlbk9iamVjdC51c2VySWQgfSwgcmF3OiB0cnVlIH0pO1xuXG4gICAgaWYgKCB1c2VyID09PSBudWxsICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlcmUgaXMgbm8gc3VjaCB1c2VyIGZvciB0aGUgY29ycmVzcG9uZGluZyByZWZyZXNoIHRva2VuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbk9iamVjdC5yZWZyZXNoVG9rZW4sXG4gICAgICBjbGllbnQ6IHtcbiAgICAgICAgaWQ6IFRlbXBDbGllbnQuaWQsXG4gICAgICAgIGdyYW50czogVGVtcENsaWVudC5ncmFudHMgXG4gICAgICB9LFxuICAgICAgdXNlcjogdXNlclxuICAgIH07XG4gIH0sXG4gIFxuICAvLyBvcHRpb25hbCBcbiAgLy8gZ2VuZXJhdGUgYWNjZXNzIHRva2VuIFxuICAvLyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGlzIG9rIGZvciBub3cgc28gZG9uJ3QgaW1wbGVtZW50IHRoaXNcbiAgLy9nZW5lcmF0ZUFjY2Vzc1Rva2VuOiBmdW5jdGlvbihjbGllbnQsIHVzZXIsIHNjb3BlLCBbY2FsbGJhY2tdKSB7XG4gIC8vfVxuXG4gIC8qKlxuICAgKiBnZXQgYWNjZXNzIHRva2VuIGZyb20gZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gYWNjZXNzVG9rZW4gLSB0aGlzIGZyb20gcmVxdWVzdFxuICAgKiBcbiAgICogQHJldHVybiB7IFByb21pc2U8VG9rZW4gfCBudWxsPiB9IGFjY2Vzc1Rva2VuIG9iamVjdCAtIHF1ZXJpZWQgYnkgZGF0YWJhc2UgaWYgZXhpc3RzIG90aGVyd2lzZSBudWxsXG4gICAqXG4gICAqIC0gcmVxdWlyZSBpZiBhdXRoZW50aWNhdGUoKSBpcyB1c2VkXG4gICAqIC0gcmV0cmlldmUgYW4gZXhpc3RpbmcgYWNjZXNzIHRva2VuIHByZXZpb3VzbHkgc2F2ZWQgdGhyb3VnaCBzYXZlVG9rZW4oKSBcbiAgICogXG4gICAqKi9cbiAgZ2V0QWNjZXNzVG9rZW46IGFzeW5jIGZ1bmN0aW9uKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuIHwgbnVsbD4ge1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW5PYmplY3QgPSBhd2FpdCBFQWNjZXNzVG9rZW4uZmluZE9uZSh7IHdoZXJlOiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9LCByYXc6IHRydWUgfSk7XG5cbiAgICBpZiAoIGFjY2Vzc1Rva2VuT2JqZWN0ID09PSBudWxsICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlcmUgaXMgbm8gc3VjaCBhY2Nlc3MgdG9rZW4gdG8gYmUgZ290dGVuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBFVXNlci5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGFjY2Vzc1Rva2VuT2JqZWN0LnVzZXJJZCB9LCByYXc6IHRydWUgfSk7XG5cbiAgICBpZiAoIHVzZXIgPT09IG51bGwgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aGVyZSBpcyBubyBzdWNoIHVzZXIgZm9yIHRoZSBjb3Jyc3BvbmRpbmcgYWNjZXNzIHRva2VuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5PYmplY3QuYWNjZXNzVG9rZW4sXG4gICAgICBhY2Nlc3NUb2tlbkV4cGlyZXNBdDogYWNjZXNzVG9rZW5PYmplY3QuYWNjZXNzVG9rZW5FeHBpcmVzQXQsXG4gICAgICByZWZyZXNoVG9rZW46IGFjY2Vzc1Rva2VuT2JqZWN0LnJlZnJlc2hUb2tlbixcbiAgICAgIGNsaWVudDoge1xuICAgICAgICBpZDogVGVtcENsaWVudC5pZCxcbiAgICAgICAgZ3JhbnRzOiBUZW1wQ2xpZW50LmdyYW50cyBcbiAgICAgIH0sXG4gICAgICB1c2VyOiB1c2VyXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogIGdldCBjbGllbnQgZnJvbSBkYXRhYmFzZVxuICAgKlxuICAgKiAgQHBhcmFtIHsgc3RyaW5nIH0gY2xpZW50SWQgLSBmcm9tIHJlcXVlc3RcbiAgICogIEBwYXJhbSB7IHN0cmluZyB9IGNsaWVudFNlY3JldCAtIGZyb20gcmVxdWVzdFxuICAgKlxuICAgKiAgQHJldHVybiB7IFByb21pc2U8Q2xpZW50PiB9IGNsaWVudFxuICAgKlxuICAgKiAgLSBOT1RFOiBmb3IgY3VycmVudCBpbXBsZW1lbnRhdGlvbiwgaSBkb24ndCBpbXBsZW1lbnQgdGhpcyBmdW5jdGlvbiBiZWNhdXNlIGNsaWVudCB0aGF0IHVzZXMgdGhpcyBhcGkgaXMgdGhlIG9ubHkgb25lXG4gICAqICAtIHJlcXVpcmUgZm9yIGFsbCBncmFudCB0eXBlIGluY2x1ZGluZyBwYXNzd29yZCBcbiAgICogIC0gZ2V0IGEgY2xpZW50IGJ5IGNsaWVudCBpZCBhbmQgaXRzIHNlY3JldCBcbiAgICoqL1xuICBnZXRDbGllbnQ6IGFzeW5jIGZ1bmN0aW9uKGNsaWVudElkOiBzdHJpbmcsIGNsaWVudFNlY3JldDogc3RyaW5nKTogUHJvbWlzZTxDbGllbnQ+IHtcbiAgICByZXR1cm4gVGVtcENsaWVudFxuICB9LFxuXG4gIC8qKlxuICAgKiBnZXQgdXNlciBmcm9tIGRiIHRvIGNvbXBhcmUgd2l0aCBvbmUgZnJvbSByZXF1ZXN0XG4gICAqXG4gICAqICAtIHJlcXVpcmUgZm9yIHBhc3N3b3JkIGdyYW50IHR5cGVcbiAgICogIC0gZ2V0IHVzZXIgYnkgdXNlcm5hbWUsIHBhc3N3b3JkIFxuICAgKlxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSB1c2VybmFtZSAtIHVzZXJuYW1lIGZyb20gcmVxdWVzdFxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSBwYXNzd29yZCAtIGZyb20gcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHsgUHJvbWlzZTxVc2VyPiB9IHJldHVybiB1c2VyIGZyb20gZGF0YWJhc2UgaWYgZXhpc3RzIG90aGVyd2lzZSBlcnJvciBcbiAgICogIC0gcmV0dXJuIGVycm9yIG1lYW5zIGNyZWRlbnRpYWxzIGZyb20gcmVxdXN0IGRvZXMgbm90IG1hdGNoIG9uZSBpbiBkYXRhYmFzZVxuICAgKiovXG4gIGdldFVzZXI6IGFzeW5jIGZ1bmN0aW9uKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XG4gICAgXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IEVVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0sIHJhdzogdHJ1ZX0pO1xuXG4gICAgaWYgKCB1c2VyID09PSBudWxsICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlcmUgaXMgbm8gc3VjaCB1c2VyIHRvIGJlIHJldHJpZXZlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSxcblxuICAvKipcbiAgICogc2F2ZSBuZXdseSBjcmVhdGVkIGFjY2VzcyB0b2tlbiB0byBkYlxuICAgKlxuICAgKiBAcGFyYW0geyBJVG9rZW4gfSB0b2tlbiAtIG5ld2x5IGNyZWF0ZWQgdG9rZW4gZnJvbSB0aGlzIGFwaS4gaXQgbmVlZCB0byBiZSBzYXZlZCBpbiBhY2Nlc3NUb2tlbnMgdGFibGVcbiAgICogQHBhcmFtIHsgQ2xpZW50IH0gY2xpZW50IC0gYXNzb2NpYXRlZCBjbGllbnQgZnJvbSBkYXRhYmFzZS4gbmVlZCB0aGlzIGJlY2F1c2UgYWNjZXNzIHRva2VuIHRhYmxlIGhhcyB0aGUgcmVsYXRpb25zaGlwXG4gICAqIEBwYXJhbSB7IFVzZXIgfSB1c2VyIC0gYXNzb2NpYXRlIHVzZXIgZnJvbSBkYXRhYmFzZS4gbmVlZCB0aGlzIGJlY2F1c2UgYWNjZXNzIHRva2VuIHRhYmxlIGhhcyB0aGUgcmVsYXRpb25zaGlwXG4gICAqIEByZXR1cm4geyBQcm9taXNlPElUb2tlbj4gfSBvYmplY3QgY29udGFpbnMgdG9rZW4sIGNsaWVudCBhbmQgdXNlclxuICAgKlxuICAgKiAgLSByZXF1aXJlIGZvciBhbGwgZ3JhbnQgdHlwZSBpbmNsdWRpbmcgcGFzc3dvcmRcbiAgICogIC0gc2F2ZSB0b2tlbiAoYWNjZXNzIHRva2VuLCBleHBpcmF0aW9uLCBhbmQgaXRzIGFzc29jaWF0aW5nIHVzZXIpXG4gICAqKi9cbiAgc2F2ZVRva2VuOiBhc3luYyBmdW5jdGlvbih0b2tlbjogVG9rZW4sIGNsaWVudDogQ2xpZW50LCB1c2VyOiBVc2VyKTogUHJvbWlzZTxUb2tlbj4ge1xuICAgIC8qKlxuICAgICAqICAtIHNhdmUgYWNjZXNzIHRva2VuIGluIGRiIGZvciB1c2VyIHdobyBtYWRlIHJlcXVlc3RcbiAgICAgKiAgICBhbmQgcmV0dXJuIHRoZSBhY2Nlc3MgdG9rZW4gaW4gcmV0dXJuIHN0YXRlbWVudCBcbiAgICAgKiAgICB0aGlzIGlzIHVzZWQgZm9yIHRva2VuKCkgdG8gcmV0dXJuIGFjY2VzcyB0b2tlbiBhcyByZXNwb25zZVxuICAgICAqXG4gICAgICogICAgTk9URTogY3VycmVudGx5IGRvbid0IHVzZSBjbGllbnQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBzaW5jZSBpdCBpcyBvbmx5IHRoZSBjbGllbnQgdXNlZCBmb3IgYXBpXG4gICAgICogICAgTk9URTogYWxzbyBkb24ndCBpbXBsZW1lbnQgcmVmcmVzaFRva2VuRXhwaXJlc0F0IHNpbmNlIGl0IGlzIG9wdGlvbmFsICggc2VlIG1vcmUgZGV0YWlsOiBodHRwczovL3d3dy5vYXV0aC5jb20vb2F1dGgyLXNlcnZlcnMvbWFraW5nLWF1dGhlbnRpY2F0ZWQtcmVxdWVzdHMvcmVmcmVzaGluZy1hbi1hY2Nlc3MtdG9rZW4vIClcbiAgICAgKiovXG4gICAgY29uc3QgbmV3QWNjZXNzVG9rZW4gPSBhd2FpdCBFQWNjZXNzVG9rZW4uY3JlYXRlKHsgXG4gICAgICBhY2Nlc3NUb2tlbjogdG9rZW4uYWNjZXNzVG9rZW4sXG4gICAgICBhY2Nlc3NUb2tlbkV4cGlyZXNBdDogdG9rZW4uYWNjZXNzVG9rZW5FeHBpcmVzQXQsXG4gICAgICByZWZyZXNoVG9rZW46IHRva2VuLnJlZnJlc2hUb2tlbixcbiAgICAgIHNjb3BlOiB0b2tlbi5zY29wZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZFxuICAgIH0pXG5cbiAgICAvLyBhbmQgcmV0dXJuIGNvbWJpbmF0aW9uIG9mIHRva2VuLCBjbGllbnQsIGFuZCB1c2VyIGZvciByZXNwb25zZVxuICAgIHJldHVybiB7IFxuICAgICAgLi4udG9rZW4sXG4gICAgICBjbGllbnQsXG4gICAgICB1c2VyLFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogIHZlcmlmeSBzY29wZVxuICAgKlxuICAgKiAgQHBhcmFtIHsgVG9rZW4gfSB0b2tlbiAtIHRva2VuIG9iamVjdFxuICAgKiAgQHBhcmFtIHsgc3RyaW5nIH0gc2NvcGUgLSBzY29wZVxuICAgKlxuICAgKiAgQHJldHVybiB7IFByb21pc2U8Ym9vbGVhbj4gfSB2ZXJpZmllZCBvciBub3RcbiAgICpcbiAgICogIC0gTk9URTogY3VycmVudGx5IGRvbid0IHVzZSBzY29wZSBhdCBhbGwgc28gYWx3YXlzIHJldHVybiB0cnVlIHRvIHBhc3MgdGhpcyB2ZXJpZnkgZnVuY3Rpb25cbiAgICpcbiAgICoqL1xuICB2ZXJpZnlTY29wZTogYXN5bmMgZnVuY3Rpb24odG9rZW46IFRva2VuLCBzY29wZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIHJldm9rZSByZWZyZXNoIHRva2VuIHdoZW4gbm8gbG9uZ2VyIG5lY2Vzc2FyeVxuICAgKiAgLSBtZWFucyBkZWxldGUgcmVmcmVzaCB0b2tlbiBkYXRhIGZyb20gYWNjZXNzIHRva2VuIHRhYmxlXG4gICAqXG4gICAqIEBwYXJhbSB7IFJlZnJlc2hUb2tlbiB9IHJlZnJlc2ggdG9rZW4gLSB0aGUgdG9rZW4gZnJvbSBnZXRSZWZyZXNoVG9rZW5cbiAgICpcbiAgICogQHJldHVybiB7IFByb21pc2U8Ym9vbGVhbj4gfSByZXZvY2F0aW9uIHN1Y2Nlc3Mgb3Igbm90XG4gICAqKi9cbiAgcmV2b2tlVG9rZW46IGFzeW5jIGZ1bmN0aW9uKHJlZnJlc2hUb2tlbk9iamVjdDogUmVmcmVzaFRva2VuKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAvLyBmaW5kIGFjY2VzcyB0b2tlbiByb3cgd2hlcmUgcmVmcmVzaCB0b2tlbiBtYXRjaGVzIGFyZ1xuICAgIGNvbnN0IHRhcmdldEFjY2Vzc1Rva2VuID0gYXdhaXQgRUFjY2Vzc1Rva2VuLmZpbmRPbmUoeyB3aGVyZTogeyByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbk9iamVjdC5yZWZyZXNoVG9rZW4gfX0pXG5cbiAgICBpZiAoIHRhcmdldEFjY2Vzc1Rva2VuID09PSBudWxsICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlcmUgaXMgbm8gc3VjaCBhIHJlZnJlc2ggdG9rZW4gdG8gYmUgcmV2b2tlZFwiKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIHJlZnJlc2ggdG9rZW4gY29sdW1uIHRvIG51bGxcbiAgICBjb25zdCBpc0RlbGV0ZWQgPSBhd2FpdCB0YXJnZXRBY2Nlc3NUb2tlbi51cGRhdGUoeyByZWZyZXNoVG9rZW46IG51bGwgfSlcbiAgICAudGhlbigoICApID0+IHtcbiAgICAgIC8vIHJldHVybiB0cnVlIGlmIHN1Y2Nlc3NcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKCggICkgPT4ge1xuICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIGVyclxuICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICB9KTtcblxuICAgIHJldHVybiBpc0RlbGV0ZWQ7XG4gIH1cbn07XG5cbi8vIGNyZWF0ZSBvYXV0aCBzZXJ2ZXJcbmNvbnN0IG9hdXRoID0gbmV3IE9BdXRoMlNlcnZlcih7XG4gIG1vZGVsOiBtb2RlbCxcbiAgYWNjZXNzVG9rZW5MaWZldGltZTogNCAqIDYwICogNjAsXG4gIC8vIGRpc2FibGUgY2xpZW50U2VjcmV0IGluIHJlcXVlc3RcbiAgcmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uOiB7cGFzc3dvcmQ6IGZhbHNlfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG9hdXRoO1xuIl19