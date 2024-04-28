//默认静态页面路由，替换src/route/frontRoute.ts
import { RouteRecordRaw } from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * 前端添加路由，请在顶级节点的 `children 数组` 里添加
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @returns 返回路由菜单数据
 */
let routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		meta: {
			isKeepAlive: true
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home.vue'),
				meta: {
					title: '首页',
					isLink: '',
					isHide: false,
					isKeepAlive: false,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'diy-icon-home'
				}
			},
			{
				path: '/clazz',
				name: 'clazz',
				component: () => import('@/layout/routerView/parent.vue'),
				redirect: '/clazz/xuesheng',
				meta: {
					title: '班级管理',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'diy-icon-choiceness'
				},
				children: [
					{
						path: '/clazz/xuesheng',
						name: 'clazzxuesheng',
						component: () => import('@/views/clazz/xuesheng.vue'),
						meta: {
							title: '学生管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-star'
						}
					},
					{
						path: '/clazz/laoshi',
						name: 'clazzlaoshi',
						component: () => import('@/views/clazz/laoshi.vue'),
						meta: {
							title: '老师管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-yuyin'
						}
					},
					{
						path: '/clazz/index',
						name: 'clazzindex',
						component: () => import('@/views/clazz/index.vue'),
						meta: {
							title: '班级管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-home'
						}
					},
					{
						path: '/clazz/kemu',
						name: 'clazzkemu',
						component: () => import('@/views/clazz/kemu.vue'),
						meta: {
							title: '科目管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-circle'
						}
					}
				]
			},
			{
				path: '/sell',
				name: 'sell',
				component: () => import('@/layout/routerView/parent.vue'),
				redirect: '/sell/fenlei',
				meta: {
					title: '进销存',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'diy-icon-shop'
				},
				children: [
					{
						path: '/sell/fenlei',
						name: 'sellfenlei',
						component: () => import('@/views/sell/fenlei.vue'),
						meta: {
							title: '分类管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-circle'
						}
					},
					{
						path: '/sell/shangpin',
						name: 'sellshangpin',
						component: () => import('@/views/sell/shangpin.vue'),
						meta: {
							title: '商品管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-lihe'
						}
					},
					{
						path: '/sell/ruku',
						name: 'sellruku',
						component: () => import('@/views/sell/ruku.vue'),
						meta: {
							title: '入库管理',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-lihe'
						}
					}
				]
			},
			{
				path: '/workflow',
				name: 'workflow',
				component: () => import('@/layout/routerView/parent.vue'),
				redirect: '/workflow/definition',
				meta: {
					title: '工作流',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'diy-icon-activity'
				},
				children: [
					{
						path: '/workflow/definition',
						name: 'workflowdefinition',
						component: () => import('@/views/workflow/definition.vue'),
						meta: {
							title: '流程设计',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-fork'
						}
					},
					{
						path: '/workflow/design',
						name: 'workflowdesign',
						component: () => import('@/views/workflow/design.vue'),
						meta: {
							title: '流程设计',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'diy-icon-repair'
						}
					}
				]
			}
		]
	}
];

export const frontRoutes = {
	dynamicRoutes: routes
};
