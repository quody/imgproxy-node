import { Buffer } from 'buffer';
import * as CryptoJS from 'crypto-js';
import {
  FocusPoint,
  ImgproxySecureConfig,
  OffsetGravity,
  RGBColor,
} from './types';

const createHmac = (encoding: string, key: string) => {
  if (encoding !== 'sha256') {
    throw new Error("Only 'sha256' encoding is supported");
  }

  const hmmkey = CryptoJS.enc.Hex.parse(key);
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, hmmkey);
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
  const hmac = createHmac('sha256', key);
  hmac.update(CryptoJS.enc.Hex.parse(salt));
  hmac.update(target);
  const hash = Buffer.from(
    hmac.finalize().toString(CryptoJS.enc.Hex),
    'hex'
  ).slice(0, size);
  return urlSafeEncode(hash);
};
