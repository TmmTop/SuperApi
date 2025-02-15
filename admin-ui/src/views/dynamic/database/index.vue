<template>
    <div class="overflow-hidden">
        <n-grid :cols="24" class="h-full">
            <n-gi :span="12">
                <n-card title="数据表管理" :bordered="false" class="h-full rounded-8px shadow-sm">
                    <div class="flex-col h-full">
                        <n-space class="pb-12px" justify="space-between">
                            <n-space>
                                <n-button type="primary" @click="handleShowTableAdd">
                                    <icon-ic-round-plus class="mr-4px text-20px" />
                                    新增
                                </n-button>
                            </n-space>
                            <n-space align="center" :size="18">
                                <n-button size="small" type="primary" @click="init">
                                    <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
                                    刷新表格
                                </n-button>
                                <column-setting v-model:columns="columns" />
                            </n-space>
                        </n-space>
                        <n-space>
                            <span style="font-size: 12px;color: red;"> 注意：表名不要有特殊符号，推荐用驼峰命名！</span>
                        </n-space>
                        <n-data-table :columns="columns" :data="tableData" remote :loading="loading" flex-height
                            class="flex-1-hidden  mt-5" />
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="12">
                <n-card title="字段管理" :bordered="false" class="h-full rounded-8px shadow-sm">
                    <div class="flex-col  h-full">
                        <n-space class="pb-12px" justify="space-between">
                            <n-space>
                                <n-button type="primary" @click="handlePropertyAdd()">
                                    <icon-ic-round-plus class="mr-4px text-20px" />
                                    新增一行
                                </n-button>
                            </n-space>
                            <n-space>
                                <n-button type="primary" @click="handleSaveTable">
                                    <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
                                    保存
                                </n-button>
                                <n-button type="primary" @click="handlePropertyReset">
                                    <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
                                    重置
                                </n-button>
                            </n-space>
                        </n-space>
                        <n-space>
                            <span style="font-size: 12px;color: red;">
                                注意：字段名称不要有特殊符号，推荐用驼峰命名，接口调试的时候字段值需要和这里的字段类型对应！</span>
                        </n-space>
                        <n-data-table :columns="propertyColumns" :data="propertyData" flex-height
                            class="flex-1-hidden mt-5" />
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
        <n-modal v-model:show="showAddTable" preset="card" title="创建数据表" class="w-700px">
            <n-form ref="formRef" label-placement="left" :label-width="120" :model="formModel" :rules="rules">
                <n-grid :cols="24" :x-gap="18">
                    <n-form-item-grid-item :span="24" label="数据表名" path="tableName">
                        <n-input v-model:value="formModel.tableName" />
                    </n-form-item-grid-item>
                    <n-form-item-grid-item :span="24" label="数据表注释" path="tableComment">
                        <n-input v-model:value="formModel.tableComment" />
                    </n-form-item-grid-item>
                </n-grid>
                <n-space class="w-full pt-16px" :size="24" justify="end">
                    <n-button class="w-72px" @click="handleCloseTableAdd">取消</n-button>
                    <n-button class="w-72px" type="primary" @click="handleTableAdd">确定</n-button>
                </n-space>
            </n-form>
        </n-modal>
    </div>
</template>

<script setup lang="tsx">
import { h, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NInput, NPopconfirm, NSelect, NSpace } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { useLoading } from '@/hooks';
import { SelectMixedOption } from 'naive-ui/es/select/src/interface';
import { getTableList, addTable, delTable, getFieldByTableId, saveFields } from '~/src/service/api/dynamic';
const { loading, startLoading, endLoading } = useLoading(false);
import { createRequiredFormRule } from '@/utils/rule';
import { useAuthStore } from '@/store/modules/auth';
const auth = useAuthStore();
const userInfo = auth.userInfo;
const tableData = ref<any>([]);
const currentTableId = ref();
const showAddTable = ref(false);
const formModel = ref<any>({
    tenantId: userInfo.Id,
    tableName: '',
    tableComment: ""
});
const rules: any = {
    tableName: createRequiredFormRule('请输入数据表名'),
    tableComment: createRequiredFormRule('请输入数据表描述'),
};
const formRef = ref<HTMLElement & any>();
const clear = () => {
    formModel.value = {
        tenantId: userInfo.id,
        tableName: '',
        tableComment: ""
    };
}
const handleShowTableAdd = () => {
    clear();
    showAddTable.value = true;
}
const handleCloseTableAdd = () => {
    clear();
    showAddTable.value = false;
}
const handleTableAdd = async () => {
    await formRef.value?.validate();
    const data = await addTable(formModel.value) as any;
    if (data) {
        window.$message?.success("操作成功");
        showAddTable.value = false;
        init();
    }
}
async function getTableData() {
    startLoading();
    const data = await getTableList() as any;
    if (data.data) {
        tableData.value = data.data;
        propertyData.value = [];
    }
    endLoading();
}

