"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversify = require("inversify");

var _Dictionary = _interopRequireDefault(require("../DataEntities/Dictionary"));

var _connection = _interopRequireDefault(require("../connection"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DictionaryRepository = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function DictionaryRepository() {
    _classCallCheck(this, DictionaryRepository);

    _defineProperty(this, "_dictionary", void 0);

    this._dictionary = _Dictionary.default;
  }

  _createClass(DictionaryRepository, [{
    key: "searchWords",
    value: function () {
      var _searchWords = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(keyWord) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _connection.default.query("SELECT * FROM \"Dictionary\" WHERE levenshtein(word, '".concat(keyWord, "') <= 3 ORDER BY levenshtein(word, '").concat(keyWord, "') LIMIT 5"), {
                  type: _connection.default.QueryTypes.SELECT
                }).catch(function (err) {
                  console.log(err);
                  return {};
                }));

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

  return DictionaryRepository;
}(), _temp)) || _class);
exports.default = DictionaryRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvUmVwb3NpdG9yaWVzL0RpY3Rpb25hcnlSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIkRpY3Rpb25hcnlSZXBvc2l0b3J5IiwiX2RpY3Rpb25hcnkiLCJEaWN0aW9uYXJ5Iiwia2V5V29yZCIsInNlcXVlbGl6ZSIsInF1ZXJ5IiwidHlwZSIsIlF1ZXJ5VHlwZXMiLCJTRUxFQ1QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxvQixXQURwQiw0Qjs7O0FBS0Msa0NBQXFCO0FBQUE7O0FBQUE7O0FBQ25CLFNBQUtDLFdBQUwsR0FBbUJDLG1CQUFuQjtBQUNEOzs7Ozs7OytDQUV5QkMsTzs7Ozs7aURBTWpCQyxvQkFBVUMsS0FBVixpRUFBd0VGLE9BQXhFLGlEQUF3SEEsT0FBeEgsaUJBQThJO0FBQUVHLGtCQUFBQSxJQUFJLEVBQUVGLG9CQUFVRyxVQUFWLENBQXFCQztBQUE3QixpQkFBOUksRUFDTkMsS0FETSxDQUNBLFVBQUNDLEdBQUQsRUFBZ0I7QUFDckJDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLHlCQUFPLEVBQVA7QUFDRCxpQkFKTSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBJRGljdGlvbmFyeVJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vLi4vVXNlQ2FzZS9JUmVwb3NpdG9yaWVzL0lEaWN0aW9uYXJ5UmVwb3NpdG9yeSc7XG5pbXBvcnQgVFlQRVMgZnJvbSAnLi4vLi4vLi4vdHlwZSc7XG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tICcuLi9EYXRhRW50aXRpZXMvRGljdGlvbmFyeSdcbi8vaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICcuLi9jb25uZWN0aW9uJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljdGlvbmFyeVJlcG9zaXRvcnkgaW1wbGVtZW50cyBJRGljdGlvbmFyeVJlcG9zaXRvcnkge1xuXG4gIHByaXZhdGUgX2RpY3Rpb25hcnk6IHR5cGVvZiBEaWN0aW9uYXJ5OyBcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZGljdGlvbmFyeSA9IERpY3Rpb25hcnk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VhcmNoV29yZHMoIGtleVdvcmQ6IHN0cmluZyApOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIC8qKlxuICAgICAqIGNhbid0IHVzZSAkbGlrZTogJWtleSVcbiAgICAgKiBJIGRvbid0IGtub3cgd2h5XG4gICAgICoqL1xuICAgIC8vcmV0dXJuIHRoaXMuX2RpY3Rpb25hcnkuZmluZEFsbCh7IGxpbWl0OiA1LCB3aGVyZTogeyB3b3JkOiB7IFtTZXF1ZWxpemUuT3AubGlrZV06ICclJyArIGtleVdvcmQgKyBcIiVcIiB9fSwgcmF3OiB0cnVlfSlcbiAgICByZXR1cm4gc2VxdWVsaXplLnF1ZXJ5KGBTRUxFQ1QgKiBGUk9NIFwiRGljdGlvbmFyeVwiIFdIRVJFIGxldmVuc2h0ZWluKHdvcmQsICckeyBrZXlXb3JkIH0nKSA8PSAzIE9SREVSIEJZIGxldmVuc2h0ZWluKHdvcmQsICckeyBrZXlXb3JkIH0nKSBMSU1JVCA1YCwgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5TRUxFQ1R9KSBcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHsgXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH0pO1xuICB9XG59XG5cblxuIl19