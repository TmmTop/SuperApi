/*
 * @Author: 490912587@qq.com
 * @Date: 2024-01-05 15:31:29
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-06 15:29:25
 * @FilePath: \admin-ui\src\utils\crypto.ts
 * @Description: 
 */
import CryptoJS from 'crypto-js';

const CryptoSecret = '__CryptoJS_Secret__';
//加密公钥
export const publicKey = `0484C7466D950E120E5ECE5DD85D0C90EAA85081A3A2BD7C57AE6DC822EFCCBD66620C67B0103FC8DD280E36C3B282977B722AAEC3C56518EDCEBAFB72C5A05312`;
/**
 * 加密数据
 * @param data - 数据
 */
export function encrypt(data: any) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypt(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
