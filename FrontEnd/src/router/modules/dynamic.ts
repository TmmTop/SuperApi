/*
 * @Author: 490912587@qq.com
 * @Date: 2023-12-07 13:30:39
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 13:45:54
 * @FilePath: \FrontEnd\src\router\modules\dynamic.ts
 * @Description: 
 */
const dynamic: AuthRoute.Route = {
  name: 'dynamic',
  path: '/dynamic',
  component: 'basic',
  children: [
    {
      name: 'dynamic_model',
      path: '/dynamic/model',
      component: 'self',
      meta: {
        title: '数据模型',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis',
        //   i18nTitle: 'routes.dashboard.analysis'
      }
    },
    {
      name: 'dynamic_api',
      path: '/dynamic/api',
      component: 'self',
      meta: {
        title: '接口调试',
        requiresAuth: true,
        icon: 'icon-park-outline:workbench',
        //   i18nTitle: 'routes.dashboard.workbench'
      }
    }
  ],
  meta: {
    title: '超级API',
    icon: 'mdi:monitor-dashboard',
    order: 3,
    //   i18nTitle: 'routes.dashboard._value'
  }
};

export default dynamic;
