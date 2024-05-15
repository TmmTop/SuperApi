/*
 * @Author: 490912587@qq.com
 * @Date: 2023-12-25 13:47:22
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-15 18:17:07
 * @FilePath: \admin-ui\src\service\api\dynamic.ts
 * @Description: 
 */
import { request } from '../request';
import qs from "qs";
export const addTable = async (data) => {
    return request<any>({
        url: '/default/Table/Table',
        method: 'post',
        data
    });
};
export const delTable = async (data) => {
    return request<any>({
        url: '/default/Table/DelTable',
        method: 'post',
        data
    });
};
export const saveFields = async (data) => {
    return request<any>({
        url: '/default/Field/SaveAll',
        method: 'post',
        data
    });
};

export const getTableList = async (params) => {
    return request<any>({ url: '/default/Table/List?' + qs.stringify(params) });
};
export const getFieldByTableId = async (params) => {
    return request<any>({ url: '/default/Field/List?' + qs.stringify(params) });
};


export const getDyOne = async (params) => {
    return request<any>({ url: '/default/Dynamic/One?' + qs.stringify(params) });
};
export const getDyPage = async (params) => {
    return request<any>({ url: '/default/Dynamic/Page?' + qs.stringify(params) });
};
export const getDyTree = async (params) => {
    return request<any>({ url: '/default/Dynamic/Tree?' + qs.stringify(params) });
};
export const getDyList = async (params) => {
    return request<any>({ url: '/default/Dynamic/List?' + qs.stringify(params) });
};
export const addDy = async (data) => {
    return request<any>({
        url: '/default/Dynamic',
        method: 'post',
        data
    });
};
export const editDy = async (data) => {
    return request<any>({
        url: '/default/Dynamic/Edit',
        method: 'post',
        data
    });
};
export const delDy = async (data) => {
    return request<any>({
        url: '/default/Dynamic/Del',
        method: 'post',
        data
    });
};