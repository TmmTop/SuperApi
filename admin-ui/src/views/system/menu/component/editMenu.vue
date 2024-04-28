<template>
	<div class="system-menu-container">
		<el-dialog v-model="state.isShowDialog" width="769px" center>
			<template #title>
				<div style="font-size: large"
					v-drag="['.system-menu-container .el-dialog', '.system-menu-container .el-dialog__header']">{{ title }}
				</div>
			</template>
			<el-form :model="state.ruleForm" :rules="state.ruleRules" ref="ruleFormRef" label-width="80px">
				<el-row :gutter="35">
					<el-col :span="24">
						<el-form-item label="上级菜单" prop="parentId">
							<el-cascader v-model="state.ruleForm.parentId" :options="state.menuOptions" class="w100" :props="{
								label: 'menuName',
								value: 'menuId',
								checkStrictly: true,
								emitPath: false,
							}" clearable filterable placeholder="选择上级菜单" :show-all-levels="false"></el-cascader>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="菜单类型" prop="menuType">
							<el-radio-group v-model="state.ruleForm.menuType">
								<el-radio v-for="dict in state.menuTypeOptions" :key="dict.dictValue"
									:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="菜单名称" prop="menuName">
							<el-input v-model="state.ruleForm.menuName" placeholder="请输入菜单名称" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="菜单排序" prop="sort">
							<el-input-number v-model="state.ruleForm.sort" placeholder="菜单排序" clearable></el-input-number>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-form-item label="菜单图标" prop="icon">
							<IconSelector placeholder="请输入菜单图标" v-model="state.ruleForm.icon" type="all" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-row :gutter="8">
							<el-col :span="22">
								<el-form-item label="权限标识" prop="permission">
									<el-input v-model="state.ruleForm.permission" placeholder="路由权限标识" clearable
										:disabled="state.ruleForm.menuType == 'M' ? true : false"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="2">
								<el-tooltip content="路由权限标识（多个请用逗号隔开）" placement="top">
									<i class="fa fa-exclamation-circle ml10 mt10"></i>
								</el-tooltip>
							</el-col>
						</el-row>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-row :gutter="8">
							<el-col :span="22">
								<el-form-item label="组件地址">
									<el-input v-model="state.ruleForm.component" placeholder="组件地址" clearable></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="2">
								<el-tooltip
									content="菜单对应的具体vue页面文件路径views的下级路径/system/user/index,外链请填写/layout/routerView/link，内链请填写/layout/routerView/iframes"
									placement="top">
									<i class="fa fa-exclamation-circle ml10 mt10"></i>
								</el-tooltip>
							</el-col>
						</el-row>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-row :gutter="8">
							<el-col :span="22">
								<el-form-item label="路由地址">
									<el-input v-model="state.ruleForm.path" placeholder="请输入路由地址" clearable></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="2">
								<el-tooltip content="要和页面name保持一致:例如 /system/role" placement="top">
									<i class="fa fa-exclamation-circle ml10 mt10"></i>
								</el-tooltip>
							</el-col>
						</el-row>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						<el-form-item label="菜单状态" prop="status">
							<el-radio-group v-model="state.ruleForm.status">
								<el-radio v-for="dict in state.statusOptions" :key="dict.dictValue"
									:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-form-item label="是否隐藏">
							<el-radio-group v-model="state.ruleForm.isHide">
								<el-radio v-for="dict in state.isHideOptions" :key="dict.dictValue"
									:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-form-item label="是否缓存">
							<el-radio-group v-model="state.ruleForm.isKeepAlive">
								<el-radio v-for="dict in state.yesOrNoOptions" :key="dict.dictValue"
									:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-row :gutter="8">
							<el-col :span="22">
								<el-form-item label="是否固定">
									<el-radio-group v-model="state.ruleForm.isAffix">
										<el-radio v-for="dict in state.yesOrNoOptions" :key="dict.dictValue"
											:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="2">
								<el-tooltip content="是否要固定到tag头部" placement="top" v-if="state.ruleForm.menuType != 'F'">
									<i class="fa fa-exclamation-circle ml10 mt10"></i>
								</el-tooltip>
							</el-col>
						</el-row>
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-form-item label="是否内嵌">
							<el-radio-group v-model="state.ruleForm.isIframe">
								<el-radio v-for="dict in state.yesOrNoOptions" :key="dict.dictValue"
									:label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-if="state.ruleForm.menuType != 'F'">
						<el-form-item label="链接地址">
							<el-input v-model="state.ruleForm.isLink" placeholder="外链/内嵌时链接地址（http://***.com）" clearable>
							</el-input>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
						<el-form-item label="备注">
							<el-input v-model="state.ruleForm.remark" placeholder="请输入备注内容" clearable
								type="textarea"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="onCancel">取 消</el-button>
					<el-button type="primary" @click="onSubmit" :loading="state.loading">编 辑</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, unref, getCurrentInstance } from 'vue';
import IconSelector from '@/components/iconSelector/index.vue';
import { listData, addData, updateData } from '@/api';
import { ElMessage } from 'element-plus';

import { handleTree } from '@/utils';
defineProps({
	title: {
		type: String,
		default: () => '',
	},
});

