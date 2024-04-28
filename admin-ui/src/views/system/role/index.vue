<template>
	<div class="container">
		<el-card shadow="always">
			<!--查询-->
			<el-form :model="state.queryParams" ref="queryForm" :inline="true">
				<el-form-item label="角色名称" prop="roleName">
					<el-input placeholder="角色名称模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="state.queryParams.roleName" />
				</el-form-item>
				<el-form-item label="权限字符" prop="roleKey">
					<el-input placeholder="权限字符模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="state.queryParams.roleKey" />
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-select v-model="state.queryParams.status" placeholder="角色状态" clearable style="width: 240px">
						<el-option v-for="dict in state.statusOptions" :key="dict.dictValue" :label="dict.dictLabel" :value="dict.dictValue" />
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

			<!--操作按钮-->
			<div class="mb8">
				<el-button type="primary" plain v-auth="'system:role:add'" @click="handleAdd"> <SvgIcon name="ele-Plus" />新增 </el-button>
				<el-button type="danger" plain v-auth="'system:role:delete'" :disabled="state.multiple" @click="handleDelete">
					<SvgIcon name="ele-Delete" />删除
				</el-button>
				<el-button type="warning" plain v-auth="'system:role:export'" @click="handleExport"> <SvgIcon name="ele-Download" />导出 </el-button>
			</div>

			<!--数据表格-->
			<el-table v-loading="state.loading" border :data="state.roleList" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column label="角色编号" prop="roleId" width="120" />
				<el-table-column label="角色名称" prop="roleName" :show-overflow-tooltip="true" />
				<el-table-column label="权限字符" prop="roleKey" :show-overflow-tooltip="true" width="150" />
				<el-table-column label="显示顺序" prop="roleSort" width="100" />
				<el-table-column label="状态" align="center" width="100">
					<template #default="scope">
						<el-switch v-model="scope.row.status" active-value="0" inactive-value="1" @click="handleStatusChange(scope.row)"></el-switch>
					</template>
				</el-table-column>
				<el-table-column label="创建时间" align="center" prop="createTime" width="180"> </el-table-column>
				<el-table-column label="操作" align="center" fixed="right" width="280">
					<template #default="scope">
						<el-button type="text" v-auth="'system:role:edit'" @click="handleUpdate(scope.row)"> <SvgIcon name="ele-Edit" />修改 </el-button>
						<el-button type="text" @click="handleDataScope(scope.row)"> <SvgIcon name="ele-CircleCheck" />数据权限 </el-button>
						<el-button type="text" v-auth="'system:role:delete'" @click="handleDelete(scope.row)"> <SvgIcon name="ele-Delete" />删除 </el-button>
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
		<!-- 添加或修改角色配置对话框 -->
		<el-dialog :title="state.title" v-model="state.open" width="769px" center>
			<el-form ref="roleFormRef" :model="state.roleForm" :rules="state.rules" label-width="120px" label-position="right">
				<el-row>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="角色名称" prop="roleName">
							<el-input v-model="state.roleForm.roleName" placeholder="请输入角色名称" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="权限字符" prop="roleKey">
							<el-input v-model="state.roleForm.roleKey" placeholder="请输入权限字符" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="角色顺序" prop="roleSort">
							<el-input-number v-model="state.roleForm.roleSort" controls-position="right" :min="0" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="状态">
							<el-radio-group v-model="state.roleForm.status">
								<el-radio v-for="dict in state.statusOptions" :key="dict.dictValue" :label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24">
						<el-form-item label="权限设置">
							<div>
								<el-checkbox v-model="state.menuExpand" @change="handleCheckedTreeExpand($event, 'menu')">展开/折叠 </el-checkbox>
								<el-checkbox v-model="state.menuNodeAll" @change="handleCheckedTreeNodeAll($event, 'menu')">全选/全不选 </el-checkbox>
								<el-tree
									class="tree-border"
									:data="state.menuOptions"
									show-checkbox
									ref="menuRef"
									node-key="menuId"
									empty-text="加载中，请稍后"
									:props="{
										label: 'menuName',
										children: 'children',
									}"
									:default-checked-keys="state.menuCheckedKeys"
								></el-tree>
							</div>
						</el-form-item>
					</el-col>
					<el-col :xs="24">
						<el-form-item label="备注">
							<el-input v-model="state.roleForm.remark" type="textarea" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" :loading="state.bunLoading" @click="submitForm">确 定</el-button>
					<el-button @click="cancel">取 消</el-button>
				</span>
			</template>
		</el-dialog>

		<!-- 分配角色数据权限对话框 -->
		<el-dialog :title="state.title" v-model="state.openDataScope" width="769px" center>
			<el-form :model="state.roleForm" label-width="80px">
				<el-row>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="角色名称">
							<el-input v-model="state.roleForm.roleName" :disabled="true" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="权限字符">
							<el-input v-model="state.roleForm.roleKey" :disabled="true" />
						</el-form-item>
					</el-col>
					<el-col :xs="24">
						<el-form-item label="权限范围">
							<el-select v-model="state.roleForm.dataScope" @change="dataScopeSelectChange">
								<el-option v-for="item in state.dataScopeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24">
						<el-form-item label="数据权限" v-show="state.roleForm.dataScope == 2">
							<div>
								<el-checkbox v-model="state.deptExpand" @change="handleCheckedTreeExpand($event, 'dept')">展开/折叠 </el-checkbox>
								<el-checkbox v-model="state.deptNodeAll" @change="handleCheckedTreeNodeAll($event, 'dept')">全选/全不选 </el-checkbox>
								<el-tree
									class="tree-border"
									:data="state.deptOptions"
									show-checkbox
									default-expand-all
									ref="deptRef"
									node-key="deptId"
									empty-text="加载中，请稍后"
									:props="{
										label: 'deptName',
										children: 'children',
									}"
								></el-tree>
							</div>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" @click="submitDataScope">确 定</el-button>
					<el-button @click="cancelDataScope">取 消</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref, unref, nextTick } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { addData, changeStatus, delData, getOneData, listData, updateData } from '@/api';
