import { FocusPoint, ImgproxySecureConfig, OffsetGravity, RGBColor } from './types';
export declare const isRGBColor: (obj: any) => obj is RGBColor;
export declare const isFocusPoint: (obj: any) => obj is FocusPoint;
export declare const isOffsetGravity: (obj: any) => obj is OffsetGravity;
export declare const isSecureConfig: (config: any) => config is ImgproxySecureConfig;
export declare const urlSafeEncode: (data: any) => string;
export declare const sign: (key: string, salt: string, target: string, size?: number) => string;
