<template>
	<div class="container">
		<el-card shadow="always">
			<!--查询-->
			<el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
				<el-form-item label="菜单名称" prop="menuName">
					<el-input placeholder="菜单名称模糊查询" clearable @keyup.enter="handleQuery" style="width: 240px" v-model="queryParams.menuName" />
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-select v-model="queryParams.status" placeholder="菜单状态" clearable style="width: 240px">
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
					<el-button type="primary" plain v-auth="'system:menu:add'" @click="onOpenAddMenu">
						<SvgIcon name="ele-Plus" />
						新增
					</el-button>
					<el-button type="warning" plain v-auth="'system:menu:add'" @click="handleExport"> <SvgIcon name="ele-Download" />导出 </el-button>
				</el-form-item>
			</el-form>

			<!--数据表格-->
			<el-table v-loading="loading" :data="menuList" row-key="menuId" border :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
				<el-table-column prop="menuName" label="菜单名称" :show-overflow-tooltip="true">
					<template #default="scope"> {{ scope.row.menuId }}:{{ scope.row.menuName }} </template>
				</el-table-column>
				<el-table-column prop="icon" label="图标" align="center" width="100">
					<template #default="scope">
						<SvgIcon :name="scope.row.icon"></SvgIcon>
					</template>
				</el-table-column>
				<el-table-column prop="orderNum" label="排序" width="60"></el-table-column>
				<el-table-column prop="icon" label="分类" align="center" width="100">
					<template #default="scope">
						<el-tag :type="scope.row.menuType === 'M' ? 'danger' : scope.row.menuType === 'C' ? 'success' : 'warning'" disable-transitions
							>{{ typeFormat(scope.row) || '-- --' }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="permission" label="权限标识" width="100" :show-overflow-tooltip="true"></el-table-column>
				<el-table-column prop="component" label="组件路径" width="150" :show-overflow-tooltip="true"></el-table-column>
				<el-table-column prop="status" label="状态" width="80">
					<template #default="scope">
						<el-tag :type="scope.row.status === '1' ? 'danger' : 'success'" disable-transitions>{{ statusFormat(scope.row) || '-- --' }} </el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="status" label="显示隐藏" width="100">
					<template #default="scope">
						<el-tag :type="scope.row.status === '1' ? 'danger' : 'success'" disable-transitions>{{ isHideFormat(scope.row) || '-- --' }} </el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center" fixed="right" width="380">
					<template #default="scope">
						<div class="flex">
							<el-button type="text" icon="el-icon-edit" @click="onOpenEditMenu(scope.row)"> <SvgIcon name="ele-Edit" />修改 </el-button>
							<el-button type="text" icon="el-icon-plus" @click="onOpenAddMenu(scope.row)"> <SvgIcon name="ele-Plus" />新增 </el-button>
							<el-button type="text" icon="el-icon-edit" @click="handleCopy(scope.row)"> <SvgIcon name="ele-CopyDocument" />复制 </el-button>
							<el-button type="text" icon="el-icon-delete" @click="handleDelete(scope.row)"> <SvgIcon name="ele-Delete" />删除 </el-button>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<!-- 添加或修改菜单对话框 -->
		<EditMenu ref="editMenuRef" :title="title" />
	</div>
</template>

<script setup lang="ts">
import { toRefs, getCurrentInstance, onMounted, onUnmounted, reactive, ref } from 'vue';
import { getDownCurrentDateTime } from '@/utils/formatTime';
import EditMenu from './component/editMenu.vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { delData, listData, copyData } from '@/api';
import { handleTree } from '@/utils';
const { proxy } = getCurrentInstance() as any;
const editMenuRef = ref();
const state: any = reactive({
	// 遮罩层
	loading: true,
	// 菜单表格树数据
	menuList: [] as any,
	// 菜单树选项
	menuOptions: [],
	// 弹出层标题
	title: '',
	// 是否显示弹出层
	open: false,
	// 显示状态数据字典
	isHideOptions: [],
	// 菜单状态数据字典
	statusOptions: [],
	// 菜单类型数据字典
	menuTypeOptions: [],
	// 查询参数
	queryParams: {
		menuName: undefined,
		status: undefined,
	},
});
const { loading, menuList, title, statusOptions, queryParams } = toRefs(state);
/** 查询菜单列表 */
const getList = () => {
	state.loading = true;
	listData('/sys/menu', state.queryParams).then((response: any) => {
		state.menuList = handleTree(response.rows, 'menuId', 'parentId', 'children');
		state.loading = false;
	});
};
/** 搜索按钮操作 */
const handleQuery = () => {
	getList();
};
/** 重置按钮操作 */
const resetQuery = () => {
	state.queryParams.menuName = '';
	state.queryParams.status = '';
	state.queryParams.menuType = '';
	handleQuery();
};
/** 导出按钮操作 */
const handleExport = () => {
	const queryParams = state.queryParams;
	ElMessageBox({
		message: '是否确认导出所有菜单数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		let datetime = getDownCurrentDateTime();
		proxy.download('/sys/menu/export', queryParams, `菜单_${datetime}.xlsx`);
	});
};
// 打开新增菜单弹窗
const onOpenAddMenu = (row: any) => {
	state.title = '添加菜单';
	let parentId = row.menuId;
	row = [];
	row.parentId = parentId;
	editMenuRef.value.openDialog(row);
};
// 打开编辑菜单弹窗
const onOpenEditMenu = (row: object) => {
	state.title = '修改菜单';
	editMenuRef.value.openDialog(row);
};
/** 删除按钮操作 */
const handleDelete = (row: any) => {
	ElMessageBox({
		message: '是否确认删除名称为"' + row.menuName + '"的数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		return delData('/sys/menu', row.menuId).then(() => {
			handleQuery();
			ElMessage.success('删除成功');
		});
	});
};

/** 删除按钮操作 */
const handleCopy = (row: any) => {
	ElMessageBox({
		message: '是否确认复制名称为"' + row.menuName + '"的数据项?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		return copyData('/sys/menu', row.menuId).then(() => {
			handleQuery();
			ElMessage.success('复制成功');
		});
	});
};

// 菜单显示隐藏字典翻译
const isHideFormat = (row: any) => {
	if (row.menuType == 'F') {
		return '';
	}
	return proxy.selectDictLabel(state.isHideOptions, row.isHide);
};
// 菜单状态字典翻译
const statusFormat = (row: any) => {
	if (row.menuType == 'F') {
		return '';
	}
	return proxy.selectDictLabel(state.statusOptions, row.status);
};
// 菜单类型字典翻译
const typeFormat = (row: any) => {
	return proxy.selectDictLabel(state.menuTypeOptions, row.menuType);
};
// 页面加载时
onMounted(() => {
	getList();
	// 查询显示状态数据字典
	proxy.getDicts('sys_show_hide').then((response: any) => {
		state.isHideOptions = response.rows;
	});
	proxy.getDicts('sys_menu_type').then((response: any) => {
		state.menuTypeOptions = response.rows;
	});
	// 查询菜单状态数据字典
	proxy.getDicts('sys_normal_disable').then((response: any) => {
		state.statusOptions = response.rows;
	});
	proxy.mittBus.on('onEditMenuModule', () => {
		handleQuery();
	});
});
// 页面卸载时
onUnmounted(() => {
	proxy.mittBus.off('onEditDeptModule');
});
</script>
