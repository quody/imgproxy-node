import { Buffer } from 'buffer';
import * as CryptoJS from 'crypto-js';
import {
  FocusPoint,
  ImgproxySecureConfig,
  OffsetGravity,
  RGBColor,
} from './types';

const createHmac = (encoding: string, key: Buffer) => {
  if (encoding !== 'sha256') {
    throw new Error("Only 'sha256' encoding is supported");
  }
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key.toString());
  return hmac;
};

export const isRGBColor = (obj: any): obj is RGBColor => {
  return typeof obj === 'object' && 'r' in obj && 'g' in obj && 'b' in obj;
};

export const isFocusPoint = (obj: any): obj is FocusPoint => {
  return typeof obj === 'object' && 'x' in obj && 'y' in obj;
};

export const isOffsetGravity = (obj: any): obj is OffsetGravity => {
  return (
    typeof obj === 'object' &&
    typeof obj.xOffset === 'number' &&
    typeof obj.yOffset === 'number' &&
    typeof obj.type === 'string'
  );
};

export const isSecureConfig = (config: any): config is ImgproxySecureConfig => {
  return 'key' in config && 'salt' in config;
};

const hexDecode = (hex: string) => Buffer.from(hex, 'hex');

export const urlSafeEncode = (data: any) =>
  Buffer.from(data, 'utf8')
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

export const sign = (
  key: string,
  salt: string,
  target: string,
  size: number = 32
) => {
  const hmac = createHmac('sha256', hexDecode(key));
  hmac.update(hexDecode(salt).toString());
  hmac.update(target);
  return urlSafeEncode(
    Buffer.from(hmac.finalize().toString(CryptoJS.enc.Hex), 'hex')
  );
};
