<template>
	<div class="container">
		<el-card shadow="always">
			<!-- 查询 -->
			<el-form :model="state.queryParams" ref="queryForm" :inline="true" label-width="68px">
				<el-form-item label="参数名称" prop="configName">
					<el-input placeholder="参数名称模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="state.queryParams.configName" />
				</el-form-item>
				<el-form-item label="参数键名" prop="configKey">
					<el-input placeholder="参数键名模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="state.queryParams.configKey" />
				</el-form-item>
				<el-form-item label="系统内置" prop="configType">
					<el-select v-model="state.queryParams.configType" placeholder="系统内置" clearable style="width: 240px">
						<el-option v-for="dict in state.typeOptions" :key="dict.dictValue" :label="dict.dictLabel" :value="dict.dictValue" />
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleQuery">
						<SvgIcon name="ele-Search" />
						搜索
					</el-button>
					<el-button @click="resetQuery">
						<SvgIcon name="ele-Refresh" />
						重置
					</el-button>
				</el-form-item>
			</el-form>

			<!-- 操作按钮 -->
			<el-row :gutter="10" class="mb8">
				<el-col :span="1.5">
					<el-button type="primary" plain @click="onOpenAddModule" v-auth="'system:config:add'"> <SvgIcon name="ele-Plus" />新增 </el-button>
				</el-col>
				<el-col :span="1.5">
					<el-button type="danger" plain :disabled="state.multiple" v-auth="'system:config:delete'" @click="onTabelRowDel">
						<SvgIcon name="ele-Delete" />删除
					</el-button>
				</el-col>
				<el-col :span="1.5">
					<el-button type="warning" plain v-auth="'system:config:export'" @click="handleExport"> <SvgIcon name="ele-Download" />导出 </el-button>
				</el-col>
			</el-row>

			<!--数据表格-->
			<el-table v-loading="state.loading" border :data="state.tableData" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column label="参数主键" align="center" prop="configId" />
				<el-table-column label="参数名称" align="center" prop="configName" :show-overflow-tooltip="true" />
				<el-table-column label="参数键名" align="center" prop="configKey" :show-overflow-tooltip="true" />
				<el-table-column label="参数键值" align="center" prop="configValue" />
				<el-table-column label="系统内置" align="center" prop="configType">
					<template #default="scope">
						<el-tag :type="scope.row.configType === '1' ? 'danger' : 'success'" disable-transitions>{{ typeFormat(scope.row) }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="备注" align="center" prop="remark" :show-overflow-tooltip="true" />
				<el-table-column label="创建时间" align="center" prop="createTime" width="180"> </el-table-column>
				<el-table-column label="操作" align="center" fixed="right" width="180">
					<template #default="scope">
						<el-button type="text" v-auth="'system:config:edit'" @click="onOpenEditModule(scope.row)"> <SvgIcon name="ele-Edit" />修改 </el-button>
						<el-button v-if="scope.row.parentId != 0" type="text" v-auth="'system:config:delete'" @click="onTabelRowDel(scope.row)">
							<SvgIcon name="ele-Delete" />删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页设置-->
			<div v-show="state.total > 0">
				<el-divider></el-divider>
				<el-pagination
					background
					:total="state.total"
					:current-page="state.queryParams.pageNum"
					:page-size="state.queryParams.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>
		<!-- 添加或修改配置参数对话框 -->
		<EditModule ref="editModuleRef" :title="state.title" />
	</div>
</template>

<script setup lang="ts">
import { ref, toRefs, reactive, onMounted, getCurrentInstance, onUnmounted } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';

import EditModule from './component/editModule.vue';
import { delData, exportData, listData } from '@/api';
import { getDownCurrentDateTime } from '@/utils/formatTime';
const { proxy } = getCurrentInstance() as any;
const editModuleRef = ref();
const state = reactive({
	// 遮罩层
	loading: true,
	// 选中数组
	ids: [],
	// 非单个禁用
	single: true,
	// 非多个禁用
	multiple: true,
	// 弹出层标题
	title: '',
	// 配置参数表格数据
	tableData: [],
	// 总条数
	total: 0,
	// 类型数据配置参数
	typeOptions: <any>[],
	// 查询参数
	queryParams: {
		// 页码
		pageNum: 1,
		// 每页大小
		pageSize: 10,
		configName: undefined,
		configKey: undefined,
		configType: undefined,
	},
});

/** 查询配置参数列表 */
const handleQuery = () => {
	state.loading = true;

	listData('/sys/config', state.queryParams).then((response) => {
		state.tableData = response.rows;
		state.total = response.total;
		state.loading = false;
	});
};
/** 重置按钮操作 */
const resetQuery = () => {
	state.queryParams.configName = undefined;
	state.queryParams.configName = undefined;
	state.queryParams.configType = undefined;
	handleQuery();
};

// 配置参数状态配置参数翻译
const typeFormat = (row: any) => {
	return proxy.selectDictLabel(state.typeOptions, row.configType);
};

// 打开新增配置参数弹窗
const onOpenAddModule = (row: object) => {
	row = [];
	state.title = '添加配置参数';
	editModuleRef.value.openDialog(row);
};
// 打开编辑配置参数弹窗
const onOpenEditModule = (row: object) => {
	state.title = '修改配置参数';
	editModuleRef.value.openDialog(row);
};
/** 删除按钮操作 */
const onTabelRowDel = (row: any) => {
	const configId = row.configId || state.ids;
	ElMessageBox({
		message: '是否确认删除配置参数编号为"' + configId + '"的数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		return delData('/sys/config', configId).then(() => {
			handleQuery();
			ElMessage.success('删除成功');
		});
	});
};
// 多选框选中数据
const handleSelectionChange = (selection: any) => {
	state.ids = selection.map((item: any) => item.configId);
	state.single = selection.length != 1;
	state.multiple = !selection.length;
};
/** 导出按钮操作 */
const handleExport = () => {
	const queryParams = state.queryParams;
	ElMessageBox({
		message: '是否确认导出所有配置数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		let datetime = getDownCurrentDateTime();
		proxy.download('/sys/config/export', queryParams, `配置_${datetime}.xlsx`);
	});
};
//分页页面大小发生变化
const handleSizeChange = (val: any) => {
	state.queryParams.pageSize = val;
	handleQuery();
};
//当前页码发生变化
const handleCurrentChange = (val: any) => {
	state.queryParams.pageNum = val;
	handleQuery();
};

// 页面加载时
onMounted(() => {
	// 查询配置参数信息
	handleQuery();
	// 查询配置参数状态数据配置参数
	proxy.getDicts('sys_yes_no').then((response: any) => {
		state.typeOptions = response.rows;
	});
	proxy.mittBus.on('onEditPostModule', (res: any) => {
		handleQuery();
	});
});
// 页面卸载时
onUnmounted(() => {
	proxy.mittBus.off('onEditPostModule');
});
</script>
