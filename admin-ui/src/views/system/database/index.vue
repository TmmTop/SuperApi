<template>
	<div class="container">
		<el-card shadow="always">
			<!-- 查询 -->
			<el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
				<el-form-item label="表格名称" prop="name">
					<el-input placeholder="请输入表格名称或备注模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="queryParams.name" />
				</el-form-item>
				<!-- <el-form-item label="表格类型" prop="comment">
					<el-input v-model="queryParams.comment" placeholder="请输入表格类型模糊查询" clearable style="width: 240px"
						@keyup.enter="handleQuery" />
				</el-form-item> -->
				<el-form-item>
					<el-button type="primary" @click="handleQuery"> <SvgIcon name="ele-Search" />搜索 </el-button>
					<el-button @click="resetQuery">
						<SvgIcon name="ele-Refresh" />
						重置
					</el-button>
				</el-form-item>
			</el-form>

			<!-- 操作按钮 -->
			<el-row :gutter="10" class="mb8">
				<el-col :span="1.5">
					<el-button type="danger" plain :disabled="multiple" @click="onTabelRowExport"> <SvgIcon name="ele-Download" />生成 </el-button>
				</el-col>
				<!--<el-col :span="1.5">
					<el-button type="primary" plain v-auth="'system:dictT:add'" @click="onOpenAddModule">
						<SvgIcon name="ele-Plus" />新增
					</el-button>
				</el-col>
				 <el-col :span="1.5">
					<el-button type="danger" plain v-auth="'system:dictT:delete'" :disabled="multiple"
						@click="onTabelRowExport">
						<SvgIcon name="ele-Delete" />生成
					</el-button>
				</el-col>
				<el-col :span="1.5">
					<el-button type="warning" plain v-auth="'system:dictT:export'" @click="handleExport">
						<SvgIcon name="ele-Download" />导出
					</el-button>
				</el-col> -->
			</el-row>

			<!--数据表格-->
			<el-table v-loading="loading" border :data="tableData" @selection-change="handleSelectionChange">
				<el-table-column type="selection" align="center" />
				<el-table-column prop="name" label="表名" />
				<el-table-column prop="comment" label="注释" />
				<el-table-column prop="engine" label="引擎" />
				<el-table-column prop="collation" label="字符集" />
				<el-table-column prop="rows" label="数据行数" />
				<el-table-column label="操作" align="center" fixed="right" width="280">
					<template #default="scope">
						<el-button type="text" icon="el-icon-s-tools" @click="onTabelRowExport(scope.row)"> <SvgIcon name="ele-Download" />生成 </el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页设置-->
			<div v-show="total > 0">
				<el-divider></el-divider>
				<el-pagination
					background
					:total="total"
					:current-page="queryParams.pageNum"
					:page-size="queryParams.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>
		<el-dialog v-model="state.isShowGenDialog" width="600px" destroy-on-close title="生成内容" draggable center>
			<div class="gen-body">
				<div class="margin-bottom">
					{{ state.msg }}
				</div>
				<el-form-item label="生成类型" prop="configType">
					<el-radio-group class="flex align-start flex-direction-column" v-model="state.type">
						<el-radio v-for="dict in state.options" :value="dict.value" :key="dict.value" :label="dict.value">{{ dict.label }}</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="state.isShowGenDialog = false"> 取 消 </el-button>
					<el-button type="primary" @click="generate"> 生成 </el-button>
				</div>
			</template>
		</el-dialog>

		<el-dialog v-model="state.isShowDialog" width="600px" destroy-on-close title="提示信息" draggable center>
			<div class="gen-body">
				<div v-for="item in state.datas">
					<div v-html="item"></div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>
<!--使用 setup 语法糖-->
<script setup lang="ts">
import { toRefs, reactive, onMounted, getCurrentInstance, onUnmounted } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { listData, postData } from '@/api';

const { proxy } = getCurrentInstance() as any;
const state = reactive({
	isShowDialog: false,
	isShowGenDialog: false,
	msg: '',
	names: '',
	datas: [],
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
	// 表格表格数据
	tableData: [],
	// 总条数
	total: 0,
	options: [
		{
			value: 'diygw:tableandapi',
			label: '创建表相关Model、Controller、API等类',
		},
		{
			value: 'diygw:table',
			label: '创建表相关Model、Controller等类',
		},
		{
			value: 'diygw:model',
			label: '创建Model类',
		},
	],
	type: 'diygw:tableandapi',
	// 状态数据表格
	// 查询参数
	queryParams: {
		// 页码
		pageNum: 1,
		// 每页大小
		pageSize: 10,
		name: undefined,
		comment: undefined,
		status: undefined,
	},
	//表格数据表单参数
	dictItemForm: [],
});
const { loading, multiple, tableData, total, queryParams } = toRefs(state);
/** 查询表格列表 */
const handleQuery = () => {
	state.loading = true;
	listData('/sys/database', state.queryParams).then((response) => {
		state.tableData = response.rows;
		state.total = response.total;
		state.loading = false;
	});
};
/** 重置按钮操作 */
const resetQuery = () => {
	state.queryParams.name = undefined;
	state.queryParams.comment = undefined;
	state.queryParams.status = undefined;
	handleQuery();
};

const generate = () => {
	return postData('/sys/database/generate', { names: state.names, type: state.type }).then((res) => {
		state.isShowGenDialog = false;
		state.datas = res.data;
		state.isShowDialog = true;
	});
};

/** 生成按钮操作 */
const onTabelRowExport = (row: any) => {
	const names = row.name || state.ids;
	state.names = names;
	state.msg = '是否确认生成表格编号为"' + names + '"的表格？如果已生成不会重复生成。';
	state.isShowGenDialog = true;
};
// 多选框选中数据
const handleSelectionChange = (selection: any) => {
	state.ids = selection.map((item: any) => item.name);
	state.single = selection.length != 1;
	state.multiple = !selection.length;
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
	// 查询表格信息
	handleQuery();
	proxy.mittBus.on('onEditPostModule', () => {
		handleQuery();
	});
});
// 页面卸载时
onUnmounted(() => {
	proxy.mittBus.off('onEditPostModule');
});
</script>
<style>
.gen-body error {
	color: #ff0000;
}
</style>