import { handleTree } from '@/utils';
import { getDownCurrentDateTime } from '@/utils/formatTime';

const { proxy } = getCurrentInstance() as any;
const roleFormRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const deptRef = ref<HTMLElement | null>(null);
const state: any = reactive({
	activeName: 'first',
	// 遮罩层
	loading: true,
	bunLoading: false,
	// 选中数组
	ids: [],
	// 总条数
	total: 0,
	// 弹出层标题
	title: '',
	// 是否显示弹出层
	open: false,
	// 角色表格数据
	roleList: [],
	// 显示搜索条件
	showSearch: true,
	// 非单个禁用
	single: true,
	// 非多个禁用
	multiple: true,
	// 状态数据字典
	statusOptions: [],
	// 菜单列表
	menuOptions: [],

	//角色具有的菜单列表
	menuCheckedKeys: [],

	// 部门列表
	deptOptions: [],
	// 是否显示弹出层（数据权限）
	openDataScope: false,
	menuExpand: false,
	menuNodeAll: false,

	deptExpand: true,
	deptNodeAll: false,
	// 查询参数
	queryParams: {
		pageNum: 1,
		pageSize: 10,
		roleName: undefined,
		roleKey: undefined,
		status: undefined,
	},
	// 数据范围选项
	dataScopeOptions: [
		{
			value: '1',
			label: '全部数据权限',
		},
		{
			value: '2',
			label: '自定数据权限',
		},
		{
			value: '3',
			label: '本部门数据权限',
		},
		{
			value: '4',
			label: '本部门及以下数据权限',
		},
		{
			value: '5',
			label: '仅本人数据权限',
		},
	],
	// 表单参数
	roleForm: {},
	// 表单校验
	rules: {
		roleName: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }],
		roleKey: [{ required: true, message: '权限字符不能为空', trigger: 'blur' }],
		roleSort: [{ required: true, message: '角色顺序不能为空', trigger: 'blur' }],
	},
});
// 表单重置
const reset = () => {
	(state.menuExpand = false),
		(state.menuNodeAll = false),
		(state.deptExpand = true),
		(state.deptNodeAll = false),
		(state.roleForm = {
			roleId: undefined,
			roleName: undefined,
			roleKey: undefined,
			roleSort: 0,
			status: '0',
			menuIds: [],
			deptIds: [],
			menuCheckStrictly: true,
			deptCheckStrictly: true,
			remark: undefined,
		});
	state.roleForm = {};
};
/** 重置按钮操作 */
const resetQuery = () => {
	state.queryParams.pageNum = 1;
	state.queryParams.pageSize = 10;
	state.queryParams.roleName = '';
	state.queryParams.roleKey = '';
	state.queryParams.status = '';
	handleQuery();
};
/** 查询角色列表 */
const getList = () => {
	state.loading = true;
	listData('/sys/role', state.queryParams).then((response) => {
		state.roleList = response.rows;
		state.total = response.total;
		state.loading = false;
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
/** 提交按钮（数据权限） */
const submitDataScope = () => {
	if (state.roleForm.roleId != undefined) {
		state.roleForm.deptIds = getDeptAllCheckedKeys();
		updateData('/sys/role', state.roleForm).then(() => {
			ElMessage.success('修改成功');
			state.openDataScope = false;
			getList();
		});
	}
};
// 所有部门节点数据
const getDeptAllCheckedKeys = () => {
	const formWrap = unref(deptRef) as any;
	// 目前被选中的部门节点
	let checkedKeys = formWrap.getCheckedKeys();
	// 半选中的部门节点
	let halfCheckedKeys = formWrap.getHalfCheckedKeys();
	checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
	return checkedKeys;
};
/** 搜索按钮操作 */
const handleQuery = () => {
	state.queryParams.pageNum = 1;
	getList();
};
/** 查询菜单树结构 */
const getMenuTreeselect = () => {
	listData('/sys/menu', {}).then((response) => {
		state.menuOptions = handleTree(response.rows, 'menuId', 'parentId', 'children');
	});
};

// 多选框选中数据
const handleSelectionChange = (selection: any) => {
	state.ids = selection.map((item: any) => item.roleId);
	state.single = selection.length != 1;
	state.multiple = !selection.length;
};
// 角色状态修改
const handleStatusChange = (row: any) => {
	let text = row.status === '0' ? '启用' : '停用';
	ElMessageBox({
		closeOnClickModal: false,
		closeOnPressEscape: false,
		title: '警告',
		message: '确认要"' + text + '""' + row.roleName + '"角色吗?',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
	})
		.then(function () {
			return changeStatus('/sys/role', { roleId: row.roleId, status: row.status });
		})
		.then(() => {
			ElMessage.success(text + '成功');
		})
		.catch(function () {
			row.status = row.status === '0' ? '1' : '0';
		});
};
/** 分配数据权限操作 */
const handleDataScope = (row: any) => {
	reset();
	getRoleDeptTreeselect();
	getOneData('/sys/role', row.roleId).then((response) => {
		state.roleForm = response.data;
		state.openDataScope = true;
		nextTick(() => {
			let checkedKeys = response.data.deptIds;
			const deptWrap = unref(deptRef) as any;
			checkedKeys.forEach((v: any) => {
				deptWrap.setChecked(v, true, false);
			});
		});
		state.title = '分配数据权限';
	});
};
/** 新增按钮操作 */
const handleAdd = () => {
	reset();
	getMenuTreeselect();
	state.open = true;
	state.title = '添加角色';
};
/** 修改按钮操作 */
const handleUpdate = (row: any) => {
	const roleId = row.roleId;
	getRoleMenuTreeselect();
	getOneData('/sys/role', roleId).then((response) => {
		state.roleForm = response.data;
		state.open = true;
		state.title = '修改角色';

		nextTick(() => {
			// state.menuCheckedKeys =response.data.menuIds;
			let checkedKeys = response.data.menuIds;
			const menuWrap = unref(menuRef) as any;
			checkedKeys.forEach((v: any) => {
				menuWrap.setChecked(v, true, false);
			});
		});
	});
	state.bunLoading = false;
};
/** 删除按钮操作 */
const handleDelete = (row: any) => {
	const roleId = row.roleId || state.ids;
	ElMessageBox({
		message: '是否确认删除角色编号为"' + roleId + '"的数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
	})
		.then(function () {
			return delData('/sys/role', roleId);
		})
		.then(() => {
			getList();
			ElMessage.success('删除成功');
		});
};
/** 导出按钮操作 */
const handleExport = () => {
	const queryParams = state.queryParams;
	ElMessageBox({
		message: '是否确认导出所有角色数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
	}).then(function () {
		let datetime = getDownCurrentDateTime();
		proxy.download('/sys/role/export', queryParams, `角色_${datetime}.xlsx`);
	});
};
/** 根据角色ID查询部门树结构 */
const getRoleDeptTreeselect = () => {
	return listData('/sys/dept', {}).then((response) => {
		state.deptOptions = handleTree(response.rows, 'deptId', 'parentId', 'children');
		return response.data;
	});
};
/** 根据角色ID查询菜单树结构 */
const getRoleMenuTreeselect = () => {
	return listData('/sys/menu', {}).then((response) => {
		state.menuOptions = handleTree(response.rows, 'menuId', 'parentId', 'children');
		return response.data;
	});
};
/** 提交按钮 */
const submitForm = () => {
	const formWrap = unref(roleFormRef) as any;
	if (!formWrap) return;
	formWrap.validate((valid: boolean) => {
		if (valid) {
			state.bunLoading = true;
			if (state.roleForm != null && state.roleForm.roleId != undefined) {
				state.roleForm.menuIds = getMenuAllCheckedKeys();
				updateData('/sys/role', state.roleForm).then(() => {
					ElMessage.success('修改成功');
					state.bunLoading = true;
					state.open = false;
					getList();
				});
			} else {
				state.roleForm.menuIds = getMenuAllCheckedKeys();
				addData('/sys/role', state.roleForm).then(() => {
					ElMessage.success('新增成功');
					state.bunLoading = true;
					state.open = false;
					getList();
				});
			}
		}
	});
};
// 取消按钮
const cancel = () => {
	state.open = false;
	reset();
};
// 所有菜单节点数据
const getMenuAllCheckedKeys = () => {
	const formWrap = unref(menuRef) as any;
	if (!formWrap) return;
	// 目前被选中的菜单节点
	let checkedKeys = formWrap.getCheckedKeys();
	// 半选中的菜单节点
	let halfCheckedKeys = formWrap.getHalfCheckedKeys();
	checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
	return checkedKeys;
};

// 取消按钮（数据权限）
const cancelDataScope = () => {
	state.openDataScope = false;
	reset();
};
/** 选择角色权限范围触发 */
const dataScopeSelectChange = (value: any) => {
	debugger;
	const deptWrap = unref(deptRef) as any;
	if (value !== '2') {
		deptWrap.setCheckedKeys([]);
	} else {
		if (state.roleForm.deptIds.length > 0) {
			let checkedKeys = state.roleForm.deptIds;
			checkedKeys.forEach((v: any) => {
				deptWrap.setChecked(v, true, false);
			});
		} else {
			deptWrap.setCheckedKeys([]);
		}
	}
};
// 树权限（展开/折叠）
const handleCheckedTreeExpand = (value: any, type: any) => {
	if (type == 'menu') {
		let treeList = state.menuOptions;
		for (let i = 0; i < treeList.length; i++) {
			const formWrap = unref(menuRef) as any;
			formWrap.store.nodesMap[treeList[i].menuId].expanded = value;
		}
	} else if (type == 'dept') {
		let treeList = state.deptOptions;
		for (let i = 0; i < treeList.length; i++) {
			const formWrap = unref(deptRef) as any;
			formWrap.store.nodesMap[treeList[i].deptId].expanded = value;
		}
	}
};
// 树权限（全选/全不选）
const handleCheckedTreeNodeAll = (value: any, type: any) => {
	if (type == 'menu') {
		const formWrap = unref(menuRef) as any;
		formWrap.setCheckedNodes(value ? state.menuOptions : []);
	} else if (type == 'dept') {
		const formWrap = unref(deptRef) as any;
		formWrap.setCheckedNodes(value ? state.deptOptions : []);
	}
};
// 页面加载时
onMounted(() => {
	getList();
	proxy.getDicts('sys_normal_disable').then((response: any) => {
		state.statusOptions = response.rows;
	});
});
</script>

<style scoped></style>
