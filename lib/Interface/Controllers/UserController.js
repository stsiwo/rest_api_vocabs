"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var _inversify = require("inversify");

var _type = _interopRequireDefault(require("../../type"));

var _oauthUtil = _interopRequireDefault(require("../Services/oauthUtil"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var upload = (0, _multer.default)({
  dest: _path.default.join(__dirname, '/images')
});
var UserController = (_dec = (0, _inversifyExpressUtils.controller)("/user"), _dec2 = (0, _inversifyExpressUtils.httpGet)("/name"), _dec3 = (0, _inversifyExpressUtils.httpGet)("/email"), _dec4 = (0, _inversifyExpressUtils.httpGet)("/:username/word", _oauthUtil.default.authenticate()), _dec5 = (0, _inversifyExpressUtils.httpPost)("/:username/word", _oauthUtil.default.authenticate()
/*, upload.any()*/
), _dec6 = (0, _inversifyExpressUtils.httpDelete)("/:username/image", _oauthUtil.default.authenticate()
/*, upload.any()*/
), _dec7 = (0, _inversifyExpressUtils.httpPost)("/"), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function UserController(@(0, _inversify.inject)(_type.default.IUserService)
  userService) {
    _classCallCheck(this, UserController);

    _defineProperty(this, "_userService", void 0);

    this._userService = userService;
  }
  /**
   * request for check user name is unique when signup
   **/


  _createClass(UserController, [{
    key: "checkUserNameUnique",
    value: function () {
      var _checkUserNameUnique = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var isUnique;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._userService.checkUserNameUnique(req.query.name);

              case 2:
                isUnique = _context.sent;
                res.status(200).json({
                  isUnique: isUnique
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkUserNameUnique(_x, _x2, _x3) {
        return _checkUserNameUnique.apply(this, arguments);
      }

      return checkUserNameUnique;
    }()
    /**
     * request for check email already exist when signup
     **/

  }, {
    key: "checkEmailAlreadyExist",
    value: function () {
      var _checkEmailAlreadyExist = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var isAlreadyExists;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._userService.checkEmailAlreadyExist(req.query.email);

              case 2:
                isAlreadyExists = _context2.sent;
                res.status(200).json({
                  isAlreadyExists: isAlreadyExists
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkEmailAlreadyExist(_x4, _x5, _x6) {
        return _checkEmailAlreadyExist.apply(this, arguments);
      }

      return checkEmailAlreadyExist;
    }()
    /**
     * request for get all words of a specific user
     **/

  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res, next) {
        var words;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._userService.getWordsOfUser(req.params.username);

              case 2:
                words = _context3.sent;
                res.status(200).json({
                  words: words
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x7, _x8, _x9) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * request for upsert new or editted words of a specific user
     **/

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res, next) {
        var isOk;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._userService.upsertWordsOfUser(req.params.username, req.body);

              case 2:
                isOk = _context4.sent;
                isOk ? res.status(200).json({
                  message: "upsert is completed"
                }) : res.status(409).json({
                  message: "upsert is NOT completed"
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function post(_x10, _x11, _x12) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
    /**
     * request for upsert new or editted words of a specific user
     **/

  }, {
    key: "deleteImagesOfUser",
    value: function () {
      var _deleteImagesOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res, next) {
        var regex, storageDirectory, isOk;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(req.body); // extract image storage url of each def

                /**
                 * RegExp class is something different from usually regex
                 *  - esp, need double escape 
                 **/

                regex = new RegExp("(" + req.params.username + "\/.*)\\.\\w*$");
                storageDirectory = req.body.map(function (def) {
                  return def.image.match(regex)[1];
                });
                console.log(storageDirectory);
                _context5.next = 6;
                return this._userService.deleteImagesOfUser(req.params.username, storageDirectory);

              case 6:
                isOk = _context5.sent;
                isOk ? res.status(200).json({
                  message: "deletion is completed"
                }) : res.status(409).json({
                  message: "deletion is NOT completed"
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteImagesOfUser(_x13, _x14, _x15) {
        return _deleteImagesOfUser.apply(this, arguments);
      }

      return deleteImagesOfUser;
    }()
    /**
     * request for signup
     **/

  }, {
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(req, res, next) {
        var isSignUpCompleted;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log(JSON.parse(JSON.stringify(req.body)));
                _context6.next = 3;
                return this._userService.signUp(req.body.name, req.body.email, req.body.password);

              case 3:
                isSignUpCompleted = _context6.sent;
                isSignUpCompleted ? res.status(200).json({
                  isSignUpCompleted: true
                }) : res.status(409).json({
                  isSignUpCompleted: false
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function signUp(_x16, _x17, _x18) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);

  return UserController;
}(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "checkUserNameUnique", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "checkUserNameUnique"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "checkEmailAlreadyExist", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "checkEmailAlreadyExist"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "get", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "get"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "post", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "post"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deleteImagesOfUser", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteImagesOfUser"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "signUp", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "signUp"), _class2.prototype)), _class2)) || _class);
exports.default = UserController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2UvQ29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsidXBsb2FkIiwiZGVzdCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiVXNlckNvbnRyb2xsZXIiLCJvYXV0aCIsImF1dGhlbnRpY2F0ZSIsIlRZUEVTIiwiSVVzZXJTZXJ2aWNlIiwidXNlclNlcnZpY2UiLCJfdXNlclNlcnZpY2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY2hlY2tVc2VyTmFtZVVuaXF1ZSIsInF1ZXJ5IiwibmFtZSIsImlzVW5pcXVlIiwic3RhdHVzIiwianNvbiIsImNoZWNrRW1haWxBbHJlYWR5RXhpc3QiLCJlbWFpbCIsImlzQWxyZWFkeUV4aXN0cyIsImdldFdvcmRzT2ZVc2VyIiwicGFyYW1zIiwidXNlcm5hbWUiLCJ3b3JkcyIsInVwc2VydFdvcmRzT2ZVc2VyIiwiYm9keSIsImlzT2siLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInJlZ2V4IiwiUmVnRXhwIiwic3RvcmFnZURpcmVjdG9yeSIsIm1hcCIsImRlZiIsImltYWdlIiwibWF0Y2giLCJkZWxldGVJbWFnZXNPZlVzZXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzaWduVXAiLCJwYXNzd29yZCIsImlzU2lnblVwQ29tcGxldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHFCQUFPO0FBQUVDLEVBQUFBLElBQUksRUFBRUMsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFNBQXJCO0FBQVIsQ0FBUCxDQUFmO0lBR3FCQyxjLFdBRHBCLHVDQUFXLE9BQVgsQyxVQWNFLG9DQUFRLE9BQVIsQyxVQVNBLG9DQUFRLFFBQVIsQyxVQVNBLG9DQUFRLGlCQUFSLEVBQTJCQyxtQkFBTUMsWUFBTixFQUEzQixDLFVBU0Es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QUEwRFUsZ0JBQTFELEM7OztBQUFiTixnQkFBQUEsSTtBQUNOQSxnQkFBQUEsSUFBSSxHQUFHakIsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVcsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFyQixDQUFILEdBQWdFbEIsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVcsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFyQixDQUFwRTs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7Ozs7Ozs7Z0RBSXFCbkIsRyxFQUFzQkMsRyxFQUF1QkMsSTs7Ozs7O0FBQ2hFa0IsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVoQyxHQUFHLENBQUNpQixJQUFuQixDQUFYLENBQVo7O3VCQUNnQyxLQUFLbEIsWUFBTCxDQUFrQmtDLE1BQWxCLENBQXlCakMsR0FBRyxDQUFDaUIsSUFBSixDQUFTWixJQUFsQyxFQUF3Q0wsR0FBRyxDQUFDaUIsSUFBSixDQUFTUCxLQUFqRCxFQUF3RFYsR0FBRyxDQUFDaUIsSUFBSixDQUFTaUIsUUFBakUsQzs7O0FBQTFCQyxnQkFBQUEsaUI7QUFDTkEsZ0JBQUFBLGlCQUFpQixHQUFHbEMsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRTJCLGtCQUFBQSxpQkFBaUIsRUFBRTtBQUFyQixpQkFBckIsQ0FBSCxHQUF1RGxDLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUUyQixrQkFBQUEsaUJBQWlCLEVBQUU7QUFBckIsaUJBQXJCLENBQXhFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGludGVyZmFjZXMsIGNvbnRyb2xsZXIsIGh0dHBHZXQsIGh0dHBQb3N0LCBodHRwRGVsZXRlIH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgVFlQRVMgZnJvbSAnLi4vLi4vdHlwZSc7XG5pbXBvcnQgSVVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL1VzZUNhc2UvSVNlcnZpY2VzL0lVc2VyU2VydmljZSc7XG5pbXBvcnQgb2F1dGggZnJvbSAnLi4vU2VydmljZXMvb2F1dGhVdGlsJztcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgSURlZiB9IGZyb20gJy4uLy4uL0RvbWFpbi9EZWYnO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgZGVzdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy9pbWFnZXMnKSB9KTtcblxuQGNvbnRyb2xsZXIoXCIvdXNlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xuXG4gIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBJVXNlclNlcnZpY2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVFlQRVMuSVVzZXJTZXJ2aWNlKSB1c2VyU2VydmljZTogSVVzZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX3VzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWVzdCBmb3IgY2hlY2sgdXNlciBuYW1lIGlzIHVuaXF1ZSB3aGVuIHNpZ251cFxuICAgKiovXG4gIEBodHRwR2V0KFwiL25hbWVcIilcbiAgcHJpdmF0ZSBhc3luYyBjaGVja1VzZXJOYW1lVW5pcXVlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaXNVbmlxdWUgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5jaGVja1VzZXJOYW1lVW5pcXVlKHJlcS5xdWVyeS5uYW1lKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzVW5pcXVlOiBpc1VuaXF1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1ZXN0IGZvciBjaGVjayBlbWFpbCBhbHJlYWR5IGV4aXN0IHdoZW4gc2lnbnVwXG4gICAqKi9cbiAgQGh0dHBHZXQoXCIvZW1haWxcIilcbiAgcHJpdmF0ZSBhc3luYyBjaGVja0VtYWlsQWxyZWFkeUV4aXN0KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaXNBbHJlYWR5RXhpc3RzID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuY2hlY2tFbWFpbEFscmVhZHlFeGlzdChyZXEucXVlcnkuZW1haWwpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaXNBbHJlYWR5RXhpc3RzOiBpc0FscmVhZHlFeGlzdHMgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWVzdCBmb3IgZ2V0IGFsbCB3b3JkcyBvZiBhIHNwZWNpZmljIHVzZXJcbiAgICoqL1xuICBAaHR0cEdldChcIi86dXNlcm5hbWUvd29yZFwiLCBvYXV0aC5hdXRoZW50aWNhdGUoKSlcbiAgcHJpdmF0ZSBhc3luYyBnZXQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB3b3JkcyA9IGF3YWl0IHRoaXMuX3VzZXJTZXJ2aWNlLmdldFdvcmRzT2ZVc2VyKHJlcS5wYXJhbXMudXNlcm5hbWUpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgd29yZHM6IHdvcmRzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVlc3QgZm9yIHVwc2VydCBuZXcgb3IgZWRpdHRlZCB3b3JkcyBvZiBhIHNwZWNpZmljIHVzZXJcbiAgICoqL1xuICBAaHR0cFBvc3QoXCIvOnVzZXJuYW1lL3dvcmRcIiwgb2F1dGguYXV0aGVudGljYXRlKCkvKiwgdXBsb2FkLmFueSgpKi8pXG4gIHByaXZhdGUgYXN5bmMgcG9zdChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGlzT2sgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS51cHNlcnRXb3Jkc09mVXNlcihyZXEucGFyYW1zLnVzZXJuYW1lLCByZXEuYm9keSk7XG4gICAgaXNPayA/IHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJ1cHNlcnQgaXMgY29tcGxldGVkXCIgfSkgOiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2U6IFwidXBzZXJ0IGlzIE5PVCBjb21wbGV0ZWRcIiB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1ZXN0IGZvciB1cHNlcnQgbmV3IG9yIGVkaXR0ZWQgd29yZHMgb2YgYSBzcGVjaWZpYyB1c2VyXG4gICAqKi9cbiAgQGh0dHBEZWxldGUoXCIvOnVzZXJuYW1lL2ltYWdlXCIsIG9hdXRoLmF1dGhlbnRpY2F0ZSgpLyosIHVwbG9hZC5hbnkoKSovKVxuICBwcml2YXRlIGFzeW5jIGRlbGV0ZUltYWdlc09mVXNlcihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAvLyBleHRyYWN0IGltYWdlIHN0b3JhZ2UgdXJsIG9mIGVhY2ggZGVmXG4gICAgLyoqXG4gICAgICogUmVnRXhwIGNsYXNzIGlzIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSB1c3VhbGx5IHJlZ2V4XG4gICAgICogIC0gZXNwLCBuZWVkIGRvdWJsZSBlc2NhcGUgXG4gICAgICoqL1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIHJlcS5wYXJhbXMudXNlcm5hbWUgKyBcIlxcLy4qKVxcXFwuXFxcXHcqJFwiKTtcbiAgICBjb25zdCBzdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmdbXSA9IHJlcS5ib2R5Lm1hcCgoIGRlZjogSURlZiApID0+IGRlZi5pbWFnZS5tYXRjaChyZWdleClbMV0pO1xuXG4gICAgY29uc29sZS5sb2coc3RvcmFnZURpcmVjdG9yeSk7XG5cbiAgICBjb25zdCBpc09rID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuZGVsZXRlSW1hZ2VzT2ZVc2VyKHJlcS5wYXJhbXMudXNlcm5hbWUsIHN0b3JhZ2VEaXJlY3RvcnkpO1xuICAgIGlzT2sgPyByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiZGVsZXRpb24gaXMgY29tcGxldGVkXCIgfSkgOiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2U6IFwiZGVsZXRpb24gaXMgTk9UIGNvbXBsZXRlZFwiIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVlc3QgZm9yIHNpZ251cFxuICAgKiovXG4gIEBodHRwUG9zdChcIi9cIilcbiAgcHJpdmF0ZSBhc3luYyBzaWduVXAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSkpO1xuICAgIGNvbnN0IGlzU2lnblVwQ29tcGxldGVkID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2Uuc2lnblVwKHJlcS5ib2R5Lm5hbWUsIHJlcS5ib2R5LmVtYWlsLCByZXEuYm9keS5wYXNzd29yZCk7XG4gICAgaXNTaWduVXBDb21wbGV0ZWQgPyByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzU2lnblVwQ29tcGxldGVkOiB0cnVlIH0pIDogcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBpc1NpZ25VcENvbXBsZXRlZDogZmFsc2UgfSk7XG4gIH1cbn1cblxuXG4iXX0=