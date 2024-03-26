<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="120" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="账号" path="account">
          <n-input v-model:value="formModel.account" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="昵称" path="nickName">
          <n-input v-model:value="formModel.nickName" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="手机号" path="phone">
          <n-input v-model:value="formModel.phone" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="是否付费" path="isExpire">
          <n-select v-model:value="formModel.isExpire" :options="statusOptions" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="数据库IP" path="host">
          <n-input v-model:value="formModel.host" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="数据库类型" path="dbType">
          <n-select v-model:value="formModel.dbType" :options="dbTypeOptions" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="数据库账号" path="connAccount">
          <n-input v-model:value="formModel.connAccount" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="数据库密码" path="connPassword">
          <n-input v-model:value="formModel.connPassword" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch, defineEmits } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { formRules, createRequiredFormRule } from '@/utils';
import { addTenant, editTenant } from '@/service/api/dynamic';
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /**
   * 弹窗类型
   * add: 新增
   * edit: 编辑
   */
  type?: 'add' | 'edit';
  /** 编辑的表格行数据 */
  editData?: UserManagement.User | null;
}

export type ModalType = NonNullable<Props['type']>;

defineOptions({ name: 'TableActionModal' });
const statusOptions = ref([{ label: "未过期", value:2 }, { label: "已过期", value: 1 }]);
const dbTypeOptions = ref([
  { label: "MySql", value: 0 },
  { label: "SqlServer", value: 1 },
  { label: "Sqlite", value: 2 },
  { label: "Oracle", value: 3 },
  { label: "PostgreSQL", value: 4 }
]);
const props = withDefaults(defineProps<Props>(), {
  type: 'add',
  editData: null
});

// interface Emits {
//   (e: 'update:visible', visible: boolean): void;
// }

const emit = defineEmits();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});
const closeModal = () => {
  modalVisible.value = false;
};

const title = computed(() => {
  const titles: Record<ModalType, string> = {
    add: '添加用户',
    edit: '编辑用户'
  };
  return titles[props.type];
});

const formRef = ref<HTMLElement & FormInst>();


const formModel = reactive<any>(createDefaultFormModel());

const rules: Record<keyof any, FormItemRule | FormItemRule[]> = {
  account: createRequiredFormRule('请输入用户名'),
  nickName: createRequiredFormRule('请输入年龄'),
  phone: formRules.phone,
};

function createDefaultFormModel() {
  return {
    id: 0,
    account: '',
    nickName: '',
    phone: '',
    host: '',
    dbType: '',
    connAccount: '',
    connPassword: '',
    isExpire: 0
  };
}

function handleUpdateFormModel(model: Partial<any>) {
  Object.assign(formModel, model);
}

function handleUpdateFormModelByModalType() {
  const handlers: Record<ModalType, () => void> = {
    add: () => {
      const defaultFormModel = createDefaultFormModel();
      handleUpdateFormModel(defaultFormModel);
    },
    edit: () => {
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      }
    }
  };

  handlers[props.type]();
}

async function handleSubmit() {
  await formRef.value?.validate();
  const params = {
    id: formModel.id,
    account: formModel.account,
    nickName: formModel.nickName,
    phone: formModel.phone,
    host: formModel.host,
    dbType: formModel.dbType,
    connAccount: formModel.connAccount,
    connPassword: formModel.connPassword,
    isExpire: formModel.isExpire.toString()
  };
  if (props.type == "add") {
    const data = await addTenant(params);
    if (data.data.code === 200) {
      window.$message?.success('新增成功!');
    }
  }
  if (props.type == "edit") {
    const data = await editTenant(params);
    if (data.data.code === 200) {
      window.$message?.success('修改成功!');
    }
  }
  emit("refresh");
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateFormModelByModalType();
    }
  }
);
</script>

<style scoped></style>
