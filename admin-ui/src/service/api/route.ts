import { request } from '../request';

/** get constant routes */
/** 基础路由，不依赖布局的页面路由放到此处 */
export function fetchGetConstantRoutes() {
  return request<Api.Route.UserRoute>({ url: '/default/Menu/ConstRoutes' });
}

/** get user routes */
export function fetchGetUserRoutes() {
  return request<Api.Route.UserRoute>({ url: '/default/Menu/UserRoutes' });
}

/**
 * whether the route is exist
 *
 * @param routeName route name
 */
export function fetchIsRouteExist(routeName: string) {
  return request<boolean>({ url: '/route/isRouteExist', params: { routeName } });
}
