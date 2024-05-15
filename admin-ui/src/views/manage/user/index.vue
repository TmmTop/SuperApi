<!--
 * @Author: 490912587@qq.com
 * @Date: 2024-01-05 15:31:29
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-14 13:25:10
 * @FilePath: \admin-ui\src\views\manage\user\index.vue
 * @Description: 
-->
<template>
  <div class="h-full">
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #pagination-left>
        <fs-button icon="ion:trash-outline" @click="handleBatchDelete" />
      </template>
    </fs-crud>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from 'vue';
import { useFs, useExpose, useCrud } from '@fast-crud/fast-crud';
import createCrudOptions from './crud';
import { useDialog, useMessage } from 'naive-ui';
import { delBatchUser} from '@/service/api/index';
export default defineComponent({
  name: 'ComponentCrud',
  setup() {
    const crudRef = ref();
    const crudBinding = ref();
    const { expose } = useExpose({ crudRef, crudBinding });
    const { crudOptions, selectedIds } = createCrudOptions({ expose });
    const { resetCrudOptions } = useCrud({ expose, crudOptions });
    onMounted(() => {
      expose.doRefresh();
    });
    const message = useMessage();
    const dialog = useDialog();
    const handleBatchDelete = async () => {
      if (selectedIds.value?.length > 0) {
        await dialog.info({
          title: '确认',
          content: `确定要批量删除这${selectedIds.value.length}条记录吗`,
          positiveText: '确定',
          negativeText: '取消',
          async onPositiveClick() {
            await delBatchUser(selectedIds.value);
            message.info('删除成功');
            selectedIds.value = [];
            await expose.doRefresh();
          },
        });
      } else {
        message.error('请勾选要删除的记录');
      }
    };
    return {
      crudBinding,
      crudRef,
      handleBatchDelete
    };
  }
});
</script>
