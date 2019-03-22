"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var _inversify = require("inversify");

var _type = _interopRequireDefault(require("../../type"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _dec, _dec2, _dec3, _class, _class2, _temp;

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
var WordController = (_dec = (0, _inversifyExpressUtils.controller)("/word"), _dec2 = (0, _inversifyExpressUtils.httpDelete)("/"), _dec3 = (0, _inversifyExpressUtils.httpPost)("/image", upload.single('myFile')), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function WordController(@(0, _inversify.inject)(_type.default.IWordService)
  wordService) {
    _classCallCheck(this, WordController);

    _defineProperty(this, "_wordService", void 0);

    this._wordService = wordService;
  }

  _createClass(WordController, [{
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var isOk;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._wordService.deleteWords(req.body.id);

              case 2:
                isOk = _context.sent;
                isOk ? res.status(200).json({
                  isOk: true
                }) : res.status(409).json({
                  isOk: false
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _delete(_x, _x2, _x3) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res.status(200).json({
                  isOk: "success"
                }); //isOk ? res.status(200).json({ isOk: true }) : res.status(409).json({ isOk: false});

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function post(_x4, _x5, _x6) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return WordController;
}(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "delete", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "delete"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "post", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "post"), _class2.prototype)), _class2)) || _class);
exports.default = WordController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2UvQ29udHJvbGxlcnMvV29yZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsidXBsb2FkIiwiZGVzdCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiV29yZENvbnRyb2xsZXIiLCJzaW5nbGUiLCJUWVBFUyIsIklXb3JkU2VydmljZSIsIndvcmRTZXJ2aWNlIiwiX3dvcmRTZXJ2aWNlIiwicmVxIiwicmVzIiwibmV4dCIsImRlbGV0ZVdvcmRzIiwiYm9keSIsImlkIiwiaXNPayIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUcscUJBQU87QUFBRUMsRUFBQUEsSUFBSSxFQUFFQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsU0FBckI7QUFBUixDQUFQLENBQWY7SUFHcUJDLGMsV0FEcEIsdUNBQVcsT0FBWCxDLFVBV0UsdUNBQVcsR0FBWCxDLFVBTUEscUNBQVMsUUFBVCxFQUFtQkwsTUFBTSxDQUFDTSxNQUFQLENBQWMsUUFBZCxDQUFuQixDOzs7QUFaRCwwQkFDRSxDQUFDLHVCQUFPQyxjQUFNQyxZQUFiO0FBQTJCQyxFQUFBQSxXQUQ5QixFQUVFO0FBQUE7O0FBQUE7O0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkQsV0FBcEI7QUFDRDs7Ozs7OzsrQ0FHb0JFLEcsRUFBc0JDLEcsRUFBdUJDLEk7Ozs7Ozs7dUJBQzdDLEtBQUtILFlBQUwsQ0FBa0JJLFdBQWxCLENBQThCSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsRUFBdkMsQzs7O0FBQWJDLGdCQUFBQSxJO0FBQ05BLGdCQUFBQSxJQUFJLEdBQUdMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVGLGtCQUFBQSxJQUFJLEVBQUU7QUFBUixpQkFBckIsQ0FBSCxHQUEwQ0wsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUYsa0JBQUFBLElBQUksRUFBRTtBQUFSLGlCQUFyQixDQUE5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUlpQk4sRyxFQUFzQkMsRyxFQUF1QkMsSTs7Ozs7QUFDOURELGdCQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRixrQkFBQUEsSUFBSSxFQUFFO0FBQVIsaUJBQXJCLEUsQ0FDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpbnRlcmZhY2VzLCBjb250cm9sbGVyLCBodHRwUG9zdCwgaHR0cERlbGV0ZSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFRZUEVTIGZyb20gJy4uLy4uL3R5cGUnO1xuaW1wb3J0IElXb3JkU2VydmljZSBmcm9tICcuLi8uLi9Vc2VDYXNlL0lTZXJ2aWNlcy9JV29yZFNlcnZpY2UnO1xuaW1wb3J0IG9hdXRoIGZyb20gJy4uL1NlcnZpY2VzL29hdXRoVXRpbCc7XG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IGRlc3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcvaW1hZ2VzJykgfSk7XG5cbkBjb250cm9sbGVyKFwiL3dvcmRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcblxuICBwcml2YXRlIF93b3JkU2VydmljZTogSVdvcmRTZXJ2aWNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFRZUEVTLklXb3JkU2VydmljZSkgd29yZFNlcnZpY2U6IElXb3JkU2VydmljZVxuICApIHtcbiAgICB0aGlzLl93b3JkU2VydmljZSA9IHdvcmRTZXJ2aWNlO1xuICB9XG5cbiAgQGh0dHBEZWxldGUoXCIvXCIpXG4gIHByaXZhdGUgYXN5bmMgZGVsZXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaXNPayA9IGF3YWl0IHRoaXMuX3dvcmRTZXJ2aWNlLmRlbGV0ZVdvcmRzKHJlcS5ib2R5LmlkKTtcbiAgICBpc09rID8gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc09rOiB0cnVlIH0pIDogcmVzLnN0YXR1cyg0MDkpLmpzb24oeyBpc09rOiBmYWxzZX0pO1xuICB9XG5cbiAgQGh0dHBQb3N0KFwiL2ltYWdlXCIsIHVwbG9hZC5zaW5nbGUoJ215RmlsZScpKVxuICBwcml2YXRlIGFzeW5jIHBvc3QocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzT2s6IFwic3VjY2Vzc1wiIH0pO1xuICAgIC8vaXNPayA/IHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaXNPazogdHJ1ZSB9KSA6IHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgaXNPazogZmFsc2V9KTtcbiAgfVxufVxuXG5cblxuIl19