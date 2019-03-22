"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var _inversify = require("inversify");

var _type = _interopRequireDefault(require("../../type"));

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var DictionaryController = (_dec = (0, _inversifyExpressUtils.controller)("/dictionary"), _dec2 = (0, _inversifyExpressUtils.httpGet)("/"), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function DictionaryController(@(0, _inversify.inject)(_type.default.IDictionaryService)
  dictionaryService) {
    _classCallCheck(this, DictionaryController);

    _defineProperty(this, "_dictionaryService", void 0);

    this._dictionaryService = dictionaryService;
  }

  _createClass(DictionaryController, [{
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var suggestionList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._dictionaryService.searchWords(req.query.keyWord);

              case 2:
                suggestionList = _context.sent;
                res.status(200).json({
                  suggestionList: suggestionList
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

  return DictionaryController;
}(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "post", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "post"), _class2.prototype)), _class2)) || _class);
exports.default = DictionaryController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2UvQ29udHJvbGxlcnMvRGljdGlvbmFyeUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiRGljdGlvbmFyeUNvbnRyb2xsZXIiLCJUWVBFUyIsIklEaWN0aW9uYXJ5U2VydmljZSIsImRpY3Rpb25hcnlTZXJ2aWNlIiwiX2RpY3Rpb25hcnlTZXJ2aWNlIiwicmVxIiwicmVzIiwibmV4dCIsInNlYXJjaFdvcmRzIiwicXVlcnkiLCJrZXlXb3JkIiwic3VnZ2VzdGlvbkxpc3QiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCQSxvQixXQURwQix1Q0FBVyxhQUFYLEMsVUFXRSxvQ0FBUSxHQUFSLEM7OztBQU5ELGdDQUNFLENBQUMsdUJBQU9DLGNBQU1DLGtCQUFiO0FBQWlDQyxFQUFBQSxpQkFEcEMsRUFFRTtBQUFBOztBQUFBOztBQUNBLFNBQUtDLGtCQUFMLEdBQTBCRCxpQkFBMUI7QUFDRDs7Ozs7OzsrQ0FHa0JFLEcsRUFBc0JDLEcsRUFBdUJDLEk7Ozs7Ozs7dUJBQ2pDLEtBQUtILGtCQUFMLENBQXdCSSxXQUF4QixDQUFvQ0gsR0FBRyxDQUFDSSxLQUFKLENBQVVDLE9BQTlDLEM7OztBQUF2QkMsZ0JBQUFBLGM7QUFDTkwsZ0JBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVGLGtCQUFBQSxjQUFjLEVBQUVBO0FBQWxCLGlCQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwR2V0IH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgVFlQRVMgZnJvbSAnLi4vLi4vdHlwZSc7XG5pbXBvcnQgSURpY3Rpb25hcnlTZXJ2aWNlIGZyb20gJy4uLy4uL1VzZUNhc2UvSVNlcnZpY2VzL0lEaWN0aW9uYXJ5U2VydmljZSc7XG5pbXBvcnQgb2F1dGggZnJvbSAnLi4vU2VydmljZXMvb2F1dGhVdGlsJztcblxuQGNvbnRyb2xsZXIoXCIvZGljdGlvbmFyeVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljdGlvbmFyeUNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xuXG4gIHByaXZhdGUgX2RpY3Rpb25hcnlTZXJ2aWNlOiBJRGljdGlvbmFyeVNlcnZpY2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVFlQRVMuSURpY3Rpb25hcnlTZXJ2aWNlKSBkaWN0aW9uYXJ5U2VydmljZTogSURpY3Rpb25hcnlTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX2RpY3Rpb25hcnlTZXJ2aWNlID0gZGljdGlvbmFyeVNlcnZpY2U7XG4gIH1cblxuICBAaHR0cEdldChcIi9cIilcbiAgcHJpdmF0ZSBhc3luYyBwb3N0KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbkxpc3QgPSBhd2FpdCB0aGlzLl9kaWN0aW9uYXJ5U2VydmljZS5zZWFyY2hXb3JkcyhyZXEucXVlcnkua2V5V29yZCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWdnZXN0aW9uTGlzdDogc3VnZ2VzdGlvbkxpc3QgfSkgIFxuICB9XG59XG5cblxuXG5cbiJdfQ==