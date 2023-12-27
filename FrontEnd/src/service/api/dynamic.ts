/*
 * @Author: 490912587@qq.com
 * @Date: 2023-12-25 13:47:22
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-27 13:57:09
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

export const getDyOne = async (params) => {
  return await request.get<any>('/dynamic/one?' + qs.stringify(params));
};
export const getDyPage = async (params) => {
  return await request.get<any>('/dynamic/page?' + qs.stringify(params));
};
export const getDyTree = async (params) => {
  return await request.get<any>('/dynamic/tree?' + qs.stringify(params));
};
export const getDyList = async (params) => {
  return await request.get<any>('/dynamic/list?' + qs.stringify(params));
};
export const addDy = async (data) => {
  return await request.post<any>('/dynamic', data);
};
export const editDy = async (data) => {
  return await request.post<any>('/dynamic/edit', data);
};
export const delDy = async (data) => {
  return await request.post<any>('/dynamic/del', data);
};