"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _User = _interopRequireDefault(require("./User"));

var _Def = _interopRequireDefault(require("./Def"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

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

var Word = (
/**
 * Word Entity
 **/
_dec = (0, _sequelizeTypescript.IsUUID)(4), _dec2 = (0, _sequelizeTypescript.Default)(_sequelize.default.UUIDV4), _dec3 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec4 = (0, _sequelizeTypescript.AllowNull)(false), _dec5 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec6 = (0, _sequelizeTypescript.ForeignKey)(function () {
  return _User.default;
}), _dec7 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec8 = (0, _sequelizeTypescript.BelongsTo)(function () {
  return _User.default;
}, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
}), _dec9 = (0, _sequelizeTypescript.HasMany)(function () {
  return _Def.default;
}), (0, _sequelizeTypescript.Table)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Model) {
  _inherits(Word, _Model);

  function Word() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Word);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Word)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", _initializerWarningHelper(_descriptor, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", _initializerWarningHelper(_descriptor2, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userId", _initializerWarningHelper(_descriptor3, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "user", _initializerWarningHelper(_descriptor4, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "defs", _initializerWarningHelper(_descriptor5, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "creationDate", _initializerWarningHelper(_descriptor6, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatedOn", _initializerWarningHelper(_descriptor7, _assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  return Word;
}(_sequelizeTypescript.Model), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec, _sequelizeTypescript.PrimaryKey, _dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userId", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "defs", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "creationDate", [_sequelizeTypescript.CreatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updatedOn", [_sequelizeTypescript.UpdatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Word;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL1dvcmQudHMiXSwibmFtZXMiOlsiV29yZCIsIlNlcXVlbGl6ZSIsIlVVSURWNCIsIlVVSUQiLCJTVFJJTkciLCJVc2VyIiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsIkRlZiIsIlRhYmxlIiwiTW9kZWwiLCJQcmltYXJ5S2V5IiwiQ3JlYXRlZEF0IiwiVXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxJO0FBSnJCOzs7T0FNRyxpQ0FBTyxDQUFQLEMsVUFFQSxrQ0FBUUMsbUJBQVVDLE1BQWxCLEMsVUFDQSxpQ0FBT0QsbUJBQVVFLElBQWpCLEMsVUFHQSxvQ0FBVSxLQUFWLEMsVUFDQSxpQ0FBT0YsbUJBQVVHLE1BQWpCLEMsVUFHQSxxQ0FBVztBQUFBLFNBQU1DLGFBQU47QUFBQSxDQUFYLEMsVUFDQSxpQ0FBT0osbUJBQVVFLElBQWpCLEMsVUFJQSxvQ0FBVTtBQUFBLFNBQU1FLGFBQU47QUFBQSxDQUFWLEVBQXNCO0FBQ3JCQyxFQUFBQSxRQUFRLEVBQUUsU0FEVztBQUVyQkMsRUFBQUEsUUFBUSxFQUFFO0FBRlcsQ0FBdEIsQyxVQU1BLGtDQUFRO0FBQUEsU0FBTUMsWUFBTjtBQUFBLENBQVIsQyxNQXhCRkMsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNpQ0MsMEIsb0ZBRy9CQywrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkF1QkFDLDhCOzs7Ozs4RUFHQUMsOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgQ29sdW1uLCBUYWJsZSwgQ3JlYXRlZEF0LCBVcGRhdGVkQXQsIFByaW1hcnlLZXksIEFsbG93TnVsbCwgSGFzTWFueSwgQmVsb25nc1RvLCBGb3JlaWduS2V5LCBJc1VVSUQsIERlZmF1bHQgfSBmcm9tIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgRGVmIGZyb20gJy4vRGVmJztcblxuLyoqXG4gKiBXb3JkIEVudGl0eVxuICoqL1xuQFRhYmxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkIGV4dGVuZHMgTW9kZWw8V29yZD4ge1xuXG4gIEBJc1VVSUQoNClcbiAgQFByaW1hcnlLZXlcbiAgQERlZmF1bHQoU2VxdWVsaXplLlVVSURWNClcbiAgQENvbHVtbihTZXF1ZWxpemUuVVVJRClcbiAgaWQ/OiBzdHJpbmc7XG5cbiAgQEFsbG93TnVsbChmYWxzZSlcbiAgQENvbHVtbihTZXF1ZWxpemUuU1RSSU5HKVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcbiAgQENvbHVtbihTZXF1ZWxpemUuVVVJRClcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgLy8gd2hlbiBhIHVzZXIgaXMgZGVsZXRlZCwgaXRzIGFzc29jaWF0ZSB3b3JkcyBhcmUgYWxzbyBkZWxldGVkXG4gIEBCZWxvbmdzVG8oKCkgPT4gVXNlciwge1xuICAgIG9uVXBkYXRlOiBcIkNBU0NBREVcIixcbiAgICBvbkRlbGV0ZTogXCJDQVNDQURFXCJcbiAgfSlcbiAgdXNlcjogVXNlcjtcblxuICBASGFzTWFueSgoKSA9PiBEZWYpXG4gIGRlZnM6IERlZltdO1xuXG4gIEBDcmVhdGVkQXRcbiAgY3JlYXRpb25EYXRlOiBEYXRlO1xuXG4gIEBVcGRhdGVkQXRcbiAgdXBkYXRlZE9uOiBEYXRlO1xuXG59XG5cbiJdfQ==