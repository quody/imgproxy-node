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
exports.ImgproxyPresetOnlyBuilder = void 0;
var base_builder_1 = require("./base-builder");
/**
 * Builder used when imgproxy is set in presets only mode: IMGPROXY_ONLY_PRESETS=true
 * https://github.com/imgproxy/imgproxy/blob/master/docs/presets.md#only-presets
 */
var ImgproxyPresetOnlyBuilder = /** @class */ (function (_super) {
    __extends(ImgproxyPresetOnlyBuilder, _super);
    function ImgproxyPresetOnlyBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.presets = [];
        return _this;
    }
    ImgproxyPresetOnlyBuilder.prototype.preset = function () {
        var presets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            presets[_i] = arguments[_i];
        }
        this.presets = this.presets.concat(presets);
        return this;
    };
    ImgproxyPresetOnlyBuilder.prototype.serializeOptions = function () {
        return this.presets.join(':');
    };
    return ImgproxyPresetOnlyBuilder;
}(base_builder_1.BaseBuilder));
exports.ImgproxyPresetOnlyBuilder = ImgproxyPresetOnlyBuilder;
