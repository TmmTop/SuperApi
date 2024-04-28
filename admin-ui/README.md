<div align="center">
	<p align="center">
	    <a href="https://v3.vuejs.org/" target="_blank">
	        <img src="https://img.shields.io/badge/vue.js-vue3.x-green" alt="vue">
	    </a>
	    <a href="https://element-plus.gitee.io/#/zh-CN/component/changelog" target="_blank">
	        <img src="https://img.shields.io/badge/element--plus-%3E1.0.0-blue" alt="element plus">
	    </a>
		<a href="https://www.tslang.cn/" target="_blank">
	        <img src="https://img.shields.io/badge/typescript-%3E4.0.0-blue" alt="typescript">
	    </a>
		<a href="https://vitejs.dev/" target="_blank">
		    <img src="https://img.shields.io/badge/vite-%3E2.0.0-yellow" alt="vite">
		</a>
		<a href="https://gitee.com/diygw/diygw-ui-admin/blob/master/LICENSE" target="_blank">
		    <img src="https://img.shields.io/badge/license-MIT-success" alt="license">
		</a>
	</p>
	<p>&nbsp;</p>
</div>

#### 🌈 介绍

基于 vue3.x + CompositionAPI + typescript + vite + element plus + vue-router-next + pinia，适配手机、平板、pc 的后台开源免费模板，希望减少工作量，帮助大家实现快速开发。

#### 💒 代码仓库

- <a href="https://gitee.com/diygw/diygw-ui-admin" target="_blank">https://gitee.com/diygw/diygw-ui-admin</a>

#### 💒 集成后端

- <a target="_blank" href="https://gitee.com/diygw/diygw-ui-php">基于 thinkphp8 实现的 DIYGW-UI-PHP</a>

#### 💒 在线可视化集成教程

- <a target="_blank" href="https://www.bilibili.com/video/BV1CP411V7TV?spm_id_from=333.999.0.0&vd_source=dc541827a3c20d8e063187146f12aa57">在线视频教程</a>

#### ⚡ ⚡ ⚡ ⚡ ⚡ 重要配置

> 为了开发的方便，环境已关闭了动态路由，启用静态路由，如需要开启动态路由，请配置 stores--->themeConfig.ts---->isRequestRoutes 设置为 true。
> 如果已运行后，在后台管理界面主题设置，重置所有的设置。

#### 🏭 环境支持

| Edge                                                                     | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |

> 由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。

#### ⚡ 使用说明

```bash
# 克隆项目
git clone https://gitee.com/diygw/diygw-ui-admin.git

# 进入项目 桌面 cmd 运行
cd diygw-ui-admin

# 推荐使用yarn 也可参照后面直接使用npm
# 安装 yarn
npm install -g yarn

# 安装依赖
yarn

# 修改配置
修改.env下VITE_API_PROXY地址改成你的后台地址。对应diygw-ui-php安装的域名地址。

# 运行项目
yarn dev

# 打包发布
yarn build
打包成功后直接把dist目录下所有文件拷贝到diygw-ui-php\public\admin目录下


# 或者直接使用NPM
# 安装依赖
npm install

# 运行项目
npm run dev

# 打包发布
npm run build

```

### ⚡ 路由开启

DIY 可视化为了设计后台方便，关闭了动态路由功能，如果需要开启数据库加载动态路由功能，请开启 stores/themeConfig.ts 找到 isRequestRoutes 设置为 true，即可。设置后如果已经登录清下缓存，退出后重新登录即可。

### ⚡ 部分截图

![DIYGW可视化UNIAPP代码生成器](https://libs.diygw.com/upload/1/php0.png)
![DIYGW可视化支持轻松在线可视化导出微信小程序代码](https://libs.diygw.com/upload/1/php1.png)
![DIYGW可视化支持轻松在线可视化导出支付宝小程序代码](https://libs.diygw.com/upload/1/php2.png)
![DIYGW可视化头条小程序代码生成器](https://libs.diygw.com/upload/1/php3.png)
![DIYGW可视化H5代码生成器](https://libs.diygw.com/upload/1/php4.png)
![DIYGW可视化Element Plus代码生成器](https://libs.diygw.com/upload/1/php5.png)

#### ❤️ 鸣谢列表

- <a href="https://github.com/vuejs/vue" target="_blank">vue</a>
- <a href="https://github.com/vuejs/vue-next" target="_blank">vue-next</a>
- <a href="https://github.com/ElemeFE/element" target="_blank">element-ui</a>
- <a href="https://github.com/element-plus/element-plus" target="_blank">element-plus</a>
- <a href="https://github.com/vuejs/vue-router-next" target="_blank">vue-router-next</a>
- <a href="https://pinia.vuejs.org/" target="_blank">pinia</a>
- <a href="https://github.com/apache/echarts" target="_blank">echarts</a>
- <a href="https://github.com/axios/axios" target="_blank">axios</a>
- <a href="https://github.com/zenorocha/clipboard.js" target="_blank">clipboard</a>
- <a href="https://github.com/inorganik/countUp.js" target="_blank">countUp</a>
- <a href="https://github.com/developit/mitt" target="_blank">mitt</a>
- <a href="https://github.com/rstacruz/nprogress" target="_blank">nprogress</a>
- <a href="https://github.com/sindresorhus/screenfull.js" target="_blank">screenfull</a>
- <a href="https://github.com/SortableJS/Sortable" target="_blank">sortablejs</a>
- <a href="https://github.com/sass/sass" target="_blank">sass</a>
- <a href="https://github.com/microsoft/TypeScript" target="_blank">typescript</a>
- <a href="https://github.com/vitejs/vite" target="_blank">vite</a>
- <a href="https://github.com/wangeditor-team/wangEditor" target="_blank">wangeditor</a>
- <a href="https://github.com/fengyuanchen/cropperjs" target="_blank">cropperjs</a>
- <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">qrcodejs</a>
- <a href="https://github.com/crabbly/Print.js" target="_blank">print-js</a>
- <a href="https://github.com/likaia/screen-shot" target="_blank">vue-web-screen-shot</a>
- <a href="https://github.com/jbaysolutions/vue-grid-layout" target="_blank">vue-grid-layout</a>
- <a href="https://github.com/antoniandre/splitpanes" target="_blank">splitpanes</a>
- <a href="https://github.com/yimijianfang/vue-drag-verify" target="_blank">vue-drag-verify</a>
- <a href="https://github.com/jsplumb/jsplumb" target="_blank">jsplumb</a>

#### 💕 特别感谢

- <a href="https://gitee.com/lyt-top/vue-next-admin" target="_blank">@lyt-Top</a>

#### 💌 支持作者

如果觉得框架不错，或者已经在使用了，希望你可以去 <a target="_blank" href="https://gitee.com/diygw/diygw-ui-admin">Gitee</a> 帮我点个 ⭐ Star，这将是对我极大的鼓励与支持。
