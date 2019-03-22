"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _User = _interopRequireDefault(require("./User"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

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

var AccessToken = (
/**
 * AccessToken Entity
 **/
_dec = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING(40)), _dec2 = (0, _sequelizeTypescript.Default)(null), _dec3 = (0, _sequelizeTypescript.ForeignKey)(function () {
  return _User.default;
}), _dec4 = (0, _sequelizeTypescript.Column)(_sequelize.default.UUID), _dec5 = (0, _sequelizeTypescript.BelongsTo)(function () {
  return _User.default;
}), _dec6 = (0, _sequelizeTypescript.Default)(null), _dec7 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), _dec8 = (0, _sequelizeTypescript.Default)(null), _dec9 = (0, _sequelizeTypescript.Column)(_sequelize.default.DATE), _dec10 = (0, _sequelizeTypescript.Default)(null), _dec11 = (0, _sequelizeTypescript.Column)(_sequelize.default.STRING), (0, _sequelizeTypescript.Table)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Model) {
  _inherits(AccessToken, _Model);

  function AccessToken() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccessToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccessToken)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "accessToken", _initializerWarningHelper(_descriptor, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userId", _initializerWarningHelper(_descriptor2, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "user", _initializerWarningHelper(_descriptor3, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refreshToken", _initializerWarningHelper(_descriptor4, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "accessTokenExpiresAt", _initializerWarningHelper(_descriptor5, _assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scope", _initializerWarningHelper(_descriptor6, _assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  return AccessToken;
}(_sequelizeTypescript.Model), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "accessToken", [_sequelizeTypescript.PrimaryKey, _dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userId", [_dec2, _dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "refreshToken", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "accessTokenExpiresAt", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scope", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = AccessToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvSW5mcmFzdHJ1Y3R1cmUvRGF0YUVudGl0aWVzL0FjY2Vzc1Rva2VuLnRzIl0sIm5hbWVzIjpbIkFjY2Vzc1Rva2VuIiwiU2VxdWVsaXplIiwiU1RSSU5HIiwiVXNlciIsIlVVSUQiLCJEQVRFIiwiVGFibGUiLCJNb2RlbCIsIlByaW1hcnlLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNcUJBLFc7QUFKckI7OztPQXFCRyxpQ0FBT0MsbUJBQVVDLE1BQVYsQ0FBaUIsRUFBakIsQ0FBUCxDLFVBR0Esa0NBQVEsSUFBUixDLFVBQ0EscUNBQVc7QUFBQSxTQUFNQyxhQUFOO0FBQUEsQ0FBWCxDLFVBQ0EsaUNBQU9GLG1CQUFVRyxJQUFqQixDLFVBR0Esb0NBQVU7QUFBQSxTQUFNRCxhQUFOO0FBQUEsQ0FBVixDLFVBR0Esa0NBQVEsSUFBUixDLFVBQ0EsaUNBQU9GLG1CQUFVQyxNQUFqQixDLFVBR0Esa0NBQVEsSUFBUixDLFVBQ0EsaUNBQU9ELG1CQUFVSSxJQUFqQixDLFdBR0Esa0NBQVEsSUFBUixDLFdBQ0EsaUNBQU9KLG1CQUFVQyxNQUFqQixDLE1BdENGSSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUN3Q0MsMEIsdUZBZ0J0Q0MsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgQ29sdW1uLCBUYWJsZSwgUHJpbWFyeUtleSwgQmVsb25nc1RvLCBGb3JlaWduS2V5LCBEZWZhdWx0LCBCZWZvcmVEZWZpbmUgfSBmcm9tIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbi8qKlxuICogQWNjZXNzVG9rZW4gRW50aXR5XG4gKiovXG5AVGFibGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY2Vzc1Rva2VuIGV4dGVuZHMgTW9kZWw8QWNjZXNzVG9rZW4+IHtcblxuICAvKipcbiAgICogaG9va3MgaW4gc2VxdWVsaXplLXR5cGVzY3JpcHQgZG9lcyBub3Qgd29yayBjdXJyZW50bHkgYmVjYXVzZSBvZiBpbnRlcm5hbCBidWdcbiAgICogc2VlIG1vcmUgZGV0YWlsOiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5CdXNjaG1hbm4vc2VxdWVsaXplLXR5cGVzY3JpcHQvaXNzdWVzLzUxN1xuICAgKiAgLSB3aGF0IGkgd2FudCB0byBkbyBpcyB0byBjaGFuZ2UgY2FtZWwgbmFtZSB0byB1bmRlcl9zY29yZSBuYW1lIHdoZW4gZGVmaW5lIGNvbHVtbiBpbiBwb3N0Z3Jlc1xuICAgKiAgLSBpbiBvcmRlciB0byBkbyB0aGlzLCBuZWVkIHRvIHVzZSBcImhvb2tcIiBhcyBzZXF1ZWxpemUgYXV0aG9yIHJlY29tbWVuZHMgYnV0IHNlcXVlbGl6ZS10eXBlc2NyaXB0J3MgaG9vayBjYXVzZSB0aGlzIGJ1Z1xuICAgKiAgLSBtYXliZSB0aGlzIGlzIG1pbm9yIGlzc3VlIHNvIGkgc2tpcCB0byBjaGFuZ2UgdHlwZSBvZiBuYW1lIGFuZCB1c2UgY2FtZWwgY2FzZSBpbiBwb3N0Z3JlcyBmb3Igbm93XG4gICAqKi9cbiAgLy9AQmVmb3JlRGVmaW5lXG4gIC8vc3RhdGljIGNoYW5nZVRvVW5kZXJTY29yZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1pbnNpZGUgQmVmb3JlRGVmaW5lXCIpO1xuICAgIC8vY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAvL2NvbnNvbGUubG9nKHByb3BlcnR5TmFtZSk7XG4gIC8vfVxuXG4gIEBQcmltYXJ5S2V5XG4gIEBDb2x1bW4oU2VxdWVsaXplLlNUUklORyg0MCkpXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cbiAgQERlZmF1bHQobnVsbClcbiAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcbiAgQENvbHVtbihTZXF1ZWxpemUuVVVJRClcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgQEJlbG9uZ3NUbygoKSA9PiBVc2VyKVxuICB1c2VyOiBVc2VyO1xuXG4gIEBEZWZhdWx0KG51bGwpXG4gIEBDb2x1bW4oU2VxdWVsaXplLlNUUklORylcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XG5cbiAgQERlZmF1bHQobnVsbClcbiAgQENvbHVtbihTZXF1ZWxpemUuREFURSlcbiAgYWNjZXNzVG9rZW5FeHBpcmVzQXQ6IERhdGU7XG5cbiAgQERlZmF1bHQobnVsbClcbiAgQENvbHVtbihTZXF1ZWxpemUuU1RSSU5HKVxuICBzY29wZTogc3RyaW5nO1xuXG59XG5cbiJdfQ==