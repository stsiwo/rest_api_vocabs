"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Word = _interopRequireDefault(require("./Word"));

var _AccessToken = _interopRequireDefault(require("./AccessToken"));

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

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

var User = (
/**
 * User Entity
 **/
_dec = (0, _inversify.injectable)(), _dec2 = (0, _sequelizeTypescript.IsUUID)(4), _dec3 = (0, _sequelizeTypescript.Default)(_sequelize.default.UUIDV4), _dec4 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec5 = (0, _sequelizeTypescript.AllowNull)(false), _dec6 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec7 = (0, _sequelizeTypescript.AllowNull)(false), _dec8 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec9 = (0, _sequelizeTypescript.AllowNull)(false), _dec10 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec11 = (0, _sequelizeTypescript.HasMany)(function () {
  return _Word.default;
}), _dec12 = (0, _sequelizeTypescript.HasOne)(function () {
  return _AccessToken.default;
}), _dec(_class = (0, _sequelizeTypescript.Table)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Model) {
  _inherits(User, _Model);

  function User() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(User)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", _initializerWarningHelper(_descriptor, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", _initializerWarningHelper(_descriptor2, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "email", _initializerWarningHelper(_descriptor3, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "password", _initializerWarningHelper(_descriptor4, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "creationDate", _initializerWarningHelper(_descriptor5, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatedOn", _initializerWarningHelper(_descriptor6, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "words", _initializerWarningHelper(_descriptor7, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "accessToken", _initializerWarningHelper(_descriptor8, _assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }
  /**
   * since typescript refers "this" to wrong object (pointing UserAttributeType, but actually UserInstanceType)
   * i assign this as any to remove compile error
   * 
   * error TS2339: Property 'setDataValue' does not exist on type 'String | DataTypeAbstract | DefineAttributeColumnOptions'.
   * Property 'setDataValue' does not exist on type 'String'.
   **/
  // bcrypt does not work properly so i skip bcrypt password for now


  return User;
}(_sequelizeTypescript.Model), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _sequelizeTypescript.PrimaryKey, _dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec5, _sequelizeTypescript.Unique, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "email", [_sequelizeTypescript.IsEmail, _sequelizeTypescript.Unique, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "password", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "creationDate", [_sequelizeTypescript.CreatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "updatedOn", [_sequelizeTypescript.UpdatedAt], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "words", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "accessToken", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOlsiVXNlciIsIlNlcXVlbGl6ZSIsIlVVSURWNCIsIlVVSUQiLCJTVFJJTkciLCJXb3JkIiwiQWNjZXNzVG9rZW4iLCJUYWJsZSIsIk1vZGVsIiwiUHJpbWFyeUtleSIsIlVuaXF1ZSIsIklzRW1haWwiLCJDcmVhdGVkQXQiLCJVcGRhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLEk7QUFMckI7OztPQUdDLDRCLFVBSUUsaUNBQU8sQ0FBUCxDLFVBRUEsa0NBQVFDLG1CQUFVQyxNQUFsQixDLFVBQ0EsaUNBQU9ELG1CQUFVRSxJQUFqQixDLFVBR0Esb0NBQVUsS0FBVixDLFVBRUEsaUNBQU9GLG1CQUFVRyxNQUFqQixDLFVBS0Esb0NBQVUsS0FBVixDLFVBQ0EsaUNBQU9ILG1CQUFVRyxNQUFqQixDLFVBR0Esb0NBQVUsS0FBVixDLFdBQ0EsaUNBQU9ILG1CQUFVRyxNQUFqQixDLFdBU0Esa0NBQVE7QUFBQSxTQUFNQyxhQUFOO0FBQUEsQ0FBUixDLFdBR0EsaUNBQU87QUFBQSxTQUFNQyxvQkFBTjtBQUFBLENBQVAsQyxvQkFqQ0ZDLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0M7Ozs7Ozs7QUFPQTs7OztFQXpDZ0NDLDBCLHFGQUcvQkMsK0I7Ozs7O2dGQU1BQywyQjs7Ozs7MEVBSUFDLDRCLEVBQ0FELDJCOzs7Ozs7Ozs7O2lGQVNBRSw4Qjs7Ozs7OEVBR0FDLDhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwsIENvbHVtbiwgVGFibGUsIENyZWF0ZWRBdCwgVXBkYXRlZEF0LCBJc1VVSUQsIFByaW1hcnlLZXksIEFsbG93TnVsbCwgSXNFbWFpbCwgVW5pcXVlLCBEZWZhdWx0LCBIYXNNYW55LCBIYXNPbmUgfSBmcm9tIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBXb3JkIGZyb20gJy4vV29yZCc7XG5pbXBvcnQgQWNjZXNzVG9rZW4gZnJvbSAnLi9BY2Nlc3NUb2tlbic7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuXG5cbi8qKlxuICogVXNlciBFbnRpdHlcbiAqKi9cbkBpbmplY3RhYmxlKClcbkBUYWJsZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsPFVzZXI+IHtcblxuICBASXNVVUlEKDQpXG4gIEBQcmltYXJ5S2V5XG4gIEBEZWZhdWx0KFNlcXVlbGl6ZS5VVUlEVjQpXG4gIEBDb2x1bW4oU2VxdWVsaXplLlVVSUQpXG4gIGlkPzogc3RyaW5nO1xuXG4gIEBBbGxvd051bGwoZmFsc2UpXG4gIEBVbmlxdWVcbiAgQENvbHVtbihTZXF1ZWxpemUuU1RSSU5HKVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQElzRW1haWxcbiAgQFVuaXF1ZVxuICBAQWxsb3dOdWxsKGZhbHNlKVxuICBAQ29sdW1uKFNlcXVlbGl6ZS5TVFJJTkcpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQEFsbG93TnVsbChmYWxzZSlcbiAgQENvbHVtbihTZXF1ZWxpemUuU1RSSU5HKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBDcmVhdGVkQXRcbiAgY3JlYXRpb25EYXRlOiBEYXRlO1xuXG4gIEBVcGRhdGVkQXRcbiAgdXBkYXRlZE9uOiBEYXRlO1xuXG4gIEBIYXNNYW55KCgpID0+IFdvcmQpXG4gIHdvcmRzOiBXb3JkW107XG5cbiAgQEhhc09uZSgoKSA9PiBBY2Nlc3NUb2tlbilcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgLyoqXG4gICAqIHNpbmNlIHR5cGVzY3JpcHQgcmVmZXJzIFwidGhpc1wiIHRvIHdyb25nIG9iamVjdCAocG9pbnRpbmcgVXNlckF0dHJpYnV0ZVR5cGUsIGJ1dCBhY3R1YWxseSBVc2VySW5zdGFuY2VUeXBlKVxuICAgKiBpIGFzc2lnbiB0aGlzIGFzIGFueSB0byByZW1vdmUgY29tcGlsZSBlcnJvclxuICAgKiBcbiAgICogZXJyb3IgVFMyMzM5OiBQcm9wZXJ0eSAnc2V0RGF0YVZhbHVlJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdTdHJpbmcgfCBEYXRhVHlwZUFic3RyYWN0IHwgRGVmaW5lQXR0cmlidXRlQ29sdW1uT3B0aW9ucycuXG4gICAqIFByb3BlcnR5ICdzZXREYXRhVmFsdWUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ1N0cmluZycuXG4gICAqKi9cbiAgLy8gYmNyeXB0IGRvZXMgbm90IHdvcmsgcHJvcGVybHkgc28gaSBza2lwIGJjcnlwdCBwYXNzd29yZCBmb3Igbm93XG59XG4iXX0=