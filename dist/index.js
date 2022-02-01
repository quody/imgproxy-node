"use strict";
exports.__esModule = true;
exports.WatermarkPosition = void 0;
var builder_1 = require("./builder");
var preset_only_builder_1 = require("./preset-only-builder");
var types_1 = require("./types");
exports.WatermarkPosition = types_1.WatermarkPosition;
var utils_1 = require("./utils");
var Imgproxy = /** @class */ (function () {
    function Imgproxy(config) {
        if ((0, utils_1.isSecureConfig)(config) && typeof config.signatureSize !== 'undefined') {
            if (config.signatureSize < 1 || config.signatureSize > 32) {
                throw new Error('`signatureSize` must be greater than or equal to 1, and less than or equal to 32');
            }
        }
        this.config = config;
    }
    Imgproxy.prototype.builder = function () {
        return new builder_1.ImgproxyBuilder(this.config);
    };
    Imgproxy.prototype.presetOnlyBuilder = function () {
        return new preset_only_builder_1.ImgproxyPresetOnlyBuilder(this.config);
    };
    return Imgproxy;
}());
exports["default"] = Imgproxy;
