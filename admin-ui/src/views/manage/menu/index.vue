<!--
 * @Author: 490912587@qq.com
 * @Date: 2024-01-05 15:31:29
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-09 17:23:18
 * @FilePath: \admin-ui\src\views\manage\menu\index.vue
 * @Description: 
-->
<template>
  <div class="h-full">
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <!-- <template #actionbar-right>
        <span>示例说明：1、勾选记录，然后点击下方pagination左边的删除按钮进行批量删除。2、第一条记录配置为不可选</span>
      </template> -->
      <template #pagination-left>
        <fs-button icon="ion:trash-outline" @click="handleBatchDelete" />
      </template>
    </fs-crud>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useFs, useExpose } from '@fast-crud/fast-crud';
import createCrudOptions from './crud';
import { useDialog, useMessage } from 'naive-ui';
export default defineComponent({
  name: 'ComponentCrud',
  setup() {
    const { crudRef, crudBinding, crudExpose } = useFs({ createCrudOptions });
    // 暴露的方法
    const { expose } = useExpose({ crudRef, crudBinding });
    // 你的crud配置
    const { crudOptions, selectedIds } = createCrudOptions({ expose });
    // 页面打开后获取列表数据
    onMounted(() => {
      crudExpose.doRefresh();
    });
    const message = useMessage();
    const dialog = useDialog();
    const handleBatchDelete = async () => {
      console.log(selectedIds.value);
      
      if (selectedIds.value?.length > 0) {
        await dialog.info({
          title: '确认',
          content: `确定要批量删除这${selectedIds.value.length}条记录吗`,
          positiveText: '确定',
          negativeText: '取消',
          async onPositiveClick() {
            await BatchDelete(selectedIds.value);
            message.info('删除成功');
            selectedIds.value = [];
            await expose.doRefresh();
          },
        });
      } else {
        message.error('请先勾选记录');
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
