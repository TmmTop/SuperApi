<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-26 14:06:50
 * @FilePath: \FrontEnd\src\views\_builtin\login\components\pwd-login\components\other-account.vue
 * @Description: 
-->
<template>
  <n-space :vertical="true">
    <n-divider class="!mb-0 text-14px text-#666">{{ $t('page.login.pwdLogin.otherAccountLogin') }}</n-divider>
    <n-space justify="center">
      <n-button
        v-for="item in accounts"
        :key="item.account"
        type="primary"
        @click="login(item.account, item.password)"
      >
        {{ item.label }}
      </n-button>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { userRoleLabels } from '@/constants';
import { $t } from '@/locales';

interface Emits {
  (e: 'login', param: { account: string; password: string }): void;
}

const emit = defineEmits<Emits>();

interface Account {
  key: Auth.RoleType;
  label: string;
  account: string;
  password: string;
}

const accounts: Account[] = [
  {
    key: 'super',
    label: userRoleLabels.super,
    account: 'admin',
    password: '123456'
  },
  {
    key: 'admin',
    label: userRoleLabels.admin,
    account: 'admin',
    password: '123456'
  },
  {
    key: 'user',
    label: userRoleLabels.user,
    account: 'admin',
    password: '123456'
  }
];

function login(account: string, password: string) {
  emit('login', { account, password });
}
</script>

<style scoped></style>