const columns: Ref<DataTableColumns<any>> = ref([
    {
        key: 'index',
        title: '序号',
        align: 'center',
        render: (_, index) => {
            return `${index + 1}`
        }
    },
    {
        key: 'tableName',
        title: '表名',
        align: 'center'
    },
    {
        key: 'tableComment',
        title: '描述',
        align: 'center'
    },
    {
        key: 'actions',
        title: '操作',
        align: 'center',
        width: 280,
        render: (row: any) => {
            return (
                <NSpace justify={'space-around'}>
                    <NButton size={'small'} onClick={() => handleGetPropertys(row.id)}>
                        字段管理
                    </NButton>
                    <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
                        {{
                            default: () => '确认删除表',
                            trigger: () => <NButton size={'small'}>删除</NButton>
                        }}
                    </NPopconfirm>
                </NSpace>
            );
        }
    }
]) as Ref<DataTableColumns<any>>;

async function handleDeleteTable(id: any) {
    startLoading();
    const data = await delTable({ id: id });
    if (data) {
        window.$message?.success("删除成功");
        init();
    }
    endLoading();

}

const propertyData = ref([] as any[]);
const handleGetPropertys = async (tableId: string) => {
    currentTableId.value = tableId;
    startLoading();
    const data = await getFieldByTableId({ tableId: tableId });
    console.log(data);
    
    if (data) {
        propertyData.value = data.data;
    }
    endLoading();
}
const handlePropertyReset = () => {
    if (!currentTableId.value || currentTableId.value === 0) {
        window.$message?.error("请选择数据表！");
        return;
    }
    handleGetPropertys(currentTableId.value);
}
const handlePropertyAdd = () => {
    propertyData.value.push({
        fieldName: "",
        fieldType: "",
        fieldComment: "",
    });
}
const handleDelProperty = (columnName: string) => {
    let index = propertyData.value.findIndex(x => x.fieldName == columnName);
    if (index > -1) {
        propertyData.value.splice(index);
    }
}
//迁移表字段
const handleSaveTable = async () => {
    if (propertyData.value.length === 0) {
        window.$message?.error("请添加字段！");
        return;
    }
    if (propertyData.value.findIndex(x => x.fieldType === "") > -1) {
        window.$message?.error("请添加字段类型！");
        return;
    }
    if (propertyData.value.findIndex(x => x.fieldName === "") > -1) {
        window.$message?.error("请添加字段名称！");
        return;
    }
    startLoading();
    const postData = [] as any[];
    propertyData.value.forEach(item => {
        postData.push({
            tableId: currentTableId.value,
            fieldName: item.fieldName,
            fieldType: item.fieldType,
            fieldComment: item.fieldComment,
        });
    });
    const data = await saveFields(postData);
    if (data) {
        window.$message?.success("操作成功");
        init();
        propertyData.value = [];
    }
    endLoading();
}
const dataTypeOptions: SelectMixedOption[] = [
    {
        label: "字符串", value: "varchar",
    },
    {
        label: "长文本", value: "longtext",
    },
    {
        label: "长整数", value: "long",
    },
    {
        label: "整数", value: "int",
    },
    {
        label: "金额", value: "decimal",
    },
    {
        label: "浮点", value: "float",
    },
    {
        label: "日期", value: "datetime",
    },
    {
        label: "布尔型", value: "bool",
    }
];
const propertyColumns: Ref<DataTableColumns<any>> = ref([
    {
        key: 'index',
        title: '序号',
        align: 'center',
        width: 80,
        render: (_, index) => {
            return `${index + 1}`
        }
    },
    {
        title: '字段名称',
        key: 'fieldName',
        render(row, index) {
            return h(NInput, {
                key: index,
                value: row.fieldName,
                disabled: row.fieldName === "Id" || row.fieldName === "CreateTime" || row.fieldName === "UpdateTime",
                onUpdateValue(v) {
                    propertyData.value[index].fieldName = v
                }
            })
        }
    },
    {
        title: '字段类型',
        key: 'fieldType',
        render(row, index) {
            return h(NSelect, {
                key: index,
                options: dataTypeOptions,
                disabled: row.fieldName === "Id" || row.fieldName === "CreateTime" || row.fieldName === "UpdateTime",
                value: row.fieldType,
                onUpdateValue(v) {
                    propertyData.value[index].fieldType = v
                }
            })
        }
    },
    {
        title: '字段描述',
        key: 'fieldComment',
        render(row, index) {
            return h(NInput, {
                key: index,
                value: row.fieldComment,
                disabled: row.fieldName === "Id" || row.fieldName === "CreateTime" || row.fieldName === "UpdateTime",
                onUpdateValue(v) {
                    propertyData.value[index].fieldComment = v
                }
            })
        }
    },
    {
        key: 'actions',
        title: '操作',
        align: 'center',
        render: (row: any) => {
            return (
                <NSpace justify={'space-around'}>
                    <NPopconfirm onPositiveClick={() => handleDelProperty(row.fieldName)}>
                        {{
                            default: () => '确认删除该字段',
                            trigger: () => <NButton disabled={row.fieldName === 'Id' || row.fieldName === 'CreateTime' || row.fieldName === 'UpdateTime'} size={'small'}>删除</NButton>
                        }}
                    </NPopconfirm>
                </NSpace>
            );
        }
    }
]) as Ref<DataTableColumns<any>>;
async function init() {
    getTableData();
    clear();
}

// 初始化
init();
</script>

<style scoped></style>