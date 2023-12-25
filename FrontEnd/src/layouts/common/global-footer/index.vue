<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 13:37:47
 * @FilePath: \FrontEnd\src\layouts\common\global-footer\index.vue
 * @Description: 
-->
<template>
  <dark-mode-container class="flex-center h-full" :inverted="theme.footer.inverted">
    <span>Copyright ©2021 SuperApi</span>
  </dark-mode-container>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';

defineOptions({ name: 'GlobalFooter' });

const theme = useThemeStore();
</script>

<style scoped></style>
