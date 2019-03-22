"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Word = _interopRequireDefault(require("./Word"));

var _Pos = _interopRequireDefault(require("./Pos"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

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

var Def = (
/**
 * Def Entity
 **/
_dec = (0, _sequelizeTypescript.IsUUID)(4), _dec2 = (0, _sequelizeTypescript.Default)(_sequelize.default.UUIDV4), _dec3 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec4 = (0, _sequelizeTypescript.AllowNull)(false), _dec5 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec6 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec7 = (0, _sequelizeTypescript.ForeignKey)(function () {
  return _Pos.default;
}), _dec8 = (0, _sequelizeTypescript.Column)(_sequelize.default.INTEGER), _dec9 = (0, _sequelizeTypescript.BelongsTo)(function () {
  return _Pos.default;
}), _dec10 = (0, _sequelizeTypescript.ForeignKey)(function () {
  return _Word.default;
}), _dec11 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec12 = (0, _sequelizeTypescript.BelongsTo)(function () {
  return _Word.default;
}, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
}), (0, _sequelizeTypescript.Table)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Model) {
  _inherits(Def, _Model);

  function Def() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Def);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Def)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", _initializerWarningHelper(_descriptor, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "def", _initializerWarningHelper(_descriptor2, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "image", _initializerWarningHelper(_descriptor3, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "posId", _initializerWarningHelper(_descriptor4, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pos", _initializerWarningHelper(_descriptor5, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wordId", _initializerWarningHelper(_descriptor6, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "word", _initializerWarningHelper(_descriptor7, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "creationDate", _initializerWarningHelper(_descriptor8, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatedOn", _initializerWarningHelper(_descriptor9, _assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  return Def;
}(_sequelizeTypescript.Model), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec, _sequelizeTypescript.PrimaryKey, _dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "def", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "image", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "posId", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pos", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wordId", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "word", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "creationDate", [_sequelizeTypescript.CreatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "updatedOn", [_sequelizeTypescript.UpdatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Def;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL0RlZi50cyJdLCJuYW1lcyI6WyJEZWYiLCJTZXF1ZWxpemUiLCJVVUlEVjQiLCJVVUlEIiwiU1RSSU5HIiwiUG9zIiwiSU5URUdFUiIsIldvcmQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwiVGFibGUiLCJNb2RlbCIsIlByaW1hcnlLZXkiLCJDcmVhdGVkQXQiLCJVcGRhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNcUJBLEc7QUFKckI7OztPQU1HLGlDQUFPLENBQVAsQyxVQUVBLGtDQUFRQyxtQkFBVUMsTUFBbEIsQyxVQUNBLGlDQUFPRCxtQkFBVUUsSUFBakIsQyxVQUdBLG9DQUFVLEtBQVYsQyxVQUNBLGlDQUFPRixtQkFBVUcsTUFBakIsQyxVQUdBLGlDQUFPSCxtQkFBVUcsTUFBakIsQyxVQUdBLHFDQUFXO0FBQUEsU0FBTUMsWUFBTjtBQUFBLENBQVgsQyxVQUNBLGlDQUFPSixtQkFBVUssT0FBakIsQyxVQUdBLG9DQUFVO0FBQUEsU0FBTUQsWUFBTjtBQUFBLENBQVYsQyxXQUdBLHFDQUFXO0FBQUEsU0FBTUUsYUFBTjtBQUFBLENBQVgsQyxXQUNBLGlDQUFPTixtQkFBVUUsSUFBakIsQyxXQUlBLG9DQUFVO0FBQUEsU0FBTUksYUFBTjtBQUFBLENBQVYsRUFBc0I7QUFDckJDLEVBQUFBLFFBQVEsRUFBRSxTQURXO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUU7QUFGVyxDQUF0QixDLE1BNUJGQywwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNnQ0MsMEIsb0ZBRzlCQywrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBOEJBQyw4Qjs7Ozs7OEVBR0FDLDhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwsIENvbHVtbiwgVGFibGUsIENyZWF0ZWRBdCwgVXBkYXRlZEF0LCBQcmltYXJ5S2V5LCBBbGxvd051bGwsIEJlbG9uZ3NUbywgRm9yZWlnbktleSwgSXNVVUlELCBEZWZhdWx0IH0gZnJvbSBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCI7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgV29yZCBmcm9tICcuL1dvcmQnO1xuaW1wb3J0IFBvcyBmcm9tICcuL1Bvcyc7XG5cbi8qKlxuICogRGVmIEVudGl0eVxuICoqL1xuQFRhYmxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWYgZXh0ZW5kcyBNb2RlbDxEZWY+IHtcblxuICBASXNVVUlEKDQpXG4gIEBQcmltYXJ5S2V5XG4gIEBEZWZhdWx0KFNlcXVlbGl6ZS5VVUlEVjQpXG4gIEBDb2x1bW4oU2VxdWVsaXplLlVVSUQpXG4gIGlkPzogc3RyaW5nO1xuXG4gIEBBbGxvd051bGwoZmFsc2UpXG4gIEBDb2x1bW4oU2VxdWVsaXplLlNUUklORylcbiAgZGVmOiBzdHJpbmc7XG5cbiAgQENvbHVtbihTZXF1ZWxpemUuU1RSSU5HKVxuICBpbWFnZTogc3RyaW5nO1xuXG4gIEBGb3JlaWduS2V5KCgpID0+IFBvcylcbiAgQENvbHVtbihTZXF1ZWxpemUuSU5URUdFUilcbiAgcG9zSWQ6IG51bWJlcjtcblxuICBAQmVsb25nc1RvKCgpID0+IFBvcylcbiAgcG9zOiBQb3M7XG5cbiAgQEZvcmVpZ25LZXkoKCkgPT4gV29yZClcbiAgQENvbHVtbihTZXF1ZWxpemUuVVVJRClcbiAgd29yZElkOiBzdHJpbmc7XG5cbiAgLy8gd2hlbiBhIHdvcmQgaXMgZGVsZXRlZCwgaXRzIGFzc29jaWF0ZWQgZGVmcyBhcmUgYWxzbyBkZWxldGVkXG4gIEBCZWxvbmdzVG8oKCkgPT4gV29yZCwge1xuICAgIG9uVXBkYXRlOiBcIkNBU0NBREVcIixcbiAgICBvbkRlbGV0ZTogXCJDQVNDQURFXCJcbiAgfSlcbiAgd29yZDogV29yZDtcblxuICBAQ3JlYXRlZEF0XG4gIGNyZWF0aW9uRGF0ZTogRGF0ZTtcblxuICBAVXBkYXRlZEF0XG4gIHVwZGF0ZWRPbjogRGF0ZTtcblxufVxuXG5cbiJdfQ==