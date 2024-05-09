import { request } from '../request';
import qs from 'qs';
export function getMenuPage(params: object) {
    return request<boolean>({ url: '/default/Menu/Tree?' + qs.stringify(params) });
}
export function addMenu(data: object) {
    return request<boolean>({ url: '/default/Menu', data });
}
export function editMenu(data: object) {
    return request<boolean>({ url: '/default/Menu/Edit', data });
}
export function delMenu(data: object) {
    return request<boolean>({ url: '/default/Menu/Del', data });
}
