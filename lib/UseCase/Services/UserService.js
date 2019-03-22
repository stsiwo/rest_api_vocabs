"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversify = require("inversify");

var _type = _interopRequireDefault(require("../../type"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserService = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function UserService(@(0, _inversify.inject)(_type.default.IUserRepository)
  userRepository, @(0, _inversify.inject)(_type.default.ICloudinaryAPI)
  cloudinaryApi) {
    _classCallCheck(this, UserService);

    _defineProperty(this, "_userRepository", void 0);

    _defineProperty(this, "_cloudinaryApi", void 0);

    this._userRepository = userRepository;
    this._cloudinaryApi = cloudinaryApi;
  }

  _createClass(UserService, [{
    key: "getUsers",
    value: function getUsers() {
      return this._userRepository.getAll();
    }
  }, {
    key: "getWordsOfUser",
    value: function () {
      var _getWordsOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userName) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this._userRepository.getWordsOfUser(userName));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWordsOfUser(_x) {
        return _getWordsOfUser.apply(this, arguments);
      }

      return getWordsOfUser;
    }()
  }, {
    key: "upsertWordsOfUser",
    value: function () {
      var _upsertWordsOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(userName, words) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this._userRepository.upsertWordsOfUser(userName, words));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function upsertWordsOfUser(_x2, _x3) {
        return _upsertWordsOfUser.apply(this, arguments);
      }

      return upsertWordsOfUser;
    }()
  }, {
    key: "deleteImagesOfUser",
    value: function () {
      var _deleteImagesOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(userName, urls) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this._cloudinaryApi.deleteImagesOfUser(userName, urls));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteImagesOfUser(_x4, _x5) {
        return _deleteImagesOfUser.apply(this, arguments);
      }

      return deleteImagesOfUser;
    }()
  }, {
    key: "checkUserNameUnique",
    value: function () {
      var _checkUserNameUnique = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(name) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this._userRepository.checkUserNameUnique(name));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function checkUserNameUnique(_x6) {
        return _checkUserNameUnique.apply(this, arguments);
      }

      return checkUserNameUnique;
    }()
  }, {
    key: "checkEmailAlreadyExist",
    value: function () {
      var _checkEmailAlreadyExist = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(email) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this._userRepository.checkEmailAlreadyExist(email));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function checkEmailAlreadyExist(_x7) {
        return _checkEmailAlreadyExist.apply(this, arguments);
      }

      return checkEmailAlreadyExist;
    }()
  }, {
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(name, email, password) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this._userRepository.signUp(name, email, password));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function signUp(_x8, _x9, _x10) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);

  return UserService;
}(), _temp)) || _class);
exports.default = UserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Vc2VDYXNlL1NlcnZpY2VzL1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlVzZXJTZXJ2aWNlIiwiVFlQRVMiLCJJVXNlclJlcG9zaXRvcnkiLCJ1c2VyUmVwb3NpdG9yeSIsIklDbG91ZGluYXJ5QVBJIiwiY2xvdWRpbmFyeUFwaSIsIl91c2VyUmVwb3NpdG9yeSIsIl9jbG91ZGluYXJ5QXBpIiwiZ2V0QWxsIiwidXNlck5hbWUiLCJnZXRXb3Jkc09mVXNlciIsIndvcmRzIiwidXBzZXJ0V29yZHNPZlVzZXIiLCJ1cmxzIiwiZGVsZXRlSW1hZ2VzT2ZVc2VyIiwibmFtZSIsImNoZWNrVXNlck5hbWVVbmlxdWUiLCJlbWFpbCIsImNoZWNrRW1haWxBbHJlYWR5RXhpc3QiLCJwYXNzd29yZCIsInNpZ25VcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUJBLFcsV0FEcEIsNEI7OztBQU9DLHVCQUNFLENBQUMsdUJBQU9DLGNBQU1DLGVBQWI7QUFBOEJDLEVBQUFBLGNBRGpDLEVBRUUsQ0FBQyx1QkFBT0YsY0FBTUcsY0FBYjtBQUE2QkMsRUFBQUEsYUFGaEMsRUFHRTtBQUFBOztBQUFBOztBQUFBOztBQUNBLFNBQUtDLGVBQUwsR0FBdUJILGNBQXZCO0FBQ0EsU0FBS0ksY0FBTCxHQUFzQkYsYUFBdEI7QUFDRDs7OzsrQkFFeUI7QUFDeEIsYUFBTyxLQUFLQyxlQUFMLENBQXFCRSxNQUFyQixFQUFQO0FBQ0Q7Ozs7OzsrQ0FFMkJDLFE7Ozs7O2lEQUNuQixLQUFLSCxlQUFMLENBQXFCSSxjQUFyQixDQUFvQ0QsUUFBcEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUdzQkEsUSxFQUFrQkUsSzs7Ozs7a0RBQ3hDLEtBQUtMLGVBQUwsQ0FBcUJNLGlCQUFyQixDQUF1Q0gsUUFBdkMsRUFBaURFLEtBQWpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFHdUJGLFEsRUFBa0JJLEk7Ozs7O2tEQUN6QyxLQUFLTixjQUFMLENBQW9CTyxrQkFBcEIsQ0FBdUNMLFFBQXZDLEVBQWlESSxJQUFqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBR3dCRSxJOzs7OztrREFDeEIsS0FBS1QsZUFBTCxDQUFxQlUsbUJBQXJCLENBQXlDRCxJQUF6QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBRzJCRSxLOzs7OztrREFDM0IsS0FBS1gsZUFBTCxDQUFxQlksc0JBQXJCLENBQTRDRCxLQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBR1dGLEksRUFBY0UsSyxFQUFlRSxROzs7OztrREFDeEMsS0FBS2IsZUFBTCxDQUFxQmMsTUFBckIsQ0FBNEJMLElBQTVCLEVBQWtDRSxLQUFsQyxFQUF5Q0UsUUFBekMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBUWVBFUyBmcm9tICcuLi8uLi90eXBlJztcbmltcG9ydCBJVXNlclNlcnZpY2UgZnJvbSAnLi4vSVNlcnZpY2VzL0lVc2VyU2VydmljZSc7XG5pbXBvcnQgSVVzZXJSZXBvc2l0b3J5IGZyb20gJy4uL0lSZXBvc2l0b3JpZXMvSVVzZXJSZXBvc2l0b3J5JzsgXG5pbXBvcnQgSUNsb3VkaW5hcnlBUEkgZnJvbSAnLi4vSUFQSXMvSUNsb3VkaW5hcnlBUEknOyBcbmltcG9ydCBJV29yZCBmcm9tICcuLi8uLi9Eb21haW4vV29yZCc7XG5cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2UgaW1wbGVtZW50cyBJVXNlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3VzZXJSZXBvc2l0b3J5OiBJVXNlclJlcG9zaXRvcnk7XG5cbiAgcHJpdmF0ZSBfY2xvdWRpbmFyeUFwaTogSUNsb3VkaW5hcnlBUEk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVFlQRVMuSVVzZXJSZXBvc2l0b3J5KSB1c2VyUmVwb3NpdG9yeTogSVVzZXJSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoVFlQRVMuSUNsb3VkaW5hcnlBUEkpIGNsb3VkaW5hcnlBcGk6IElDbG91ZGluYXJ5QVBJXG4gICkge1xuICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5ID0gdXNlclJlcG9zaXRvcnk7XG4gICAgdGhpcy5fY2xvdWRpbmFyeUFwaSA9IGNsb3VkaW5hcnlBcGk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXNlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclJlcG9zaXRvcnkuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0V29yZHNPZlVzZXIodXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJSZXBvc2l0b3J5LmdldFdvcmRzT2ZVc2VyKHVzZXJOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cHNlcnRXb3Jkc09mVXNlcih1c2VyTmFtZTogc3RyaW5nLCB3b3JkczogSVdvcmRbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl91c2VyUmVwb3NpdG9yeS51cHNlcnRXb3Jkc09mVXNlcih1c2VyTmFtZSwgd29yZHMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZUltYWdlc09mVXNlcih1c2VyTmFtZTogc3RyaW5nLCB1cmxzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGluYXJ5QXBpLmRlbGV0ZUltYWdlc09mVXNlcih1c2VyTmFtZSwgdXJscyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2hlY2tVc2VyTmFtZVVuaXF1ZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclJlcG9zaXRvcnkuY2hlY2tVc2VyTmFtZVVuaXF1ZShuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjaGVja0VtYWlsQWxyZWFkeUV4aXN0KGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclJlcG9zaXRvcnkuY2hlY2tFbWFpbEFscmVhZHlFeGlzdChlbWFpbCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnblVwKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl91c2VyUmVwb3NpdG9yeS5zaWduVXAobmFtZSwgZW1haWwsIHBhc3N3b3JkKTtcbiAgfVxufVxuXG5cblxuIl19