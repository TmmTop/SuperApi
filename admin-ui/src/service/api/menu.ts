/*
 * @Author: 490912587@qq.com
 * @Date: 2024-05-09 17:30:09
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-16 11:01:57
 * @FilePath: \admin-ui\src\service\api\menu.ts
 * @Description: 
 */
import { request } from '../request';
import qs from 'qs';
export function getMenuTree(params: object) {
    return request<any>({ url: '/default/Menu/MenuTreeList?' + qs.stringify(params) });
}
export function addMenu(data: object) {
    return request<any>({
        url: '/default/Menu',
        method: 'post',
        data
    });
}
export function editMenu(data: object) {
    return request<any>({
        url: '/default/Menu/Edit',
        method: 'post',
        data
    });
}
export function delMenu(data: object) {
    return request<any>({
        url: '/default/Menu/Del',
        method: 'post',
        data
    });
}
export function delBatchMenu(data: object) {
    return request<any>({
        url: '/default/Menu/DelBatch',
        method: 'post',
        data
    });
}
