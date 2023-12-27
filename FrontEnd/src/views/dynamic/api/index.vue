<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-12-07 14:19:28
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-27 17:14:49
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
                <n-select v-model:value="currentTable" @update:value="handleUpdateTable" :options="tables" />
              </n-input-group>
              <n-input-group>
                <div class="w-25"> Crud方式：</div>
                <n-select v-model:value="currentType" :options="requestTypes" />
              </n-input-group>
              <n-input-group>
                <n-button class="flex-1-hidden" type="primary" @click="handleSend">

                  <icon-ic-round-plus class="mr-4px text-20px" />
                  发送请求
                </n-button>
              </n-input-group>
              <n-input-group>
                <div class="flex-col  h-140">
                  <!-- <n-space class="pb-12px" justify="space-between">
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
                  </n-space> -->
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
import { NButton, NInput, NPopconfirm, NSelect, NSpace } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { fetchList, getFieldByTableId, getDyOne, getDyList, getDyPage, getDyTree, addDy, editDy, delDy } from "@/service/api/dynamic";
import { useAuthStore } from '@/store';
const auth = useAuthStore();
const userInfo = auth.userInfo;
const tables = ref([] as any[]);
const params = ref([] as any[]);
const currentTable = ref("");
const currentType = ref("");
const requestResult = ref("");
const whereOptions = ref([
  {
    label: "等于",
    value: "=="
  },
  {
    label: "不等于",
    value: "!="
  }, {
    label: "模糊查询",
    value: "%"
  },
  {
    label: "大于",
    value: ">"
  },
  {
    label: "大于等于",
    value: ">="
  },
  {
    label: "小于",
    value: "<"
  },
  {
    label: "小于等于",
    value: "<="
  }, {
    label: "In",
    value: "in"
  },
  {
    label: "NotIn",
    value: "!in"
  },
  {
    label: "左模糊",
    value: "ll"
  },
  {
    label: "右模糊",
    value: "lr"
  },
  {
    label: "IsNull",
    value: "null"
  },
  {
    label: "EquaNull",
    value: "=null"
  },
  {
    label: "NotNull",
    value: "not"
  },
  {
    label: "模糊取反",
    value: "noLike"
  },
  {
    label: "LikeOr",
    value: "inLike"
  },
])
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
        disabled: true,
        onUpdateValue(v) {
          params.value[index].pKey = v
        }
      })
    }
  },
  {
    title: '查询条件',
    key: 'pWhere',
    render(row, index) {
      if (currentType.value !== "add" && currentType.value !== "edit" && currentType.value !== "del") {
        return h(NSelect, {
          key: index,
          options: whereOptions.value,
          value: row.pWhere,
          height: "800px",
          onUpdateValue(v: any) {
            params.value[index].pWhere = v!
          }
        });
      } else {
        return h(NSelect, {
          key: index,
          options: whereOptions.value,
          value: row.pWhere,
          disabled: true,
          onUpdateValue(v: any) {
            params.value[index].pWhere = v!
          }
        });
      }

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
  const { data } = await fetchList({ tenantId: userInfo.id });
  if (data.code === 200) {
    data.data.forEach((info: any) => {
      tables.value.push({
        label: info.tableName,
        value: info.id
      })
    });
  }
}
// const handleAdd = () => {
//   params.value.push({
//     pKey: '',
//     pWhere:"",
//     pValue: "",
//   });
// }
// const handleReset = () => {
//   params.value = [];
// }
const handleSend = async () => {
  if (!currentTable.value) {
    window.$message?.error("请选择实体对象！");
    return
  }
  if (!currentType.value) {
    window.$message?.error("请选择Crud方式！");
    return
  }

  switch (currentType.value) {
    case "add":
      let paramA = {};
      params.value.forEach(info => {
        if (info.pKey !== "Id" && info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          Object.defineProperty(paramA, info.pKey, {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      const dataA = await addDy({
        tableId: currentTable.value,
        param: paramA
      });
      if (dataA.data.code === 200) {
        window.$message?.success(dataA.data.msg);
      }
      requestResult.value = JSON.stringify(dataA, null, 4)
      break;
    case "edit":
      const dataE = await editDy({
        tableId: currentTable.value,
        param: { 'Id': "0" }
      });
      if (dataE.data.code === 200) {
        window.$message?.success(dataE.data.msg);
      }
      requestResult.value = JSON.stringify(dataE, null, 4)
      break;
    case "del":
      const dataD = await delDy({
        tableId: currentTable.value,
        pageNum: 1,
        pageSize: 10,
        param: { 'Id_>': "0" }
      });
      if (dataD.data.code === 200) {
        window.$message?.success(dataD.data.msg);
      }
      requestResult.value = JSON.stringify(dataD, null, 4)
      break;
    case "list":
      let paramL = {};
      params.value.forEach(info => {
        if (info.pKey !== "Id" && info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          Object.defineProperty(paramL, info.pKey + "_" + info.pWhere, {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      console.log(paramL);

      const dataL = await getDyList({
        tableId: currentTable.value,
        param: paramL
      });
      if (dataL.data.code === 200) {
        window.$message?.success(dataL.data.msg);
      }
      requestResult.value = JSON.stringify(dataL, null, 4)
      break;
    case "page":
      const dataP = await getDyPage({
        tableId: currentTable.value,
        pageNum: 1,
        pageSize: 10,
        param: { 'Id_>': "0" }
      });
      if (dataP.data.code === 200) {
        window.$message?.success(dataP.data.msg);
      }
      requestResult.value = JSON.stringify(dataP, null, 4)
      break;
    case "tree":
      const dataT = await getDyTree({
        tableId: currentTable.value,
        parentPropertyName: "Pid",
        param: { 'Id_>': "0" }
      });
      if (dataT.data.code === 200) {
        window.$message?.success(dataT.data.msg);
      }
      requestResult.value = JSON.stringify(dataT, null, 4)
      break;
    case "one":
      const dataO = await getDyOne({
        tableId: currentTable.value,
        param: { 'Id_==': "0" }
      });
      if (dataO.data.code === 200) {
        window.$message?.success(dataO.data.msg);
      }
      requestResult.value = JSON.stringify(dataO, null, 4)
      break;
  }
}
const handleUpdateTable = async (value: string) => {
  currentTable.value = value;
  const result = await getFieldByTableId({ tableId: currentTable.value });
  if (result.data.code === 200) {
    params.value = [];
    result.data.data.forEach((field: any) => {
      if (field.fieldName !== "Id" && field.fieldName !== "CreateTime" && field.fieldName !== "UpdateTime") {
        params.value.push({ pKey: field.fieldName, pWhere: "", pValue: "" });
      }
    });
  }
}
const init = async () => {
  await genTables();
}
init();

</script>

<style scoped></style>
