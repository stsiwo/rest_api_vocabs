"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var Dictionary = (
/**
 * Dictionary Entity
 **/
_dec = (0, _sequelizeTypescript.Column)(_sequelize.default.INTEGER), _dec2 = (0, _sequelizeTypescript.AllowNull)(false), _dec3 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), (0, _sequelizeTypescript.Table)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Model) {
  _inherits(Dictionary, _Model);

  function Dictionary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dictionary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dictionary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", _initializerWarningHelper(_descriptor, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "word", _initializerWarningHelper(_descriptor2, _assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  return Dictionary;
}(_sequelizeTypescript.Model), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_sequelizeTypescript.PrimaryKey, _sequelizeTypescript.AutoIncrement, _dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "word", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Dictionary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL0RpY3Rpb25hcnkudHMiXSwibmFtZXMiOlsiRGljdGlvbmFyeSIsIlNlcXVlbGl6ZSIsIklOVEVHRVIiLCJTVFJJTkciLCJUYWJsZSIsIk1vZGVsIiwiUHJpbWFyeUtleSIsIkF1dG9JbmNyZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNcUJBLFU7QUFKckI7OztPQVFHLGlDQUFPQyxtQkFBVUMsT0FBakIsQyxVQUdBLG9DQUFVLEtBQVYsQyxVQUNBLGlDQUFPRCxtQkFBVUUsTUFBakIsQyxNQVRGQywwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDdUNDLDBCLDhFQUVyQ0MsK0IsRUFDQUMsa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgQ29sdW1uLCBUYWJsZSwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBBdXRvSW5jcmVtZW50IH0gZnJvbSBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCI7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbi8qKlxuICogRGljdGlvbmFyeSBFbnRpdHlcbiAqKi9cbkBUYWJsZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljdGlvbmFyeSBleHRlbmRzIE1vZGVsPERpY3Rpb25hcnk+IHtcblxuICBAUHJpbWFyeUtleVxuICBAQXV0b0luY3JlbWVudFxuICBAQ29sdW1uKFNlcXVlbGl6ZS5JTlRFR0VSKVxuICBpZD86IG51bWJlcjtcblxuICBAQWxsb3dOdWxsKGZhbHNlKVxuICBAQ29sdW1uKFNlcXVlbGl6ZS5TVFJJTkcpXG4gIHdvcmQ6IHN0cmluZztcblxufVxuXG5cblxuIl19