import { BaseBuilder } from './base-builder';
/**
 * Builder used when imgproxy is set in presets only mode: IMGPROXY_ONLY_PRESETS=true
 * https://github.com/imgproxy/imgproxy/blob/master/docs/presets.md#only-presets
 */
export declare class ImgproxyPresetOnlyBuilder extends BaseBuilder {
    private presets;
    preset(...presets: string[]): this;
    protected serializeOptions(): string;
}
