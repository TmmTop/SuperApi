/*
 * @Author: 490912587@qq.com
 * @Date: 2024-04-30 15:08:20
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-06 15:05:08
 * @FilePath: \admin-ui\src\service\api\auth.ts
 * @Description: 
 */
import { request } from '../request';

/**
 * Login
 *
 * @param account User name
 * @param password Password
 */
export function fetchLogin(account: string, password: string) {
  return request<Api.Auth.LoginToken>({
    url: '/default/Auth/PwdLogin',
    method: 'post',
    data: {
      account,
      password
    }
  });
}

/** Get user info */
export function fetchGetUserInfo() {
  return request<Api.Auth.UserInfo>({ url: '/default/Auth/UserInfo' });
}

/**
 * Refresh token
 *
 * @param refreshToken Refresh token
 */
export function fetchRefreshToken(refreshToken: string) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/refreshToken',
    method: 'post',
    data: {
      refreshToken
    }
  });
}

/**
 * return custom backend error
 *
 * @param code error code
 * @param msg error message
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return request({ url: '/auth/error', params: { code, msg } });
}
