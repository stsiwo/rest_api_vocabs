"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var _oauthUtil = _interopRequireDefault(require("../Services/oauthUtil"));

var _AccessToken = _interopRequireDefault(require("../../Framework/Infrastructure/DataEntities/AccessToken"));

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var OAuthController = (_dec = (0, _inversifyExpressUtils.controller)("/oauth"), _dec2 = (0, _inversifyExpressUtils.httpPost)("/token", _oauthUtil.default.token()), _dec3 = (0, _inversifyExpressUtils.httpPost)("/revoke"), _dec(_class = (_class2 =
/*#__PURE__*/
function () {
  function OAuthController() {
    _classCallCheck(this, OAuthController);
  }

  _createClass(OAuthController, [{
    key: "index",

    /**
     * issue new access token to post request
     *
     *   - do not implement inside this function since middleware (oauth.token()) returns new token to client
     **/
    value: function index(req, res, next) {} // if i can modify oauth.token() method, the best solution to set access token in cookie is to set it here in server side with httpOnly flag so client side never touch access token cookie which increase security
    // however, i don't know how to modify the oauth.token() function so install cookie libaray in react and set access token sent from here then save it in cookie with httpOnly flag (this is the second option)
    // since there is no way to access cookie with flag of 'httpOnly', have to use session or local storage ( this is the third option )
    // don't need to implement this function

    /**
     * revoke token  
     *   - delete the row to invalidate access tokena and refresh token 
     **/

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var deletedRow;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _AccessToken.default.destroy({
                  where: {
                    refreshToken: req.body.refreshToken
                  }
                });

              case 2:
                deletedRow = _context.sent;
                deletedRow ? res.status(200).json({
                  message: "completed"
                }) : res.status(409).json({
                  message: "not completed"
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function post(_x, _x2, _x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return OAuthController;
}(), (_applyDecoratedDescriptor(_class2.prototype, "index", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "post", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "post"), _class2.prototype)), _class2)) || _class);
exports.default = OAuthController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2UvQ29udHJvbGxlcnMvT0F1dGhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIk9BdXRoQ29udHJvbGxlciIsIm9hdXRoIiwidG9rZW4iLCJyZXEiLCJyZXMiLCJuZXh0IiwiQWNjZXNzVG9rZW4iLCJkZXN0cm95Iiwid2hlcmUiLCJyZWZyZXNoVG9rZW4iLCJib2R5IiwiZGVsZXRlZFJvdyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsZSxXQURwQix1Q0FBVyxRQUFYLEMsVUFRRSxxQ0FBUyxRQUFULEVBQW1CQyxtQkFBTUMsS0FBTixFQUFuQixDLFVBWUEscUNBQVMsU0FBVCxDOzs7Ozs7Ozs7O0FBakJEOzs7OzswQkFNY0MsRyxFQUFzQkMsRyxFQUF1QkMsSSxFQUFrQyxDQUs1RixDLENBSkM7QUFDQTtBQUNBO0FBQ0E7O0FBR0Y7Ozs7Ozs7Ozs7K0NBS21CRixHLEVBQXNCQyxHLEVBQXVCQyxJOzs7Ozs7O3VCQUVyQ0MscUJBQVlDLE9BQVosQ0FBb0I7QUFBRUMsa0JBQUFBLEtBQUssRUFBRTtBQUFFQyxvQkFBQUEsWUFBWSxFQUFFTixHQUFHLENBQUNPLElBQUosQ0FBU0Q7QUFBekI7QUFBVCxpQkFBcEIsQzs7O0FBQW5CRSxnQkFBQUEsVTtBQUNOQSxnQkFBQUEsVUFBVSxHQUFHUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxrQkFBQUEsT0FBTyxFQUFFO0FBQVgsaUJBQXJCLENBQUgsR0FBb0RWLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBckIsQ0FBOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgaW50ZXJmYWNlcywgY29udHJvbGxlciwgaHR0cFBvc3QgfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBvYXV0aCBmcm9tICcuLi9TZXJ2aWNlcy9vYXV0aFV0aWwnO1xuaW1wb3J0IEFjY2Vzc1Rva2VuIGZyb20gJy4uLy4uL0ZyYW1ld29yay9JbmZyYXN0cnVjdHVyZS9EYXRhRW50aXRpZXMvQWNjZXNzVG9rZW4nO1xuXG5AY29udHJvbGxlcihcIi9vYXV0aFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT0F1dGhDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcblxuICAvKipcbiAgICogaXNzdWUgbmV3IGFjY2VzcyB0b2tlbiB0byBwb3N0IHJlcXVlc3RcbiAgICpcbiAgICogICAtIGRvIG5vdCBpbXBsZW1lbnQgaW5zaWRlIHRoaXMgZnVuY3Rpb24gc2luY2UgbWlkZGxld2FyZSAob2F1dGgudG9rZW4oKSkgcmV0dXJucyBuZXcgdG9rZW4gdG8gY2xpZW50XG4gICAqKi9cbiAgQGh0dHBQb3N0KFwiL3Rva2VuXCIsIG9hdXRoLnRva2VuKCkpXG4gIHByaXZhdGUgaW5kZXgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkIHtcbiAgICAvLyBpZiBpIGNhbiBtb2RpZnkgb2F1dGgudG9rZW4oKSBtZXRob2QsIHRoZSBiZXN0IHNvbHV0aW9uIHRvIHNldCBhY2Nlc3MgdG9rZW4gaW4gY29va2llIGlzIHRvIHNldCBpdCBoZXJlIGluIHNlcnZlciBzaWRlIHdpdGggaHR0cE9ubHkgZmxhZyBzbyBjbGllbnQgc2lkZSBuZXZlciB0b3VjaCBhY2Nlc3MgdG9rZW4gY29va2llIHdoaWNoIGluY3JlYXNlIHNlY3VyaXR5XG4gICAgLy8gaG93ZXZlciwgaSBkb24ndCBrbm93IGhvdyB0byBtb2RpZnkgdGhlIG9hdXRoLnRva2VuKCkgZnVuY3Rpb24gc28gaW5zdGFsbCBjb29raWUgbGliYXJheSBpbiByZWFjdCBhbmQgc2V0IGFjY2VzcyB0b2tlbiBzZW50IGZyb20gaGVyZSB0aGVuIHNhdmUgaXQgaW4gY29va2llIHdpdGggaHR0cE9ubHkgZmxhZyAodGhpcyBpcyB0aGUgc2Vjb25kIG9wdGlvbilcbiAgICAvLyBzaW5jZSB0aGVyZSBpcyBubyB3YXkgdG8gYWNjZXNzIGNvb2tpZSB3aXRoIGZsYWcgb2YgJ2h0dHBPbmx5JywgaGF2ZSB0byB1c2Ugc2Vzc2lvbiBvciBsb2NhbCBzdG9yYWdlICggdGhpcyBpcyB0aGUgdGhpcmQgb3B0aW9uIClcbiAgICAvLyBkb24ndCBuZWVkIHRvIGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uXG4gIH1cblxuICAvKipcbiAgICogcmV2b2tlIHRva2VuICBcbiAgICogICAtIGRlbGV0ZSB0aGUgcm93IHRvIGludmFsaWRhdGUgYWNjZXNzIHRva2VuYSBhbmQgcmVmcmVzaCB0b2tlbiBcbiAgICoqL1xuICBAaHR0cFBvc3QoXCIvcmV2b2tlXCIpXG4gIHByaXZhdGUgYXN5bmMgcG9zdChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIGZpbmQgcmVmcmVzaCB0b2tlbiBhbmQgZGVsZXRlIHRoZSByb3dcbiAgICBjb25zdCBkZWxldGVkUm93ID0gYXdhaXQgQWNjZXNzVG9rZW4uZGVzdHJveSh7IHdoZXJlOiB7IHJlZnJlc2hUb2tlbjogcmVxLmJvZHkucmVmcmVzaFRva2VuIH19KVxuICAgIGRlbGV0ZWRSb3cgPyByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiY29tcGxldGVkXCIgfSkgOiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2U6IFwibm90IGNvbXBsZXRlZFwiIH0pO1xuICB9XG59XG5cblxuXG4iXX0=