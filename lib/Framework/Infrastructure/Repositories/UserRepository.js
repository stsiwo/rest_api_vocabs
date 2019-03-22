"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversify = require("inversify");

var _connection = _interopRequireDefault(require("../connection"));

var _User = _interopRequireDefault(require("../DataEntities/User"));

var _Def = _interopRequireDefault(require("../DataEntities/Def"));

var _Word = _interopRequireDefault(require("../DataEntities/Word"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserRepository = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);

    _defineProperty(this, "_user", void 0);

    this._user = _User.default;
  } //public constructor(
  //@inject(TYPES.IUserModel) user: IUserModel 
  //) {
  //this._user = user;
  //}


  _createClass(UserRepository, [{
    key: "getAll",
    value: function getAll() {
      return "user list is here";
    }
  }, {
    key: "getWordsOfUser",
    value: function () {
      var _getWordsOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userName) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._user.findOne({
                  where: {
                    name: userName
                  },
                  include: [{
                    model: _Word.default,
                    attributes: ['id', 'name', 'creationDate'],
                    include: [{
                      model: _Def.default,
                      attributes: ['id', 'def', 'image', 'wordId', 'posId']
                    }]
                  }]
                });

              case 2:
                user = _context.sent;
                return _context.abrupt("return", user.words);

              case 4:
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
    /**
     * bulk upsert words entry 
     *  - sequelize currently does not have "bulkUpsert" function, so implemented of my own
     *  - upsert and update function can't have "include" option to upsert/update association at once!!! so don't use together
     *
     **/

  }, {
    key: "upsertWordsOfUser",
    value: function () {
      var _upsertWordsOfUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(userName, words) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _connection.default.transaction(function (t) {
                  // find user
                  return _this._user.findOne({
                    where: {
                      name: userName
                    }
                  }) // assign user id to each word object
                  .then(function (user) {
                    words.forEach(function (word) {
                      return word.userId = user.id;
                    });
                  }) // delete target words first
                  .then(function () {
                    _Word.default.destroy({
                      where: {
                        id: words.map(function (word) {
                          return word.id;
                        })
                      }
                    });
                  }) // create words with the association (Def) 
                  .then(function () {
                    return Promise.all(words.map(function (word) {
                      return _Word.default.create(word, {
                        include: [_Def.default]
                      });
                    }));
                  }) // if success, sequelize automatically commit the transaction
                  .then(function () {
                    return true;
                  }) // if fail, sequelize automatically rollback the transaction
                  .catch(function (err) {
                    console.log(err);
                    return false;
                  });
                }));

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
    key: "checkUserNameUnique",
    value: function () {
      var _checkUserNameUnique = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(name) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this._user.findOne({
                  where: {
                    name: name
                  }
                }).then(function (user) {
                  return user === null;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function checkUserNameUnique(_x4) {
        return _checkUserNameUnique.apply(this, arguments);
      }

      return checkUserNameUnique;
    }()
  }, {
    key: "checkEmailAlreadyExist",
    value: function () {
      var _checkEmailAlreadyExist = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(email) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this._user.findOne({
                  where: {
                    email: email
                  }
                }).then(function (user) {
                  return user !== null;
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function checkEmailAlreadyExist(_x5) {
        return _checkEmailAlreadyExist.apply(this, arguments);
      }

      return checkEmailAlreadyExist;
    }()
  }, {
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(name, email, password) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this._user.create({
                  name: name,
                  email: email,
                  password: password
                }).then(function () {
                  return true;
                }).catch(function () {
                  return false;
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function signUp(_x6, _x7, _x8) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);

  return UserRepository;
}(), _temp)) || _class);
exports.default = UserRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvUmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIlVzZXJSZXBvc2l0b3J5IiwiX3VzZXIiLCJVc2VyIiwidXNlck5hbWUiLCJmaW5kT25lIiwid2hlcmUiLCJuYW1lIiwiaW5jbHVkZSIsIm1vZGVsIiwiV29yZCIsImF0dHJpYnV0ZXMiLCJEZWYiLCJ1c2VyIiwid29yZHMiLCJzZXF1ZWxpemUiLCJ0cmFuc2FjdGlvbiIsInQiLCJ0aGVuIiwiZm9yRWFjaCIsIndvcmQiLCJ1c2VySWQiLCJpZCIsImRlc3Ryb3kiLCJtYXAiLCJQcm9taXNlIiwiYWxsIiwiY3JlYXRlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcUJBLGMsV0FEcEIsNEI7OztBQUtDLDRCQUFxQjtBQUFBOztBQUFBOztBQUNuQixTQUFLQyxLQUFMLEdBQWFDLGFBQWI7QUFDRCxHLENBQ0Q7QUFDRTtBQUNGO0FBQ0U7QUFDRjs7Ozs7NkJBRXdCO0FBQ3RCLGFBQU8sbUJBQVA7QUFDRDs7Ozs7OytDQUUyQkMsUTs7Ozs7Ozt1QkFHUCxLQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUI7QUFDcENDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRUMsb0JBQUFBLElBQUksRUFBRUg7QUFBUixtQkFENkI7QUFFcENJLGtCQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFQyxvQkFBQUEsS0FBSyxFQUFFQyxhQURUO0FBRUVDLG9CQUFBQSxVQUFVLEVBQUUsQ0FBRSxJQUFGLEVBQVEsTUFBUixFQUFnQixjQUFoQixDQUZkO0FBR0VILG9CQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFQyxzQkFBQUEsS0FBSyxFQUFFRyxZQURUO0FBRUVELHNCQUFBQSxV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QSx5QkFBTSxLQUFOO0FBQUEsaUJBRG5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IElVc2VyUmVwb3NpdG9yeSBmcm9tICcuLi8uLi8uLi9Vc2VDYXNlL0lSZXBvc2l0b3JpZXMvSVVzZXJSZXBvc2l0b3J5JztcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnLi4vY29ubmVjdGlvbic7XG5pbXBvcnQgVFlQRVMgZnJvbSAnLi4vLi4vLi4vdHlwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9EYXRhRW50aXRpZXMvVXNlcidcbmltcG9ydCBEZWYgZnJvbSAnLi4vRGF0YUVudGl0aWVzL0RlZic7XG5pbXBvcnQgV29yZCBmcm9tICcuLi9EYXRhRW50aXRpZXMvV29yZCc7XG5pbXBvcnQgSVdvcmQgZnJvbSAnLi4vLi4vLi4vRG9tYWluL1dvcmQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElVc2VyUmVwb3NpdG9yeSB7XG5cbiAgcHJpdmF0ZSBfdXNlcjogdHlwZW9mIFVzZXI7IFxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl91c2VyID0gVXNlcjtcbiAgfVxuICAvL3B1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAvL0BpbmplY3QoVFlQRVMuSVVzZXJNb2RlbCkgdXNlcjogSVVzZXJNb2RlbCBcbiAgLy8pIHtcbiAgICAvL3RoaXMuX3VzZXIgPSB1c2VyO1xuICAvL31cblxuICBwdWJsaWMgZ2V0QWxsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwidXNlciBsaXN0IGlzIGhlcmVcIjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRXb3Jkc09mVXNlcih1c2VyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAvLyBcInRoZW5cIiBmdW5jdGlvbiBtYWtlIGNvZGVzIGRpc2d1c3RpbmcsIGJldHRlciB0byB1c2UgYXdhaXQgYW5kIGFzeW5jIFxuICAgIC8vIGdldCB1c2VyIGNvbnRhaW5zIGl0cyBhc3NvY2lhdGlvbiAod29yZHMpXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuX3VzZXIuZmluZE9uZSh7IFxuICAgICAgd2hlcmU6IHsgbmFtZTogdXNlck5hbWUgfSwgXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgbW9kZWw6IFdvcmQsIFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFsgJ2lkJywgJ25hbWUnLCAnY3JlYXRpb25EYXRlJyBdLFxuICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgIG1vZGVsOiBEZWYsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsgJ2lkJywgJ2RlZicsICdpbWFnZScsICd3b3JkSWQnLCAncG9zSWQnIF0sXG4gICAgICAgICAgICB9IFxuICAgICAgICAgIF0gXG4gICAgICAgIH0gXG4gICAgICBdLFxuICAgIH0pXG5cbiAgICAvLyByZXR1cm4gb25seSB3b3Jkc1xuICAgIHJldHVybiB1c2VyLndvcmRzO1xuICB9XG5cbiAgLyoqXG4gICAqIGJ1bGsgdXBzZXJ0IHdvcmRzIGVudHJ5IFxuICAgKiAgLSBzZXF1ZWxpemUgY3VycmVudGx5IGRvZXMgbm90IGhhdmUgXCJidWxrVXBzZXJ0XCIgZnVuY3Rpb24sIHNvIGltcGxlbWVudGVkIG9mIG15IG93blxuICAgKiAgLSB1cHNlcnQgYW5kIHVwZGF0ZSBmdW5jdGlvbiBjYW4ndCBoYXZlIFwiaW5jbHVkZVwiIG9wdGlvbiB0byB1cHNlcnQvdXBkYXRlIGFzc29jaWF0aW9uIGF0IG9uY2UhISEgc28gZG9uJ3QgdXNlIHRvZ2V0aGVyXG4gICAqXG4gICAqKi9cbiAgcHVibGljIGFzeW5jIHVwc2VydFdvcmRzT2ZVc2VyKHVzZXJOYW1lOiBzdHJpbmcsIHdvcmRzOiBJV29yZFtdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gdHJhbnNhY3Rpb24gc3RhcnRzXG4gICAgcmV0dXJuIHNlcXVlbGl6ZS50cmFuc2FjdGlvbigoIHQgKSA9PiB7XG4gICAgICAvLyBmaW5kIHVzZXJcbiAgICAgIHJldHVybiB0aGlzLl91c2VyLmZpbmRPbmUoeyB3aGVyZTogeyBuYW1lOiB1c2VyTmFtZSB9fSlcbiAgICAgICAgLy8gYXNzaWduIHVzZXIgaWQgdG8gZWFjaCB3b3JkIG9iamVjdFxuICAgICAgICAudGhlbigoIHVzZXIgKSA9PiB7IFxuICAgICAgICAgIHdvcmRzLmZvckVhY2goKCB3b3JkICkgPT4gd29yZC51c2VySWQgPSB1c2VyLmlkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZGVsZXRlIHRhcmdldCB3b3JkcyBmaXJzdFxuICAgICAgICAudGhlbigoKSA9PiB7IFxuICAgICAgICAgIFdvcmQuZGVzdHJveSh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZDogd29yZHMubWFwKCggd29yZCApID0+IHdvcmQuaWQpIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBjcmVhdGUgd29yZHMgd2l0aCB0aGUgYXNzb2NpYXRpb24gKERlZikgXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoIHdvcmRzLm1hcCgoIHdvcmQgKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gV29yZC5jcmVhdGUod29yZCwge1xuICAgICAgICAgICAgICBpbmNsdWRlOiBbIERlZiBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pKSBcbiAgICAgICAgfSlcbiAgICAgICAgLy8gaWYgc3VjY2Vzcywgc2VxdWVsaXplIGF1dG9tYXRpY2FsbHkgY29tbWl0IHRoZSB0cmFuc2FjdGlvblxuICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAvLyBpZiBmYWlsLCBzZXF1ZWxpemUgYXV0b21hdGljYWxseSByb2xsYmFjayB0aGUgdHJhbnNhY3Rpb25cbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgcmV0dXJuIGZhbHNlIH0pO1xuICAgIH0pOyBcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjaGVja1VzZXJOYW1lVW5pcXVlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl91c2VyLmZpbmRPbmUoeyB3aGVyZTogeyBuYW1lOiBuYW1lIH19KVxuICAgICAgLnRoZW4oKCB1c2VyICkgPT4gdXNlciA9PT0gbnVsbClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjaGVja0VtYWlsQWxyZWFkeUV4aXN0KGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fdXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH19KVxuICAgICAgLnRoZW4oKCB1c2VyICkgPT4gdXNlciAhPT0gbnVsbClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduVXAobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXIuY3JlYXRlKHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKCgpID0+IHRydWUpLmNhdGNoKCgpID0+IGZhbHNlKTtcbiAgfVxufVxuIl19