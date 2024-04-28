<template>
	<div class="container">
		<div class="diygw-title diygw-top solid-bottom" style="color: white; background: #07c160">
			<div class="title flex1 text-center"></div>
		</div>
		<div class="flex flex-wrap diygw-col-24 flex-direction-column flex-clz">
			<div class="flex el-card is-always-shadow diygw-col-24">
				<div class="flex flex-direction-column flex1 el-card__body">
					<div class="mb8">
						<el-form class="" :model="state.queryParams" :rules="queryParamsRules" ref="queryForm" label-width="80px">
							<div class="flex diygw-col-24">
								<el-form-item class="diygw-el-rate" label="标题">
									<el-input type="text" placeholder="请输入标题关键字" v-model="queryParams.title"> </el-input>
								</el-form-item>
							</div>
							<div class="flex diygw-col-0">
								<el-button type="primary" @click="handleQuery"> <SvgIcon name="ele-Search" /> 搜索 </el-button>
								<el-button @click="resetQuery"> <SvgIcon name="ele-Refresh" /> 重置 </el-button>
							</div>
						</el-form>
					</div>
					<div class="mb8">
						<el-button type="primary" plain @click="onOpenAddModule" v-auth="'cms:category:add'"> <SvgIcon name="ele-Plus" />新增 </el-button>
						<el-button type="danger" plain :disabled="state.multiple" @click="onTabelRowDel" v-auth="'cms:category:delete'">
							<SvgIcon name="ele-Delete" />删除
						</el-button>
						<el-button type="warning" plain @click="handleExport" v-auth="'cms:category:export'"> <SvgIcon name="ele-Download" />导出 </el-button>
					</div>
					<el-table
						@selection-change="handleSelectionChange"
						v-loading="state.loading"
						:data="state.tableData"
						stripe
						border
						empty-text="没有数据"
						style="width: 100%"
					>
						<el-table-column type="selection" width="55" align="center" />
						<el-table-column label="图标" prop="thumb" />
						<el-table-column label="标题" prop="title" />
						<el-table-column label="URL" prop="url" />
						<el-table-column label="状态" prop="status" />
						<el-table-column label="操作" align="center" fixed="right" width="180">
							<template #default="scope">
								<el-button type="text" v-auth="'cms:category:edit'" @click="onOpenEditModule(scope.row)"> <SvgIcon name="ele-Edit" />修改 </el-button>
								<el-button v-if="scope.row.id != 0" type="text" v-auth="'cms:category:delete'" @click="onTabelRowDel(scope.row)">
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
				</div>
				<!-- 添加或修改参数配置对话框 -->
				<el-dialog v-model="isShowDialog" width="769px" title="分类管理" draggable center>
					<el-form
						class="flex flex-direction-row flex-wrap"
						:model="state.editForm"
						:rules="state.editFormRules"
						ref="editFormRef"
						label-width="80px"
					>
						<div class="flex diygw-col-24">
							<el-form-item class="diygw-el-rate" label="图标">
								<el-upload
									class="avatar-uploader"
									v-model:file-list="editForm.thumb"
									:show-file-list="false"
									v-if="uploadType == 'picture'"
									accept="image/*"
								>
									<img v-if="editForm.thumb.length > 0" :src="editForm.thumb[0]" class="avatar" />
									<el-icon v-else class="avatar-uploader-icon">
										<Plus />
									</el-icon>
								</el-upload>
							</el-form-item>
						</div>
						<div class="flex diygw-col-24">
							<el-form-item class="diygw-el-rate" label="名称">
								<el-input type="text" placeholder="请输入分类名称" v-model="editForm.title"> </el-input>
							</el-form-item>
						</div>
						<div class="flex diygw-col-24">
							<el-form-item class="diygw-el-rate" label="URL">
								<el-input type="text" placeholder="请输入Url 留空默认跳转" v-model="editForm.url"> </el-input>
							</el-form-item>
						</div>
						<div class="flex diygw-col-24">
							<el-form-item class="diygw-el-rate" label="状态">
								<el-radio-group v-model="editForm.status">
									<el-radio v-for="(item, index) in editFormData.statusDatas" :label="item.value">
										{{ item.label }}
									</el-radio>
								</el-radio-group>
							</el-form-item>
						</div>
					</el-form>
					<template #footer>
						<div class="dialog-footer">
							<el-button @click="onCancel"> 取 消 </el-button>
							<el-button type="primary" @click="onSubmit" :loading="state.saveloading"> 编 辑 </el-button>
						</div>
					</template>
				</el-dialog>
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script lang="ts" setup>
//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref, toRefs, reactive, onMounted, getCurrentInstance, onUnmounted, unref } from 'vue';
import { deepClone } from '@/utils/other';
import { addData, updateData, delData, exportData, listData } from '@/api';

