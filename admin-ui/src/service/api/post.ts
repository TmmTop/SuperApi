/*
 * @Author: 490912587@qq.com
 * @Date: 2024-04-30 15:08:20
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-14 17:11:43
 * @FilePath: \admin-ui\src\service\api\post.ts
 * @Description: 
 */
import { request } from '../request';
import qs from 'qs';
export function getPost(params: object) {
    return request<any>({ url: '/default/Post/List?' + qs.stringify(params) });
}
export function getPostPage(params: object) {
    return request<any>({ url: '/default/Post/Page?' + qs.stringify(params) });
}
export function addPost(data: object) {
    return request<any>({
        url: '/default/Post',
        method: 'post',
        data
    });
}
export function editPost(data: object) {
    return request<any>({
        url: '/default/Post/Edit',
        method: 'post',
        data
    });
}
export function delPost(data: object) {
    return request<any>({
        url: '/default/Post/Del',
        method: 'post',
        data
    });
}
