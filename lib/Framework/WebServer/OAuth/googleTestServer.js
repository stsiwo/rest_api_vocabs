"use strict";

var _express = _interopRequireDefault(require("express"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _googleApiUtil = require("./googleApiUtil");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express.default)();
app.get('/login/oauth2/code/google',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var authorizationCode, userAccount;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // extract code from query string
            authorizationCode = req.query.code; // get user google account 

            _context.next = 3;
            return (0, _googleApiUtil.getGoogleAccountFromCode)(authorizationCode);

          case 3:
            userAccount = _context.sent;
            console.log(userAccount);
            res.status(200).json({
              account: userAccount
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/', function (req, res) {
  console.log('home page');
  res.status(200).json({
    ok: "home page"
  });
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.listen(3000);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvV2ViU2VydmVyL09BdXRoL2dvb2dsZVRlc3RTZXJ2ZXIudHMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwiYXV0aG9yaXphdGlvbkNvZGUiLCJxdWVyeSIsImNvZGUiLCJ1c2VyQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiYWNjb3VudCIsIm9rIiwidXNlIiwiYm9keVBhcnNlciIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQU1BLEdBQUcsR0FBRyx1QkFBWjtBQVFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSwyQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXFDLGlCQUFlQyxHQUFmLEVBQXFDQyxHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkM7QUFDTUMsWUFBQUEsaUJBRjZCLEdBRVRGLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxJQUZELEVBSW5DOztBQUptQztBQUFBLG1CQUtLLDZDQUF5QkYsaUJBQXpCLENBTEw7O0FBQUE7QUFLN0JHLFlBQUFBLFdBTDZCO0FBTW5DQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUVBSixZQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxjQUFBQSxPQUFPLEVBQUVMO0FBQVgsYUFBckI7O0FBUm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0FQLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQStCQyxHQUEvQixFQUFzRDtBQUNqRUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBTixFQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxJQUFBQSxFQUFFLEVBQUU7QUFBTixHQUFyQjtBQUNELENBSEQ7QUFNQWIsR0FBRyxDQUFDYyxHQUFKLENBQVFDLFVBQVUsQ0FBQ0MsVUFBWCxDQUFzQjtBQUM1QkMsRUFBQUEsUUFBUSxFQUFFO0FBRGtCLENBQXRCLENBQVI7QUFHQWpCLEdBQUcsQ0FBQ2MsR0FBSixDQUFRQyxVQUFVLENBQUNKLElBQVgsRUFBUjtBQUVBWCxHQUFHLENBQUNrQixNQUFKLENBQVcsSUFBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgeyBnZXRHb29nbGVBY2NvdW50RnJvbUNvZGUgfSBmcm9tICcuL2dvb2dsZUFwaVV0aWwnO1xuaW1wb3J0IHsgQ3JlZGVudGlhbHMgfSBmcm9tICdnb29nbGUtYXV0aC1saWJyYXJ5JztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5pbnRlcmZhY2UgSVVzZXJBY2NvdW50IHtcbiAgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZW1haWw6IHN0cmluZyB8IDAgfCB1bmRlZmluZWQ7XG4gIHRva2VuczogQ3JlZGVudGlhbHM7XG59XG5cbmFwcC5nZXQoJy9sb2dpbi9vYXV0aDIvY29kZS9nb29nbGUnLCBhc3luYyBmdW5jdGlvbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gIC8vIGV4dHJhY3QgY29kZSBmcm9tIHF1ZXJ5IHN0cmluZ1xuICBjb25zdCBhdXRob3JpemF0aW9uQ29kZSA9IHJlcS5xdWVyeS5jb2RlO1xuXG4gIC8vIGdldCB1c2VyIGdvb2dsZSBhY2NvdW50IFxuICBjb25zdCB1c2VyQWNjb3VudDogSVVzZXJBY2NvdW50ID0gYXdhaXQgZ2V0R29vZ2xlQWNjb3VudEZyb21Db2RlKGF1dGhvcml6YXRpb25Db2RlKTtcbiAgY29uc29sZS5sb2codXNlckFjY291bnQpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYWNjb3VudDogdXNlckFjY291bnQgfSk7XG59KTtcblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2coJ2hvbWUgcGFnZScpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiBcImhvbWUgcGFnZVwiIH0pO1xufSk7XG5cblxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICBleHRlbmRlZDogdHJ1ZVxufSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbmFwcC5saXN0ZW4oMzAwMCk7XG4iXX0=