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
    account: 'Super',
    password: 'super123'
  },
  {
    key: 'admin',
    label: userRoleLabels.admin,
    account: 'Admin',
    password: 'admin123'
  },
  {
    key: 'user',
    label: userRoleLabels.user,
    account: 'User01',
    password: 'user01123'
  }
];

function login(account: string, password: string) {
  emit('login', { account, password });
}
</script>

<style scoped></style>
