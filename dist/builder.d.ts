import { Gravity, WatermarkPosition } from '.';
import { BaseBuilder } from './base-builder';
import { HexColor, ResizingType, RGBColor, WatermarkOffset } from './types';
export declare class ImgproxyBuilder extends BaseBuilder {
    private options;
    resize(type?: ResizingType, width?: number, height?: number, enlarge?: boolean): this;
    size(width?: number, height?: number, enlarge?: boolean): this;
    resizingType(type: string): this;
    width(width: number): this;
    height(height: number): this;
    dpr(dpr: number | string): this;
    enlarge(enlarge: number): this;
    gravity(gravity: Gravity): this;
    quality(quality: number): this;
    background(color: RGBColor | HexColor): this;
    blur(sigma: number): this;
    sharpen(sigma: number): this;
    watermark(opacity: number, position?: WatermarkPosition, offset?: WatermarkOffset, scale?: number): this;
    preset(...presets: string[]): this;
    cacheBuster(buster: string): this;
    format(extension: string): this;
    crop(width: number, height: number, gravity?: Gravity): this;
    setOption(option: string, value: string): void;
    clearOption(option: string): void;
    protected serializeOptions(): string;
}
