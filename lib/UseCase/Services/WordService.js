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

var WordService = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function WordService(@(0, _inversify.inject)(_type.default.IWordRepository)
  wordRepository) {
    _classCallCheck(this, WordService);

    _defineProperty(this, "_wordRepository", void 0);

    this._wordRepository = wordRepository;
  }

  _createClass(WordService, [{
    key: "deleteWords",
    value: function () {
      var _deleteWords = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(words) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this._wordRepository.deleteWords(words));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteWords(_x) {
        return _deleteWords.apply(this, arguments);
      }

      return deleteWords;
    }()
  }]);

  return WordService;
}(), _temp)) || _class);
exports.default = WordService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Vc2VDYXNlL1NlcnZpY2VzL1dvcmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIldvcmRTZXJ2aWNlIiwiVFlQRVMiLCJJV29yZFJlcG9zaXRvcnkiLCJ3b3JkUmVwb3NpdG9yeSIsIl93b3JkUmVwb3NpdG9yeSIsIndvcmRzIiwiZGVsZXRlV29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxXLFdBRHBCLDRCOzs7QUFLQyx1QkFDRSxDQUFDLHVCQUFPQyxjQUFNQyxlQUFiO0FBQThCQyxFQUFBQSxjQURqQyxFQUVFO0FBQUE7O0FBQUE7O0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkQsY0FBdkI7QUFDRDs7Ozs7OzsrQ0FFeUJFLEs7Ozs7O2lEQUNqQixLQUFLRCxlQUFMLENBQXFCRSxXQUFyQixDQUFpQ0QsS0FBakMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBUWVBFUyBmcm9tICcuLi8uLi90eXBlJztcbmltcG9ydCBJV29yZFNlcnZpY2UgZnJvbSAnLi4vSVNlcnZpY2VzL0lXb3JkU2VydmljZSc7XG5pbXBvcnQgSVdvcmRSZXBvc2l0b3J5IGZyb20gJy4uL0lSZXBvc2l0b3JpZXMvSVdvcmRSZXBvc2l0b3J5JzsgXG5pbXBvcnQgSVdvcmQgZnJvbSAnLi4vLi4vRG9tYWluL1dvcmQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkU2VydmljZSBpbXBsZW1lbnRzIElXb3JkU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfd29yZFJlcG9zaXRvcnk6IElXb3JkUmVwb3NpdG9yeTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChUWVBFUy5JV29yZFJlcG9zaXRvcnkpIHdvcmRSZXBvc2l0b3J5OiBJV29yZFJlcG9zaXRvcnlcbiAgKSB7XG4gICAgdGhpcy5fd29yZFJlcG9zaXRvcnkgPSB3b3JkUmVwb3NpdG9yeTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVXb3Jkcyggd29yZHM6IHN0cmluZ1tdICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl93b3JkUmVwb3NpdG9yeS5kZWxldGVXb3Jkcyh3b3Jkcyk7XG4gIH1cbn1cblxuXG5cblxuIl19