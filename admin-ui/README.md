<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-12-20 10:44:09
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-16 11:46:06
 * @FilePath: \admin-ui\README.md
 * @Description:git add . git commit -m "" --no-verify git push
-->

# SuperApi

## 🎁 框架介绍

快速将你的 idea 变成线上稳定运行的产品！
无实体建库建表，对无实体库表进行增删改查，支持 15 种条件查询，以及分页，列表，无限级树形列表 等功能的 API 部署！
拥有接口文档，Auth 授权，接口限流，获取客户端真实 IP，先进的服务器缓存组件，动态 API 等功能，期待您的体验！
从此告别加班，告别知识付费！

```
阅历痛点，相见恨晚！让您的 idea 变现更简单，更通用，更流行！
```

## 🍖 纯净依赖

1. Panda.DynamicWebApi 动态 API
2. SqlSugar 宇宙第一 ORM 没有之一
3. Swashbuckle.AspNetCore 自动构建 Swagger 接口文档
4. 跨平台支持，linux，macos，windows 均可做到无需安装任何环境，直接运行
5. SoybeanAdmin 基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia 和 UnoCSS
6. FastCrud （简称fs） 是基于Vue3的面向配置的crud开发框架，快速开发crud功能，可作为低代码平台的基础框架

## 🎖️ 开发教程

1. Visual Studio 2022 或者 Rider 打开 SuperApi.sln
2. .NET 8 SDK
3. SuperApi 设为启动项启动，运行即可启动服务端
4. VSCode 打开 admin-ui 目录，命令行执行 `pnpm install` 安装依赖,  执行 `pnpm run dev` 启动前端项目

## 🍁 使用说明

1. 打开 SuperApi/SuperApi.sln 解决方案，进入 Configuration 目录，配置数据库以及其它配置项，将 SuperApi 设为启动项运行即可
2. 打开 FrontEnd，命令行执行 `pnpm install` 安装依赖（如果没有 pnpm，执行 `npm install -g pnpm`），
3. 执行 `pnpm run dev`
4. 启动后，浏览器会自动打开接口文档，即可放飞自我
5. 账号 `admin` 密码 `sp123456`

## 🍁 小秘密

1. 为了方便不懂技术的用户使用，特意发布一版应用程序
2. 支持 linux mac windows 的 x64 x32 以及各种操作系统的二进制文件 直接启动即可运行
3. 项目启动后，在浏览器输入 `http://你的ip:3000/index.html` 即可进入管理系统
4. 不需要安装额外的任何环境即可启动本系统，数据库等一些外部软件需要自己安装
5. 修改软件配置，可以在 doc/SuperApi 发行版目录压缩文件的 Configuration 里面的 config 文件进行修改
6. Database.config 是数据库配置，默认为 SQLite，App.json 是软件相关配置，urls 是软件启动端口可自行修改

## 🍁SqlServer 异常解决办法

<table>
    <tr>
        <td><img src="https://foruda.gitee.com/images/1703807376565588436/ab346804_1223089.png"/></td>
        <td><img src="https://foruda.gitee.com/images/1703756458715958552/ef1c8cb3_6522206.png"/></td>
    </tr>
</table>

## 💐 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

## 如需免费帮助服务，请加 SuperApi 技术交流群：`526521167`，联系群主免费帮助

<img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/qun.png"/>

## 🍎 效果截图

<table>
    <tr>
        <td><img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/1.png"/></td>
        <td><img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/3.png"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/4.png"/></td>
        <td><img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/555.png"/></td>
    </tr>
</table>

## 🎀 捐赠支持

```
如果对您有帮助，请点击右上角 ⭐Star关注 或 扫码捐赠，感谢支持开源！
```

<img src="https://gitee.com/tmm-top/SuperApi/raw/master/doc/zanshang.jpg"/>
