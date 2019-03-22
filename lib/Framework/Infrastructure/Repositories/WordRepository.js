"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversify = require("inversify");

var _Word = _interopRequireDefault(require("../DataEntities/Word"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WordRepository = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  function WordRepository() {
    _classCallCheck(this, WordRepository);

    _defineProperty(this, "_word", void 0);

    this._word = _Word.default;
  }

  _createClass(WordRepository, [{
    key: "deleteWords",
    value: function () {
      var _deleteWords = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(words) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this._word.destroy({
                  where: {
                    id: words
                  }
                }).then(function () {
                  return true;
                }).catch(function (err) {
                  console.log(err);
                  return false;
                }));

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

  return WordRepository;
}(), _temp)) || _class);
exports.default = WordRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvUmVwb3NpdG9yaWVzL1dvcmRSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIldvcmRSZXBvc2l0b3J5IiwiX3dvcmQiLCJXb3JkIiwid29yZHMiLCJkZXN0cm95Iiwid2hlcmUiLCJpZCIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxjLFdBRHBCLDRCOzs7QUFLQyw0QkFBcUI7QUFBQTs7QUFBQTs7QUFDbkIsU0FBS0MsS0FBTCxHQUFhQyxhQUFiO0FBQ0Q7Ozs7Ozs7K0NBRXlCQyxLOzs7OztpREFDakIsS0FBS0YsS0FBTCxDQUFXRyxPQUFYLENBQW1CO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRUg7QUFBTjtBQUFULGlCQUFuQixFQUNOSSxJQURNLENBQ0Q7QUFBQSx5QkFBTSxJQUFOO0FBQUEsaUJBREMsRUFFTkMsS0FGTSxDQUVBLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSx5QkFBTyxLQUFQO0FBQ0QsaUJBTE0sQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgSVdvcmRSZXBvc2l0b3J5IGZyb20gJy4uLy4uLy4uL1VzZUNhc2UvSVJlcG9zaXRvcmllcy9JV29yZFJlcG9zaXRvcnknO1xuaW1wb3J0IFRZUEVTIGZyb20gJy4uLy4uLy4uL3R5cGUnO1xuaW1wb3J0IFdvcmQgZnJvbSAnLi4vRGF0YUVudGl0aWVzL1dvcmQnXG5pbXBvcnQgRGVmIGZyb20gJy4uL0RhdGFFbnRpdGllcy9EZWYnXG5pbXBvcnQgSVdvcmQgZnJvbSAnLi4vLi4vLi4vRG9tYWluL1dvcmQnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICcuLi9jb25uZWN0aW9uJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZFJlcG9zaXRvcnkgaW1wbGVtZW50cyBJV29yZFJlcG9zaXRvcnkge1xuXG4gIHByaXZhdGUgX3dvcmQ6IHR5cGVvZiBXb3JkOyBcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fd29yZCA9IFdvcmQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlV29yZHMoIHdvcmRzOiBzdHJpbmdbXSApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fd29yZC5kZXN0cm95KHsgd2hlcmU6IHsgaWQ6IHdvcmRzIH19KVxuICAgIC50aGVuKCgpID0+IHRydWUpXG4gICAgLmNhdGNoKChlcnIpID0+IHsgXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cblxuIl19