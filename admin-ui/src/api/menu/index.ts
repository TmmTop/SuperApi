import request from '@/utils/request';

/**
 * 后端控制菜单
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getMenuAdmin 获取后端动态路由菜单
 */
export function useMenuApi() {
	return {
		getMenuAdmin: (params?: object) => {
			return request({
				url: '/admin/index/getMenuAdmin',
				method: 'get',
				params,
			});
		}
	};
}
