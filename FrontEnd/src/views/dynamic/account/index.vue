<template>
  <div class="overflow-hidden">
    <n-card title="用户管理" :bordered="false" class="h-full rounded-8px shadow-sm">
      <div class="flex-col h-full">
        <n-space class="pb-12px" justify="space-between">
          <n-space>
            <n-button type="primary" @click="handleAddTable">
              <icon-ic-round-plus class="mr-4px text-20px" />
              新增
            </n-button>
            <!-- <n-button type="error">
              <icon-ic-round-delete class="mr-4px text-20px" />
              删除
            </n-button>
            <n-button type="success">
              <icon-uil:export class="mr-4px text-20px" />
              导出Excel
            </n-button> -->
          </n-space>
          <n-space align="center" :size="18">
            <n-button size="small" type="primary" @click="getTableData">
              <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
              刷新表格
            </n-button>
            <column-setting v-model:columns="columns" />
          </n-space>
        </n-space>
        <n-data-table :columns="columns" :data="tableData" remote :loading="loading" :pagination="pagination" flex-height
          class="flex-1-hidden" />
        <table-action-modal @refresh="init" v-model:visible="visible" :type="modalType" :edit-data="editData" />
      </div>
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { getTenantPage, delTenant } from '@/service/api/dynamic';
import { useBoolean, useLoading } from '@/hooks';
import TableActionModal from './components/table-action-modal.vue';
import type { ModalType } from './components/table-action-modal.vue';
import ColumnSetting from './components/column-setting.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<any>([]);
function setTableData(data: UserManagement.User[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const data = await getTenantPage({ ...pagination });
  if (data.data.code === 200) {

    setTableData(data.data.data.list);
    endLoading();

  }
}
const dbTypeOptions = ref([
  { label: "MySql", value: 0 },
  { label: "SqlServer", value: 1 },
  { label: "Sqlite", value: 2 },
  { label: "Oracle", value: 3 },
  { label: "PostgreSQL", value: 4 }
]);
const columns: Ref<any> = ref([
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'index',
    title: '序号',
    align: 'center',
    render: (_, index) => {
      return `${index + 1}`
    }
  },
  {
    key: 'account',
    title: '账号',
    align: 'center',
  },
  {
    key: 'nickName',
    title: '昵称',
    align: 'center',
  },
  {
    key: 'phone',
    title: '手机号码',
    align: 'center',
    width: 180
  },
  {
    key: 'host',
    title: '数据库IP',
    align: 'center',
  },
  {
    key: 'dbType',
    title: '数据库类型',
    align: 'center',
    render: (row: any) => {
      const index = dbTypeOptions.value.findIndex(x => x.value == row.dbType);
      if (index > -1) { return dbTypeOptions.value[index].label; }
      else {
        return "";
      }
    }
  },
  {
    key: 'connAccount',
    title: '数据库账号',
    align: 'center',
  },
  {
    key: 'connPassword',
    title: '数据库密码',
    align: 'center',
  },
  {
    key: 'isExpire',
    title: '是否付费',
    align: 'center',
    render: (row: any) => {
      const tagTypes: Record<any, NaiveUI.ThemeColor> = {
        '0': 'success',
        '1': 'error',
      };
      return <NTag type={tagTypes[row.isExpire]}>{row.isExpire <= 0 ? "已付费" : "未付费"}</NTag>;
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    width: 200,
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<any>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<UserManagement.User | null>(null);

function setEditData(data: UserManagement.User | null) {
  editData.value = data;
}

function handleAddTable() {
  openModal();
  setModalType('add');
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find((item: any) => item.id === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}

async function handleDeleteTable(rowId: string) {
  const data = await delTenant({ id: rowId });
  if (data.data.code === 200) {
    window.$message?.success('删除成功!');
    init();
  }
}
const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
