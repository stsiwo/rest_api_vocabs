"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _iocContainer = _interopRequireDefault(require("./iocContainer"));

var _inversifyExpressUtils = require("inversify-express-utils");

require("./Framework/Infrastructure/connection");

require("./Interface/Controllers/UserController");

require("./Interface/Controllers/OAuthController");

require("./Interface/Controllers/WordController");

require("./Interface/Controllers/DictionaryController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// sequelize initialize
// cors config
var corsOptions = {
  // when credentialed request, you need to specify the origin rather than "*"
  origin: 'http://localhost:8080',
  allowedHeaders: ['Content-Type', "Authorization"],
  //credentials: true, // Access-Control-Allow-Credential: expect cookie to include in request
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // declare metadata by @controller annotation

};
// create server
var server = new _inversifyExpressUtils.InversifyExpressServer(_iocContainer.default);
server.setConfig(function (app) {
  // add body parser
  //  - means you don't need to parse json string to object using JSON.parse
  //  parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  })); // parse application/json

  app.use(bodyParser.json());
  app.use((0, _cors.default)(corsOptions));
});
var app = server.build();
var _default = app;
exports.default = _default;
app.listen(3000, function () {
  console.log("start listening...");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib290c3RyYXAudHMiXSwibmFtZXMiOlsiY29yc09wdGlvbnMiLCJvcmlnaW4iLCJhbGxvd2VkSGVhZGVycyIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwic2VydmVyIiwiSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciIsImNvbnRhaW5lciIsInNldENvbmZpZyIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiYnVpbGQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBWUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQWhCQTtBQUdBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSx1QkFGVTtBQUdsQkMsRUFBQUEsY0FBYyxFQUFFLENBQUUsY0FBRixFQUFrQixlQUFsQixDQUhFO0FBSWxCO0FBQ0FDLEVBQUFBLG9CQUFvQixFQUFFLEdBTEosQ0FLUTtBQUc1Qjs7QUFSb0IsQ0FBcEI7QUFjQTtBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyw2Q0FBSixDQUEyQkMscUJBQTNCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxTQUFQLENBQWlCLFVBQUNDLEdBQUQsRUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQUEsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVFDLFVBQVUsQ0FBQ0MsVUFBWCxDQUFzQjtBQUM1QkMsSUFBQUEsUUFBUSxFQUFFO0FBRGtCLEdBQXRCLENBQVIsRUFKd0IsQ0FPeEI7O0FBQ0FKLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxVQUFVLENBQUNHLElBQVgsRUFBUjtBQUNBTCxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxtQkFBS1QsV0FBTCxDQUFSO0FBQ0QsQ0FWRDtBQVlBLElBQU1RLEdBQUcsR0FBR0osTUFBTSxDQUFDVSxLQUFQLEVBQVo7ZUFDZU4sRzs7QUFFZkEsR0FBRyxDQUFDTyxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQUVDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQW1DLENBQTVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4vaW9jQ29udGFpbmVyJztcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscyc7XG5cbi8vIHNlcXVlbGl6ZSBpbml0aWFsaXplXG5pbXBvcnQgJy4vRnJhbWV3b3JrL0luZnJhc3RydWN0dXJlL2Nvbm5lY3Rpb24nO1xuXG4vLyBjb3JzIGNvbmZpZ1xuY29uc3QgY29yc09wdGlvbnMgPSB7XG4gIC8vIHdoZW4gY3JlZGVudGlhbGVkIHJlcXVlc3QsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIG9yaWdpbiByYXRoZXIgdGhhbiBcIipcIlxuICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICBhbGxvd2VkSGVhZGVyczogWyAnQ29udGVudC1UeXBlJywgXCJBdXRob3JpemF0aW9uXCIgXSxcbiAgLy9jcmVkZW50aWFsczogdHJ1ZSwgLy8gQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbDogZXhwZWN0IGNvb2tpZSB0byBpbmNsdWRlIGluIHJlcXVlc3RcbiAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCAvLyBzb21lIGxlZ2FjeSBicm93c2VycyAoSUUxMSwgdmFyaW91cyBTbWFydFRWcykgY2hva2Ugb24gMjA0XG59XG5cbi8vIGRlY2xhcmUgbWV0YWRhdGEgYnkgQGNvbnRyb2xsZXIgYW5ub3RhdGlvblxuaW1wb3J0IFwiLi9JbnRlcmZhY2UvQ29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vSW50ZXJmYWNlL0NvbnRyb2xsZXJzL09BdXRoQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9JbnRlcmZhY2UvQ29udHJvbGxlcnMvV29yZENvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vSW50ZXJmYWNlL0NvbnRyb2xsZXJzL0RpY3Rpb25hcnlDb250cm9sbGVyXCI7XG5cbi8vIGNyZWF0ZSBzZXJ2ZXJcbmxldCBzZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIpO1xuc2VydmVyLnNldENvbmZpZygoYXBwKSA9PiB7XG4gIC8vIGFkZCBib2R5IHBhcnNlclxuICAvLyAgLSBtZWFucyB5b3UgZG9uJ3QgbmVlZCB0byBwYXJzZSBqc29uIHN0cmluZyB0byBvYmplY3QgdXNpbmcgSlNPTi5wYXJzZVxuICAvLyAgcGFyc2UgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXG4gIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogdHJ1ZVxuICB9KSk7XG4gIC8vIHBhcnNlIGFwcGxpY2F0aW9uL2pzb25cbiAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gIGFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xufSk7XG5cbmNvbnN0IGFwcCA9IHNlcnZlci5idWlsZCgpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHsgY29uc29sZS5sb2coXCJzdGFydCBsaXN0ZW5pbmcuLi5cIikgfSk7XG4iXX0=