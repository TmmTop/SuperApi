import { request } from '../request';
import qs from 'qs';
export function getMenuTree(params: object) {
    return request<any>({ url: '/default/Menu/Tree?' + qs.stringify(params) });
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
