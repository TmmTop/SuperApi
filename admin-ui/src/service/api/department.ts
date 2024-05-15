/*
 * @Author: 490912587@qq.com
 * @Date: 2024-04-30 15:08:20
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-15 13:56:15
 * @FilePath: \admin-ui\src\service\api\department.ts
 * @Description: 
 */
import { request } from '../request';
import qs from 'qs';
export function getDepartment(params: object) {
  return request<any>({ url: '/default/Department/Tree?' + qs.stringify(params) });
}
export function getDepartmentPage(params: object) {
  return request<any>({ url: '/default/Department/Page?' + qs.stringify(params) });
}
export function addDepartment(data: object) {
  return request<any>({
    url: '/default/Department',
    method: 'post',
    data
  });
}
export function editDepartment(data: object) {
  return request<any>({
    url: '/default/Department/Edit',
    method: 'post',
    data
  });
}
export function delDepartment(data: object) {
  return request<any>({
    url: '/default/Department/Del',
    method: 'post',
    data
  });
}
export function delBatchDepartment(data: object) {
  return request<any>({
      url: '/default/Department/DelBatch',
      method: 'post',
      data
  });
}