const { proxy } = getCurrentInstance() as any;
const ruleFormRef = ref<HTMLElement | null>(null);
const state = reactive({
	// 是否显示弹出层
	isShowDialog: false,
	loading: false,
	/**
	 * 参数请参考 `/src/router/route.ts` 中的 `dynamicRoutes` 路由菜单格式（请注意参数类型！）
	 * 受到 `element plus` 类型 `string/number/object` 影响，不可使用 `:value="true"`
	 * 的写法，所以传值到后台时，需要转换成布尔值，否则页面可能出现玄学。
	 * 路由权限标识为数组格式，基本都需要自行转换类型
	 */
	ruleForm: {
		menuId: 0, // 菜单ID
		menuName: '', // 菜单名称
		menuType: '',
		parentId: 0, // 父菜单ID
		component: '', // 组件地址
		path: '',
		sort: 1, // 菜单排序
		status: '', //菜单状态
		title: '', // 菜单名称
		icon: '', // 菜单图标
		isHide: '', // 是否隐藏
		isKeepAlive: '', // 是否缓存
		isAffix: '', // 是否固定
		isLink: '', // 是否外链，开启外链条件，`1、isLink:true 2、链接地址不为空`
		isIframe: '', // 是否内嵌，开启条件，`1、isIframe:true 2、链接地址不为空`
		permission: '', // 路由权限标识（多个请用逗号隔开），最后转成数组格式
		remark: '', // 备注
	},
	// 显示状态数据字典
	isHideOptions: <any>[],
	// 菜单状态数据字典
	statusOptions: <any>[],
	// 菜单类型数据字典
	menuTypeOptions: <any>[],
	// 数字是否数据字典
	yesOrNoOptions: <any>[],
	// 菜单树选项
	menuOptions: <any>[],
	// 表单校验
	ruleRules: {
		menuName: [{ required: true, message: '菜单名称不能为空', trigger: 'blur' }],
		parentId: [{ required: true, message: '父菜单不能为空', trigger: 'blur' }],
		menuType: [{ required: true, message: '菜单类型不能为空', trigger: 'blur' }],
		status: [{ required: true, message: '菜单状态不能为空', trigger: 'blur' }],
		orderNum: [{ required: true, message: '菜单顺序不能为空', trigger: 'blur' }],
	},
});
// 打开弹窗
const openDialog = (row: any) => {
	if (row.menuId && row.menuId != undefined && row.menuId != 0) {
		state.ruleForm = row;
	} else {
		initForm();
		state.ruleForm.parentId = row.parentId;
	}

	state.isShowDialog = true;
	state.loading = false;
	// 查询显示状态数据字典
	proxy.getDicts('sys_show_hide').then((response: any) => {
		state.isHideOptions = response.rows;
	});
	// 查询菜单状态数据字典
	proxy.getDicts('sys_normal_disable').then((response: any) => {
		state.statusOptions = response.rows;
	});
	// 查询菜单类型数据字典
	proxy.getDicts('sys_menu_type').then((response: any) => {
		state.menuTypeOptions = response.rows;
	});
	// 查询数字是否数据字典
	proxy.getDicts('sys_num_yes_no').then((response: any) => {
		state.yesOrNoOptions = response.rows;
	});
	// 查询菜单下拉树结构
	listData('/sys/menu', {}).then((response: any) => {
		response.rows.unshift({ menuId: 0, menuName: '顶级菜单' });
		state.menuOptions = handleTree(response.rows, 'menuId', 'parentId', 'children');
	});
};
// 关闭弹窗
const closeDialog = (row?: object) => {
	initForm();
	proxy.mittBus.emit('onEditMenuModule', row);
	state.isShowDialog = false;
};
// 取消
const onCancel = () => {
	closeDialog();
	initForm();
};
// 保存
const onSubmit = () => {
	const formWrap = unref(ruleFormRef) as any;
	if (!formWrap) return;
	formWrap.validate((valid: boolean) => {
		if (valid) {
			if (state.ruleForm.component == '') {
				if (state.ruleForm.menuType == 'F') {
					state.ruleForm.component = '';
				} else {
					state.ruleForm.component = 'Layout';
				}
			}
			state.loading = true;
			if (state.ruleForm.menuId != undefined && state.ruleForm.menuId != 0) {
				updateData('/sys/menu', state.ruleForm)
					.then(() => {
						ElMessage.success('修改成功');
						state.loading = false;
						closeDialog(); // 关闭弹窗
					})
					.finally(() => {
						state.loading = false;
					});
			} else {
				addData('/sys/menu', state.ruleForm)
					.then(() => {
						ElMessage.success('新增成功');
						state.loading = false;
						closeDialog(); // 关闭弹窗
					})
					.finally(() => {
						state.loading = false;
					});
			}
		}
	});
};

// 表单初始化，方法：`resetFields()` 无法使用
const initForm = () => {
	state.ruleForm.menuId = 0; // 菜单ID
	state.ruleForm.menuName = ''; // 菜单名称
	state.ruleForm.menuType = '';
	state.ruleForm.parentId = 0; // 父菜单ID
	state.ruleForm.component = ''; // 组件地址
	state.ruleForm.path = ''; // 路由地址
	state.ruleForm.orderNum = 1; // 菜单排序
	state.ruleForm.status = ''; //菜单状态
	state.ruleForm.title = ''; // 菜单名称
	state.ruleForm.icon = ''; // 菜单图标
	state.ruleForm.isHide = ''; // 是否隐藏
	state.ruleForm.isKeepAlive = ''; // 是否缓存
	state.ruleForm.isAffix = ''; // 是否固定
	state.ruleForm.isLink = ''; // 是否外链，开启外链条件，`1、isLink:true 2、链接地址不为空`
	state.ruleForm.isIframe = ''; // 是否内嵌，开启条件，`1、isFrame:true 2、链接地址不为空`
	state.ruleForm.permission = ''; // 路由权限标识（多个请用逗号隔开），最后转成数组格式
	state.ruleForm.remark = ''; // 备注
};

defineExpose({
	openDialog,
});
</script>
