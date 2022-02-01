"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.sign = exports.urlSafeEncode = exports.isSecureConfig = exports.isOffsetGravity = exports.isFocusPoint = exports.isRGBColor = void 0;
var buffer_1 = require("buffer");
var CryptoJS = __importStar(require("crypto-js"));
var createHmac = function (encoding, key) {
    if (encoding !== 'sha256') {
        throw new Error("Only 'sha256' encoding is supported");
    }
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key.toString());
    return hmac;
};
var isRGBColor = function (obj) {
    return typeof obj === 'object' && 'r' in obj && 'g' in obj && 'b' in obj;
};
exports.isRGBColor = isRGBColor;
var isFocusPoint = function (obj) {
    return typeof obj === 'object' && 'x' in obj && 'y' in obj;
};
exports.isFocusPoint = isFocusPoint;
var isOffsetGravity = function (obj) {
    return (typeof obj === 'object' &&
        typeof obj.xOffset === 'number' &&
        typeof obj.yOffset === 'number' &&
        typeof obj.type === 'string');
};
exports.isOffsetGravity = isOffsetGravity;
var isSecureConfig = function (config) {
    return 'key' in config && 'salt' in config;
};
exports.isSecureConfig = isSecureConfig;
var hexDecode = function (hex) { return buffer_1.Buffer.from(hex, 'hex'); };
var urlSafeEncode = function (data) {
    return buffer_1.Buffer.from(data, 'utf8')
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
};
exports.urlSafeEncode = urlSafeEncode;
var sign = function (key, salt, target, size) {
    if (size === void 0) { size = 32; }
    var hmac = createHmac('sha256', hexDecode(key));
    hmac.update(hexDecode(salt).toString());
    hmac.update(target);
    return (0, exports.urlSafeEncode)(buffer_1.Buffer.from(hmac.finalize().toString(CryptoJS.enc.Hex), 'hex'));
};
exports.sign = sign;
