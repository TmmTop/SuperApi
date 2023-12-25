/*
 * @Author: 490912587@qq.com
 * @Date: 2023-12-25 13:47:22
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 17:03:23
 * @FilePath: \FrontEnd\src\service\api\dynamic.ts
 * @Description: 
 */
import { adapter } from '@/utils';
import { request } from '../request';
import qs from "qs";
export const fetchList = async (params) => {
  return await request.get<any>('/table/list?' + qs.stringify(params));
};
export const add = async (data) => {
  return await request.post<any>('/table', data);
};
export const del = async (data) => {
  return await request.post<any>('/table/del', data);
};
export const getFieldByTableId = async (params) => {
  return await request.get<any>('/field/list?' + qs.stringify(params));
};
export const saveFields = async (data) => {
  return await request.post<any>('/field/saveall', data);
};