export interface ImgproxyConfig {
    /**
     * The url where imgproxy runs.
     */
    baseUrl: string;
    /**
     * If urls should be encoded with base64.
     */
    encode?: boolean;
    /**
     * If insecure usage is supported by the service, true by default.
     * When set to a string it will be used as the plain "signature".
     */
    insecure?: boolean | string;
}
export interface ImgproxySecureConfig extends ImgproxyConfig {
    /**
     * The key to use for creating the signature.
     */
    key: string;
    /**
     * The salt to use for creating the signature.
     */
    salt: string;
    /**
     * Number of bytes to use for signature before encoding to Base64. Default: 32
     */
    signatureSize?: SignatureSize;
    insecure: false;
}
export declare type SignatureSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
export declare type ResizingType = 'fit' | 'fill' | 'crop';
export declare type HexColor = string;
export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
export interface FocusPoint {
    x: number;
    y: number;
}
export interface OffsetGravity {
    type: GravityType;
    xOffset: number;
    yOffset: number;
}
export declare enum GravityType {
    center = "ce",
    north = "no",
    south = "so",
    east = "ea",
    west = "we",
    north_east = "noea",
    north_west = "nowe",
    south_east = "soea",
    south_west = "sowe",
    smart = "sm"
}
export declare type Gravity = GravityType | FocusPoint | OffsetGravity;
export declare enum WatermarkPosition {
    center = "ce",
    north = "no",
    south = "so",
    east = "ea",
    west = "we",
    north_east = "noea",
    north_west = "nowe",
    south_east = "soea",
    south_west = "sowe",
    replicate = "re"
}
export interface WatermarkOffset {
    x: number;
    y: number;
}
