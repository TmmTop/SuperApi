<template>
	<div class="container">
		<el-card shadow="always">
			<!-- 查询 -->
			<el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
				<el-form-item label="岗位编码" prop="postCode">
					<el-input placeholder="请输入岗位编码模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="queryParams.postCode" />
				</el-form-item>
				<el-form-item label="岗位名称" prop="postName">
					<el-input placeholder="请输入岗位名称模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="queryParams.postName" />
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-select v-model="queryParams.status" placeholder="岗位状态" clearable style="width: 240px">
						<el-option v-for="dict in statusOptions" :key="dict.dictValue" :label="dict.dictLabel" :value="dict.dictValue" />
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
					<el-button type="primary" plain v-auth="'system:post:add'" @click="onOpenAddModule"> <SvgIcon name="ele-Plus" />新增 </el-button>
				</el-col>
				<el-col :span="1.5">
					<el-button type="danger" plain v-auth="'system:post:delete'" :disabled="multiple" @click="onTabelRowDel">
						<SvgIcon name="ele-Delete" />删除
					</el-button>
				</el-col>
				<el-col :span="1.5">
					<el-button type="warning" plain v-auth="'system:post:export'" @click="handleExport"> <SvgIcon name="ele-Download" />导出 </el-button>
				</el-col>
			</el-row>

			<!--数据表格-->
			<el-table v-loading="loading" :data="tableData" border @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column label="岗位编号" align="center" prop="postId" />
				<el-table-column label="岗位编码" align="center" prop="postCode" />
				<el-table-column label="岗位名称" align="center" prop="postName" />
				<el-table-column label="岗位排序" align="center" prop="sort" />
				<el-table-column label="状态" align="center" prop="status">
					<template #default="scope">
						<el-tag :type="scope.row.status === '1' ? 'danger' : 'success'" disable-transitions>{{ statusFormat(scope.row) }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center" fixed="right" width="180">
					<template #default="scope">
						<el-button type="text" v-auth="'system:post:edit'" @click="onOpenEditModule(scope.row)"> <SvgIcon name="ele-Edit" />修改 </el-button>
						<el-button v-if="scope.row.parentId != 0" type="text" v-auth="'system:post:delete'" @click="onTabelRowDel(scope.row)">
							<SvgIcon name="ele-Delete" />删除
						</el-button>
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
		<!-- 添加或修改岗位对话框 -->
		<EditModule ref="editModuleRef" :title="title" />
	</div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, onMounted, getCurrentInstance, onUnmounted } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { getDownCurrentDateTime } from '@/utils/formatTime';
import EditModule from './component/editModule.vue';
import { delData, listData } from '@/api';

export default {
	name: 'index',
	components: { EditModule },
	setup() {
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
			// 岗位表格数据
			tableData: [],
			// 总条数
			total: 0,
			// 状态数据字典
			statusOptions: [],
			// 查询参数
			queryParams: {
				// 页码
				pageNum: 1,
				// 每页大小
				pageSize: 10,
				postCode: undefined,
				postName: undefined,
				status: undefined,
			},
		});

		/** 查询岗位列表 */
		const handleQuery = () => {
			state.loading = true;
			listData('/sys/post', state.queryParams).then((response) => {
				state.tableData = response.rows;
				state.total = response.total;
				state.loading = false;
			});
		};
		/** 重置按钮操作 */
		const resetQuery = () => {
			state.queryParams.postName = undefined;
			state.queryParams.postCode = undefined;
			state.queryParams.status = undefined;
			handleQuery();
		};

		const handleCurrentChange = (val: number) => {
			state.queryParams.pageNum = val;
			handleQuery();
		};
		const handleSizeChange = (val: number) => {
			state.queryParams.pageSize = val;
			handleQuery();
		};

		const statusFormat = (row: any) => {
			return proxy.selectDictLabel(state.statusOptions, row.status);
		};

		// 打开新增岗位弹窗
		const onOpenAddModule = (row: object) => {
			row = [];
			state.title = '添加岗位';
			editModuleRef.value.openDialog(row);
		};
		// 打开编辑岗位弹窗
		const onOpenEditModule = (row: object) => {
			state.title = '修改岗位';
			editModuleRef.value.openDialog(row);
		};
		/** 删除按钮操作 */
		const onTabelRowDel = (row: any) => {
			const postIds = row.postId || state.ids;
			ElMessageBox({
				message: '是否确认删除岗位编号为"' + postIds + '"的数据项?',
				title: '警告',
				showCancelButton: true,
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			}).then(function () {
				return delData('/sys/post', postIds).then(() => {
					handleQuery();
					ElMessage.success('删除成功');
				});
			});
		};
		/** 导出按钮操作 */
		const handleExport = () => {
			const queryParams = state.queryParams;
			ElMessageBox({
				message: '是否确认导出所有岗位数据项?',
				title: '警告',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			}).then(function () {
				let datetime = getDownCurrentDateTime();
				proxy.download('/sys/post/export', queryParams, `岗位_${datetime}.xlsx`);
			});
		};
		// 多选框选中数据
		const handleSelectionChange = (selection: any) => {
			state.ids = selection.map((item: any) => item.postId);
			state.single = selection.length != 1;
			state.multiple = !selection.length;
		};
		// 页面加载时
		onMounted(() => {
			// 查询岗位信息
			handleQuery();
			// 查询岗位状态数据字典
			proxy.getDicts('sys_normal_disable').then((response: any) => {
				state.statusOptions = response.rows;
			});
			proxy.mittBus.on('onEditPostModule', () => {
				handleQuery();
			});
		});
		// 页面卸载时
		onUnmounted(() => {
			proxy.mittBus.off('onEditPostModule');
		});
		return {
			editModuleRef,
			handleSelectionChange,
			handleQuery,
			handleCurrentChange,
			handleSizeChange,
			resetQuery,
			statusFormat,
			onOpenAddModule,
			onOpenEditModule,
			onTabelRowDel,
			handleExport,
			...toRefs(state),
		};
	},
};
</script>
