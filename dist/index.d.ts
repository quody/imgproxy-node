import { ImgproxyBuilder } from './builder';
import { ImgproxyPresetOnlyBuilder } from './preset-only-builder';
import { Gravity, ImgproxyConfig, ImgproxySecureConfig, WatermarkPosition } from './types';
export default class Imgproxy {
    private config;
    constructor(config: ImgproxyConfig | ImgproxySecureConfig);
    builder(): ImgproxyBuilder;
    presetOnlyBuilder(): ImgproxyPresetOnlyBuilder;
}
export { Gravity, WatermarkPosition };
