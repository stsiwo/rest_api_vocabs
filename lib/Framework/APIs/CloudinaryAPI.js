"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../../env");

var _inversify = require("inversify");

require("reflect-metadata");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloudinaryAPI = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp =
/*#__PURE__*/
function () {
  // cloudinary for nodejs does have type definition file so for now, add "any"
  function CloudinaryAPI() {
    _classCallCheck(this, CloudinaryAPI);

    _defineProperty(this, "_cloudinary", _cloudinary.default);

    this._cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET
    });
  }

  _createClass(CloudinaryAPI, [{
    key: "deleteImagesOfUser",
    value: function deleteImagesOfUser(userName, urls) {
      var _this = this;

      return Promise.all(urls.map(function (url) {
        return _this._cloudinary.v2.uploader.destroy(url);
      })).then(function (data) {
        console.log(data);
        return true;
      }).catch(function () {
        return false;
      });
    }
  }]);

  return CloudinaryAPI;
}(), _temp)) || _class);
exports.default = CloudinaryAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GcmFtZXdvcmsvQVBJcy9DbG91ZGluYXJ5QVBJLnRzIl0sIm5hbWVzIjpbIkNsb3VkaW5hcnlBUEkiLCJjbG91ZGluYXJ5IiwiX2Nsb3VkaW5hcnkiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9TRUNSRVQiLCJ1c2VyTmFtZSIsInVybHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidXJsIiwidjIiLCJ1cGxvYWRlciIsImRlc3Ryb3kiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsYSxXQURwQiw0Qjs7O0FBR0M7QUFHQSwyQkFBcUI7QUFBQTs7QUFBQSx5Q0FGTUMsbUJBRU47O0FBQ25CLFNBQUtDLFdBQUwsQ0FBaUJDLE1BQWpCLENBQXdCO0FBQ3RCQyxNQUFBQSxVQUFVLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQURGO0FBRXRCQyxNQUFBQSxPQUFPLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxrQkFGQztBQUd0QkMsTUFBQUEsVUFBVSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFIRixLQUF4QjtBQUtEOzs7O3VDQUV5QkMsUSxFQUFrQkMsSSxFQUFnQjtBQUFBOztBQUMxRCxhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBRUMsR0FBRjtBQUFBLGVBQVcsS0FBSSxDQUFDZixXQUFMLENBQWlCZ0IsRUFBakIsQ0FBb0JDLFFBQXBCLENBQTZCQyxPQUE3QixDQUFxQ0gsR0FBckMsQ0FBWDtBQUFBLE9BQVQsQ0FBWixFQUNKSSxJQURJLENBQ0MsVUFBRUMsSUFBRixFQUFZO0FBQUVDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQW1CLGVBQU8sSUFBUDtBQUFZLE9BRDlDLEVBRUpHLEtBRkksQ0FFRTtBQUFBLGVBQU0sS0FBTjtBQUFBLE9BRkYsQ0FBUDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9lbnYnO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCBJQ2xvdWRpbmFyeUFQSSBmcm9tICcuLi8uLi9Vc2VDYXNlL0lBUElzL0lDbG91ZGluYXJ5QVBJJztcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gJ2Nsb3VkaW5hcnknO1xuaW1wb3J0IHsgSURlZiB9IGZyb20gJy4uLy4uL0RvbWFpbi9EZWYnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZGluYXJ5QVBJIGltcGxlbWVudHMgSUNsb3VkaW5hcnlBUEkge1xuXG4gIC8vIGNsb3VkaW5hcnkgZm9yIG5vZGVqcyBkb2VzIGhhdmUgdHlwZSBkZWZpbml0aW9uIGZpbGUgc28gZm9yIG5vdywgYWRkIFwiYW55XCJcbiAgcHJpdmF0ZSBfY2xvdWRpbmFyeTogYW55ID0gY2xvdWRpbmFyeTsgXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2Nsb3VkaW5hcnkuY29uZmlnKHtcbiAgICAgIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfTkFNRSBhcyBzdHJpbmcsIFxuICAgICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZIGFzIHN0cmluZywgXG4gICAgICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX1NFQ1JFVCBhcyBzdHJpbmcsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlSW1hZ2VzT2ZVc2VyKHVzZXJOYW1lOiBzdHJpbmcsIHVybHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVybHMubWFwKCggdXJsICkgPT4gdGhpcy5fY2xvdWRpbmFyeS52Mi51cGxvYWRlci5kZXN0cm95KHVybCkpKVxuICAgICAgLnRoZW4oKCBkYXRhICkgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgcmV0dXJuIHRydWV9KVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbiAgfVxufVxuXG5cbiJdfQ==