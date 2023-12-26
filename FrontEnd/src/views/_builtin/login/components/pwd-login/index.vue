<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-26 14:05:45
 * @FilePath: \FrontEnd\src\views\_builtin\login\components\pwd-login\index.vue
 * @Description: 
-->
<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="account">
      <n-input v-model:value="model.account" :placeholder="$t('page.login.common.accountPlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="model.password" type="password" show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">{{ $t('page.login.pwdLogin.rememberMe') }}</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </n-button>
      </div>
      <n-button type="primary" size="large" :block="true" :round="true" :loading="auth.loginLoading"
        @click="handleSubmit">
        {{ $t('page.login.common.confirm') }}
      </n-button>
      <div class="flex-y-center justify-between">
        <n-button class="flex-1" :block="true" @click="toLoginModule('code-login')">
          {{ loginModuleLabels['code-login'] }}
        </n-button>
        <div class="w-12px"></div>
        <n-button class="flex-1" :block="true" @click="toLoginModule('register')">
          {{ loginModuleLabels.register }}
        </n-button>
      </div>
    </n-space>
    <other-account @login="handleLoginOtherAccount" />
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { loginModuleLabels } from '@/constants';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { requiredFormRule } from '@/utils';
import { OtherAccount } from './components';
import { sm2 } from 'sm-crypto-v2';
const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<HTMLElement & FormInst>();
const publicKey = `0484C7466D950E120E5ECE5DD85D0C90EAA85081A3A2BD7C57AE6DC822EFCCBD66620C67B0103FC8DD280E36C3B282977B722AAEC3C56518EDCEBAFB72C5A05312`;
const model = reactive({
  account: 'admin',
  password: "123456"
});

const rules: FormRules = {
  account: requiredFormRule,
  password: requiredFormRule,
};
const rememberMe = ref(false);
async function handleSubmit() {
  await formRef.value?.validate();
  const { account, password } = model;
  login(account, sm2.doEncrypt(password, publicKey, 1));
}

function handleLoginOtherAccount(param: { account: string; password: string }) {
  const { account, password } = param;
  login(account, sm2.doEncrypt(password, publicKey, 1));
}
</script>

<style scoped></style>
