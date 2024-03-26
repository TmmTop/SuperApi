<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 13:39:00
 * @FilePath: \FrontEnd\src\views\about\components\project-introduction.vue
 * @Description: 
-->
<template>
  <n-card title="关于" :bordered="false" size="large" class="rounded-8px shadow-sm">
    <p class="leading-24px">
      SuperApi 是一个基于 Vue3、Vite、Naive UI、TypeScript
      的中后台解决方案，它使用了最新的前端技术栈，无实体Crud，fast-crud等技术不仅加速项目开发周期，
      并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。
    </p>
  </n-card>
</template>

<script setup lang="ts">
defineOptions({ name: 'ProjectIntroduction' });
</script>

<style scoped></style>
