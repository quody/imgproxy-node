"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ImgproxyBuilder = void 0;
var base_builder_1 = require("./base-builder");
var utils_1 = require("./utils");
var ImgproxyBuilder = /** @class */ (function (_super) {
    __extends(ImgproxyBuilder, _super);
    function ImgproxyBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {};
        return _this;
    }
    ImgproxyBuilder.prototype.resize = function (type, width, height, enlarge) {
        this.setOption('rs', [type, width, height, enlarge ? 1 : 0].join(':'));
        return this;
    };
    ImgproxyBuilder.prototype.size = function (width, height, enlarge) {
        this.setOption('s', [width, height, enlarge ? 1 : 0].join(':'));
        return this;
    };
    ImgproxyBuilder.prototype.resizingType = function (type) {
        this.setOption('rs', type);
        return this;
    };
    ImgproxyBuilder.prototype.width = function (width) {
        this.setOption('w', "".concat(width));
        return this;
    };
    ImgproxyBuilder.prototype.height = function (height) {
        this.setOption('h', "".concat(height));
        return this;
    };
    ImgproxyBuilder.prototype.dpr = function (dpr) {
        if (dpr > 0) {
            this.setOption('dpr', "".concat(dpr));
        }
        return this;
    };
    ImgproxyBuilder.prototype.enlarge = function (enlarge) {
        this.setOption('el', "".concat(enlarge));
        return this;
    };
    ImgproxyBuilder.prototype.gravity = function (gravity) {
        if ((0, utils_1.isFocusPoint)(gravity)) {
            this.setOption('g', "fp:".concat(gravity.x, ":").concat(gravity.y));
        }
        else if ((0, utils_1.isOffsetGravity)(gravity)) {
            this.setOption('g', "".concat(gravity.type, ":").concat(gravity.xOffset, ":").concat(gravity.yOffset));
        }
        else {
            this.setOption('g', gravity);
        }
        return this;
    };
    ImgproxyBuilder.prototype.quality = function (quality) {
        this.setOption('q', "".concat(quality));
        return this;
    };
    ImgproxyBuilder.prototype.background = function (color) {
        if ((0, utils_1.isRGBColor)(color)) {
            this.setOption('bg', "".concat(color.r, ":").concat(color.g, ":").concat(color.b));
        }
        else {
            this.setOption('bg', color);
        }
        return this;
    };
    ImgproxyBuilder.prototype.blur = function (sigma) {
        this.setOption('bl', "".concat(sigma));
        return this;
    };
    ImgproxyBuilder.prototype.sharpen = function (sigma) {
        this.setOption('sh', "".concat(sigma));
        return this;
    };
    ImgproxyBuilder.prototype.watermark = function (opacity, position, offset, scale) {
        this.setOption('wm', "".concat(opacity, ":").concat(position, ":").concat(offset ? "".concat(offset.x, ":").concat(offset.y) : '', ":").concat(scale));
        return this;
    };
    ImgproxyBuilder.prototype.preset = function () {
        var presets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            presets[_i] = arguments[_i];
        }
        this.setOption('pr', presets.join(':'));
        return this;
    };
    ImgproxyBuilder.prototype.cacheBuster = function (buster) {
        this.setOption('cb', buster);
        return this;
    };
    ImgproxyBuilder.prototype.format = function (extension) {
        this.setOption('f', extension);
        return this;
    };
    ImgproxyBuilder.prototype.crop = function (width, height, gravity) {
        var crop = "".concat(width, ":").concat(height);
        if (gravity) {
            if ((0, utils_1.isFocusPoint)(gravity)) {
                crop = "".concat(crop, ":fp:").concat(gravity.x, ":").concat(gravity.y);
            }
            else if ((0, utils_1.isOffsetGravity)(gravity)) {
                crop = "".concat(crop, ":").concat(gravity.type, ":").concat(gravity.xOffset, ":").concat(gravity.yOffset);
            }
            else {
                crop = "".concat(crop, ":").concat(gravity);
            }
        }
        this.setOption('c', crop);
        return this;
    };
    ImgproxyBuilder.prototype.setOption = function (option, value) {
        this.options[option] = value;
    };
    ImgproxyBuilder.prototype.clearOption = function (option) {
        this.options[option] = undefined;
    };
    ImgproxyBuilder.prototype.serializeOptions = function () {
        var _this = this;
        return Object.keys(this.options)
            .filter(function (option) { return !!_this.options[option]; })
            .map(function (option) { return "".concat(option, ":").concat(_this.options[option]); })
            .join('/');
    };
    return ImgproxyBuilder;
}(base_builder_1.BaseBuilder));
exports.ImgproxyBuilder = ImgproxyBuilder;