const { proxy } = getCurrentInstance() as any;

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
	// 总条数
	total: 0,
	tableData: [],
	// 是否显示弹出层
	isShowDialog: false,
	saveloading: false,

	editFormData: {
		statusDatas: [
			{ value: '1', label: '显示', checked: true },
			{ value: '0', label: '隐藏', checked: false },
		],
	},

	queryParams: {
		pageNum: 1,
		pageSize: 10,
		title: '',
	},

	queryParamsRules: {},

	editForm: {
		id: undefined,
		thumb: [],
		title: '',
		url: '',
		status: '',
	},

	editFormRules: {},
});
const {
	editFormData,
	queryParams,
	multiple,
	tableData,
	loading,
	title,
	editFormRules,
	single,
	total,
	isShowDialog,
	queryParamsRules,
	editForm,
	ids,
	saveloading,
} = toRefs(state);
const editFormRef = ref<HTMLElement | null>(null);

defineProps({
	title: {
		type: String,
		default: () => '',
	},
});

const editFormInit = deepClone(state.editForm);

// 打开弹窗
const openDialog = (row: any) => {
	if (row.id && row.id != undefined && row.id != 0) {
		state.editForm = row;
	} else {
		initForm();
	}
	state.isShowDialog = true;
	state.saveloading = false;
};

// 关闭弹窗
const closeDialog = (row?: object) => {
	proxy.mittBus.emit('onEditCategoryModule', row);
	state.isShowDialog = false;
};
// 取消
const onCancel = () => {
	closeDialog();
};

// 保存
const onSubmit = () => {
	const formWrap = unref(editFormRef) as any;
	if (!formWrap) return;
	formWrap.validate((valid: boolean) => {
		if (valid) {
			state.saveloading = true;
			if (state.editForm.id != undefined && state.editForm.id != 0) {
				updateData('/cms/category', state.editForm)
					.then(() => {
						ElMessage.success('修改成功');
						state.saveloading = false;
						closeDialog(state.editForm); // 关闭弹窗
					})
					.finally(() => {
						state.saveloading = false;
					});
			} else {
				addData('/cms/category', state.editForm)
					.then(() => {
						ElMessage.success('新增成功');
						state.saveloading = false;
						closeDialog(state.editForm); // 关闭弹窗
					})
					.finally(() => {
						state.saveloading = false;
					});
			}
		}
	});
};
// 表单初始化，方法：`resetFields()` 无法使用
const initForm = () => {
	state.editForm = deepClone(editFormInit);
};
const queryParamsInit = deepClone(state.queryParams);
/** 查询分类管理列表 */
const handleQuery = () => {
	state.loading = true;

	listData('/cms/category', state.queryParams).then((response) => {
		state.tableData = response.rows;
		state.total = response.total;
		state.loading = false;
	});
};
/** 重置按钮操作 */
const resetQuery = () => {
	state.queryParams = queryParamsInit;
	handleQuery();
};

// 打开新增分类管理弹窗
const onOpenAddModule = (row: object) => {
	row = [];
	state.title = '添加分类管理';
	openDialog(row);
};
// 打开编辑分类管理弹窗
const onOpenEditModule = (row: object) => {
	state.title = '修改分类管理';
	openDialog(row);
};
/** 删除按钮操作 */
const onTabelRowDel = (row: any) => {
	const id = row.id || state.ids;
	ElMessageBox({
		message: '是否确认删除分类管理编号为"' + id + '"的数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		return delData('/cms/category', id).then(() => {
			handleQuery();
			ElMessage.success('删除成功');
		});
	});
};
// 多选框选中数据
const handleSelectionChange = (selection: any) => {
	state.ids = selection.map((item: any) => item.id);
	state.single = selection.length != 1;
	state.multiple = !selection.length;
};
/** 导出按钮操作 */
const handleExport = () => {
	const queryParams = state.queryParams;

	ElMessageBox({
		message: '是否确认导出所有分类管理',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(function () {
			return exportData('/cms/category', queryParams);
		})
		.then((response: any) => {
			proxy.download(response.data);
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
const init = async () => {};
// 页面加载时
onMounted(() => {
	handleQuery();
	proxy.mittBus.on('onEditCategoryModule', () => {
		handleQuery();
	});
	init();
});

// 页面卸载时
onUnmounted(() => {
	proxy.mittBus.off('onEditCategoryModule');
});
</script>

<style lang="scss" scoped>
.container {
	padding-left: 0px;
	padding-right: 0px;

	font-size: 12px;
}
</style>
