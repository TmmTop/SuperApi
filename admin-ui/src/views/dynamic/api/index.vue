<!--
 * @Author: 490912587@qq.com
 * @Date: 2023-12-07 14:19:28
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-15 18:23:26
 * @FilePath: \admin-ui\src\views\dynamic\api\index.vue
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
                <n-select v-model:value="currentType" :options="requestTypes" @change="typeChange" />
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
import { getTableList, getFieldByTableId, getDyOne, getDyList, getDyPage, getDyTree, addDy, editDy, delDy } from '~/src/service/api/dynamic';
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
  // {
  //   label: 'ListTree树形List条件请求', pro版实现
  //   value: 'tree',
  // },
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
      if (currentType.value !== "add"
        && currentType.value !== "edit"
        && currentType.value !== "del"
        && row.pKey !== "pageNum"
        && row.pKey !== "pageSize"
        && row.pKey !== "parentIdName"
        && row.pKey !== "id") {
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
  // {
  //   key: 'actions',
  //   title: '操作',
  //   align: 'center',
  //   width: 280,
  //   render: (row: any) => {
  //     return (
  //       <NSpace justify={'space-around'}>
  //         <NPopconfirm onPositiveClick={() => { }}>
  //           {{
  //             default: () => '确认删除此参数',
  //             trigger: () => <NButton size={'small'}>删除</NButton>
  //           }}
  //         </NPopconfirm>
  //       </NSpace>
  //     );
  //   }
  // }
]) as Ref<DataTableColumns<any>>;
const typeChange = async (value: any) => {
  await handleUpdateTable(currentTable.value);
  switch (value) {
    case "edit":
      params.value.push({ pKey: "id", pWhere: "", pValue: "" });
      break;
    case "del":
      params.value = [];
      params.value.push({ pKey: "id", pWhere: "", pValue: "" });
      break;
    case "page":
      params.value.push({ pKey: "pageNum", pWhere: "", pValue: 1 });
      params.value.push({ pKey: "pageSize", pWhere: "", pValue: 10 });
      break;
    case "tree":
      params.value.push({ pKey: "parentIdName", pWhere: "", pValue: "Pid" });
      break;
    case "one":
      params.value = [];
      params.value.push({ pKey: "id", pWhere: "", pValue: "" });
      break;
  }
  requestResult.value = "";
}
//获取租户下的所有表
const genTables = async () => {
  const { data } = await getTableList();
  if (data) {
    data.forEach((info: any) => {
      tables.value.push({
        label: info.tableName,
        value: info.id
      })
    });
  }
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
      requestResult.value = "请求类型：POST";
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramA, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataA, null, 4)
      break;
    case "edit":
      let paramE = {};
      params.value.forEach(info => {
        if (info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          Object.defineProperty(paramE, info.pKey, {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      const dataE = await editDy({
        tableId: currentTable.value,
        param: paramE
      });
      if (dataE.data.code === 200) {
        window.$message?.success(dataE.data.msg);
      }
      requestResult.value = "请求类型：POST\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramE, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataE, null, 4)
      break;
    case "del":
      let paramD = {};
      params.value.forEach(info => {
        if (info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          Object.defineProperty(paramD, info.pKey, {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      const dataD = await delDy({
        tableId: currentTable.value,
        param: paramD
      });
      if (dataD.data.code === 200) {
        window.$message?.success(dataD.data.msg);
      }
      requestResult.value = "请求类型：POST\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramD, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataD, null, 4)
      break;
    case "list":
      let paramL = {};
      params.value.forEach(info => {
        if (info.pKey !== "Id" && info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          Object.defineProperty(paramL, info.pKey + "~" + info.pWhere, {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      const dataL = await getDyList({
        tableId: currentTable.value,
        param: paramL
      });
      if (dataL.data.code === 200) {
        window.$message?.success(dataL.data.msg);
      }
      requestResult.value = "请求类型：GET\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramL, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataL, null, 4)
      break;
    case "page":
      let paramP = {};
      params.value.forEach(info => {
        if (info.pKey !== "Id" && info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          if (info.pKey === "pageNum") {
            Object.defineProperty(paramP, info.pKey, {
              value: info.pValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
          else if (info.pKey === "pageSize") {
            Object.defineProperty(paramP, info.pKey, {
              value: info.pValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
          else {
            Object.defineProperty(paramP, info.pKey + "~" + info.pWhere, {
              value: info.pValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
        }
      });
      const dataP = await getDyPage({
        tableId: currentTable.value,
        param: paramP
      });
      if (dataP.data.code === 200) {
        window.$message?.success(dataP.data.msg);
      }
      requestResult.value = "请求类型：GET\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramP, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataP, null, 4)
      break;
    case "tree":
      let paramT = {};
      params.value.forEach(info => {
        if (info.pKey !== "Id" && info.pKey !== "CreateTime" && info.pKey !== "UpdateTime") {
          if (info.pKey === "parentIdName") {
            Object.defineProperty(paramT, info.pKey, {
              value: info.pValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
          else {
            Object.defineProperty(paramT, info.pKey + "~" + info.pWhere, {
              value: info.pValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
        }
      });
      const dataT = await getDyTree({
        tableId: currentTable.value,
        param: paramT
      });

      if (dataT.data.code === 200) {
        window.$message?.success(dataT.data.msg);
      }
      requestResult.value = "请求类型：GET\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramT, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataT, null, 4)
      break;
    case "one":
      let paramO = {};
      params.value.forEach(info => {
        if (info.pKey === "id") {
          Object.defineProperty(paramO, info.pKey + "~%", {
            value: info.pValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      });
      const dataO = await getDyOne({
        tableId: currentTable.value,
        param: paramO
      });
      if (dataO.data.code === 200) {
        window.$message?.success(dataO.data.msg);
      }
      requestResult.value = "请求类型：GET\r\n";
      requestResult.value += "请求数据表ID：" + JSON.stringify(currentTable.value, null, 4);
      requestResult.value += "\r\n请求参数：" + JSON.stringify(paramO, null, 4);
      requestResult.value += "\r\n响应结果：" + JSON.stringify(dataO, null, 4)
      break;
  }
}
const handleUpdateTable = async (value: string) => {
  currentTable.value = value;
  const result = await getFieldByTableId({ tableId: currentTable.value });
  if (result.data) {
    params.value = [];
    result.data.forEach((field: any) => {
      if (field.fieldName !== "Id" && field.fieldName !== "CreateTime" && field.fieldName !== "UpdateTime") {
        params.value.push({ pKey: field.fieldName, pWhere: "%", pValue: "" });
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