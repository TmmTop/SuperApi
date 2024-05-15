/*
 * @Author: 490912587@qq.com
 * @Date: 2024-04-30 15:08:20
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-15 10:04:10
 * @FilePath: \admin-ui\src\service\api\user.ts
 * @Description: 
 */
import { request } from '../request';
import qs from 'qs';
export function getUserPage(params: object) {
  return request<any>({ url: '/default/User/Page?' + qs.stringify(params) });
}
export function addUser(data: object) {
  return request<any>({
    url: '/default/User/PcUser',
    method: 'post',
    data
  });
}
export function editUser(data: object) {
  return request<any>({
    url: '/default/User/Edit',
    method: 'post',
    data
  });
}
export function delUser(data: object) {
  return request<any>({
    url: '/default/User/Del',
    method: 'post',
    data
  });
}
export function delBatchUser(data: object) {
  return request<any>({
      url: '/default/User/DelBatch',
      method: 'post',
      data
  });
}
