<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-12-07 14:19:28
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-25 14:09:47
 * @FilePath: \FrontEnd\src\views\dynamic\api\index.vue
 * @Description: 
-->
<template>
  <div class="overflow-hidden">
    <n-grid :cols="24" class="h-full">
      <n-gi :span="12">
        <n-card title="动态API接口调试" :bordered="false" class="h-full rounded-8px shadow-sm">
          <div class="flex-col h-full">
            <n-space vertical>
              <n-input-group>
                <div class="w-25"> 实体对象：</div>
                <n-select v-model:value="currentTable" @update:value="handleUpdateTable" :options="tableNames" />
              </n-input-group>
              <n-input-group>
                <div class="w-25"> Crud方式：</div>
                <n-select v-model:value="currentType" :options="requestTypes" />
              </n-input-group>
              <n-input-group>
                <n-button class="flex-1-hidden" type="success" @click="handleSend">
                  发送请求
                </n-button>
              </n-input-group>
              <n-input-group>
                <div class="flex-col  h-140">
                  <n-space class="pb-12px" justify="space-between">
                    <n-space>
                      <n-button type="primary" @click="handleAdd()">
                        <icon-ic-round-plus class="mr-4px text-20px" />
                        新增参数
                      </n-button>
                    </n-space>
                    <n-space>
                      <n-button @click="handleReset">
                        <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
                        重置
                      </n-button>
                    </n-space>
                  </n-space>
                  <n-data-table :columns="columns" :data="params" flex-height class="flex-1-hidden" />
                </div>
              </n-input-group>
            </n-space>
          </div>
        </n-card>
      </n-gi>
      <n-gi :span="1"></n-gi>
      <n-gi :span="11">
        <n-card title="动态API接口调试输出" :bordered="false" class="h-full rounded-8px shadow-sm">
          <div class="flex-col h-full">
            <n-input type="textarea" :readonly="true" v-model:value="requestResult" placeholder="请求结果" :autosize="{
              minRows: 30,
              maxRows: 30,
            }" />
          </div>
        </n-card></n-gi>
    </n-grid>
  </div>
</template>
<script setup lang="tsx">
import { ref, h } from 'vue';
import type { Ref } from 'vue';
import { NButton, NInput, NSelect, NPopconfirm, NSpace } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import {fetchList} from "@/service/api/dynamic";
import { useLoading } from '@/hooks';
import qs from "qs";
const { loading } = useLoading(false);
import axios from 'axios';
const tableNames = ref([] as any[]);
const params = ref([] as any[]);
const currentTable = ref("");
const currentType = ref("");
const requestResult = ref("111");
const requestTypes = ref([
  {
    label: '添加请求',
    value: 'add'
  },
  {
    label: '修改请求',
    value: 'edit'
  },
  {
    label: '删除请求',
    value: 'del'
  },
  {
    label: 'List条件请求',
    value: 'list',
  },
  {
    label: 'PageList分页条件请求',
    value: 'page',
  },
  {
    label: 'ListTree树形List条件请求',
    value: 'tree',
  },
  {
    label: 'One单记录条件请求',
    value: 'one',
  }
]);
const columns: Ref<DataTableColumns<any>> = ref([
  {
    key: 'key',
    title: '参数名',
    align: 'center',
    render(row, index) {
      return h(NInput, {
        key: index,
        value: row.pKey,
        onUpdateValue(v) {
          params.value[index].pKey = v
        }
      })
    }
  },
  {
    key: 'value',
    title: '参数值',
    align: 'center',
    render(row, index) {
      return h(NInput, {
        key: index,
        value: row.pValue,
        onUpdateValue(v) {
          params.value[index].pValue = v
        }
      })
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    width: 280,
    render: (row: any) => {
      return (
        <NSpace justify={'space-around'}>
          <NPopconfirm onPositiveClick={() => { }}>
            {{
              default: () => '确认删除此参数',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<any>>;

//获取租户下的所有表
const genTables = async () => {
  var config = {
    method: 'get',
    url: "http://localhost:5222/api/tenant/tables",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded "
    },
    params: {
      'tenantName': "admin",
    }
  };
  const { data } = await axios(config);
  if (data.code === 200) {
    data.data.forEach((info: any) => {
      tableNames.value.push({
        label: info.TABLE_NAME,
        value: info.TABLE_NAME
      })
    });
  }
}
const handleAdd = () => {
  params.value.push({
    pKey: '',
    pValue: "",
  });
}
const handleReset = () => {
  params.value = [];
}
const handleSend = async () => {
  if (!currentTable.value) {
    window.$message?.error("请选择实体对象！");
    return
  }
  if (!currentType.value) {
    window.$message?.error("请选择Crud方式！");
    return
  }
  const config = await gentConfig();
  const data = await axios(config);
  requestResult.value = JSON.stringify(data, null, 4)
}
const handleUpdateTable = (value: string) => {
  gentConfig();
}
//构建请求Header头和参数
const gentConfig = async () => {
  let config = {
    method: 'get',
    url: "http://localhost:5222/api/dynamic/pagelist",
    headers: {
      'ConnId': '1',
      'DataBaseName': 'admin',
      'TableName': currentTable.value,
      "Content-Type": "application/x-www-form-urlencoded "
    },
    // data: qs.stringify({
    //   param: '{\'PageNum\' : \'1\',\'PageSize\' : \'10\'}'
    // }),
    params:{
      pageNum:1,
      pageSize:10,
      param:{ 'Id_>':"0"}
    }
  }
  var configProerty = {
    method: 'get',
    url: "http://localhost:5222/api/tenant/propertys",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded "
    },
    params: {
      tenantName: "admin",
      tableName: currentTable.value
    }
  };
  const { data } = await axios(configProerty);
  if (data.code === 200) {
    for (let info of data.data) {
      if (info.COLUMN_NAME !== "Id" || info.COLUMN_NAME !== "CreateTime" || info.COLUMN_NAME !== "UpdateTime") {
        Object.defineProperty(config.headers, "db_" + info.COLUMN_NAME, {
          value: info.DATA_TYPE + "_" + encodeURIComponent(info.COLUMN_COMMENT),
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
    switch (currentType.value) {
      case "add":
        config.url = "http://localhost:5222/api/dynamic";
        config.method = "post";
        break;
    }
    // for (let info of params.value) {
    //   Object.defineProperty(config.data, info.pKey, {
    //     value: JSON.stringify(info.pValue),
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    //   });
    // }
  }
  return config;
}
const init = async () => {
  await genTables();
}
init();

</script>

<style scoped></style>
