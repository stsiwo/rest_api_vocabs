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

var DictionaryService = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function DictionaryService(@(0, _inversify.inject)(_type.default.IDictionaryRepository)
  dictionaryRepository) {
    _classCallCheck(this, DictionaryService);

    _defineProperty(this, "_dictionaryRepository", void 0);

    this._dictionaryRepository = dictionaryRepository;
  }

  _createClass(DictionaryService, [{
    key: "searchWords",
    value: function () {
      var _searchWords = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(keyWord) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this._dictionaryRepository.searchWords(keyWord));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function searchWords(_x) {
        return _searchWords.apply(this, arguments);
      }

      return searchWords;
    }()
  }]);

  return DictionaryService;
}(), _temp)) || _class);
exports.default = DictionaryService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Vc2VDYXNlL1NlcnZpY2VzL0RpY3Rpb25hcnlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkRpY3Rpb25hcnlTZXJ2aWNlIiwiVFlQRVMiLCJJRGljdGlvbmFyeVJlcG9zaXRvcnkiLCJkaWN0aW9uYXJ5UmVwb3NpdG9yeSIsIl9kaWN0aW9uYXJ5UmVwb3NpdG9yeSIsImtleVdvcmQiLCJzZWFyY2hXb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLcUJBLGlCLFdBRHBCLDRCOzs7QUFLQyw2QkFDRSxDQUFDLHVCQUFPQyxjQUFNQyxxQkFBYjtBQUFvQ0MsRUFBQUEsb0JBRHZDLEVBRUU7QUFBQTs7QUFBQTs7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QkQsb0JBQTdCO0FBQ0Q7Ozs7Ozs7K0NBRXlCRSxPOzs7OztpREFDakIsS0FBS0QscUJBQUwsQ0FBMkJFLFdBQTNCLENBQXVDRCxPQUF2QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFRZUEVTIGZyb20gJy4uLy4uL3R5cGUnO1xuaW1wb3J0IElEaWN0aW9uYXJ5U2VydmljZSBmcm9tICcuLi9JU2VydmljZXMvSURpY3Rpb25hcnlTZXJ2aWNlJztcbmltcG9ydCBJRGljdGlvbmFyeVJlcG9zaXRvcnkgZnJvbSAnLi4vSVJlcG9zaXRvcmllcy9JRGljdGlvbmFyeVJlcG9zaXRvcnknOyBcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljdGlvbmFyeVNlcnZpY2UgaW1wbGVtZW50cyBJRGljdGlvbmFyeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2RpY3Rpb25hcnlSZXBvc2l0b3J5OiBJRGljdGlvbmFyeVJlcG9zaXRvcnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVFlQRVMuSURpY3Rpb25hcnlSZXBvc2l0b3J5KSBkaWN0aW9uYXJ5UmVwb3NpdG9yeTogSURpY3Rpb25hcnlSZXBvc2l0b3J5XG4gICkge1xuICAgIHRoaXMuX2RpY3Rpb25hcnlSZXBvc2l0b3J5ID0gZGljdGlvbmFyeVJlcG9zaXRvcnk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VhcmNoV29yZHMoIGtleVdvcmQ6IHN0cmluZyApOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9kaWN0aW9uYXJ5UmVwb3NpdG9yeS5zZWFyY2hXb3JkcyhrZXlXb3JkKTtcbiAgfVxufVxuXG5cblxuXG5cbiJdfQ==