<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 13:21:09
 * @FilePath: \FrontEnd\src\views\_builtin\login\components\pwd-login\index.vue
 * @Description: 
-->
<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="account">
      <n-input v-model:value="model.account" :placeholder="$t('page.login.common.accountPlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">{{ $t('page.login.pwdLogin.rememberMe') }}</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >
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
import { formRules } from '@/utils';
import { OtherAccount } from './components';

const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  account: 'admin',
  password: '04800093d86ad2bb6e1ddca72dbfb6322e0af01f6f78b4d18a72eba42aa2f1adb7b2cb636473dbd502f06e195786b927bbc1f951c12c8a3771617c5d848577506447c6bf02b31181c9712b6a5cf4b434ad11c2078d9c777c52b532079236708d289cde20097da8'
});

const rules: FormRules = {
  //password: formRules.pwd
};

const rememberMe = ref(false);

async function handleSubmit() {
  await formRef.value?.validate();

  const { account, password } = model;

  login(account, password);
}

function handleLoginOtherAccount(param: { account: string; password: string }) {
  const { account, password } = param;
  login(account, password);
}
</script>

<style scoped></style>
