import { request } from '../request';

/** get constant routes */
/** 基础路由，不依赖布局的页面路由放到此处 */
export function fetchGetConstantRoutes() {
  return {
    code: "0000",
    data: [
      {
        "name": "login",
        "path": "/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?",
        "component": "layout.blank$view.login",
        "props": true,
        "meta": {
          "title": "login",
          "i18nKey": "route.login",
          "constant": true,
          "hideInMenu": true
        }
      },
      {
        "name": "403",
        "path": "/403",
        "component": "layout.blank$view.403",
        "meta": {
          "title": "403",
          "i18nKey": "route.403",
          "constant": true,
          "hideInMenu": true
        }
      },
      {
        "name": "404",
        "path": "/404",
        "component": "layout.blank$view.404",
        "meta": {
          "title": "404",
          "i18nKey": "route.404",
          "constant": true,
          "hideInMenu": true
        }
      },
      {
        "name": "500",
        "path": "/500",
        "component": "layout.blank$view.500",
        "meta": {
          "title": "500",
          "i18nKey": "route.500",
          "constant": true,
          "hideInMenu": true
        }
      }
    ], msg: "请求成功！"
  }
}

/** get user routes */
export function fetchGetUserRoutes() {
  return request<Api.Route.UserRoute>({ url: '/route/getUserRoutes' });
}

/**
 * whether the route is exist
 *
 * @param routeName route name
 */
export function fetchIsRouteExist(routeName: string) {
  return request<boolean>({ url: '/route/isRouteExist', params: { routeName } });
}
