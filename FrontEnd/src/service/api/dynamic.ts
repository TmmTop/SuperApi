/*
 * @Author: 490912587@qq.com
 * @Date: 2023-12-25 13:47:22
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-26 13:22:45
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
export const getTenantPage = async (params) => {
  return await request.get<any>('/tenant/page?' + qs.stringify(params));
};
export const addTenant = async (data) => {
  return await request.post<any>('/tenant', data);
};
export const editTenant = async (data) => {
  return await request.post<any>('/tenant/edit', data);
};
export const delTenant = async (data) => {
  return await request.post<any>('/tenant/del', data);
};