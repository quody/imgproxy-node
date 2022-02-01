"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.BaseBuilder = void 0;
var url_join_1 = __importDefault(require("url-join"));
var utils_1 = require("./utils");
var BaseBuilder = /** @class */ (function () {
    function BaseBuilder(config) {
        this.config = config;
        this.config = config;
    }
    /**
     * Generates a URL based on the set options.
     *
     * @param uri The uri of the image
     * @param extension optional string to append as extension
     */
    BaseBuilder.prototype.generateUrl = function (uri, extension) {
        var options = this.serializeOptions();
        var config = this.config;
        var encode = config.encode !== false;
        uri = encode ? (0, utils_1.urlSafeEncode)(uri) : "plain/".concat(uri);
        uri = extension ? "".concat(uri).concat(encode ? '.' : '@').concat(extension) : uri;
        uri = "/".concat(options ? "".concat(options, "/") : '').concat(uri);
        var signature = (0, utils_1.isSecureConfig)(config)
            ? (0, utils_1.sign)(config.key, config.salt, uri, config.signatureSize || 32)
            : typeof config.insecure === 'string'
                ? config.insecure
                : 'insecure';
        return (0, url_join_1["default"])(config.baseUrl, "".concat(signature).concat(uri));
    };
    return BaseBuilder;
}());
exports.BaseBuilder = BaseBuilder;
