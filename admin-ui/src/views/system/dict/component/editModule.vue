<template>
	<div class="system-menu-container">
		<el-dialog v-model="state.isShowDialog" width="769px" center>
			<template #title>
				<div style="font-size: large" v-drag="['.system-menu-container .el-dialog', '.system-menu-container .el-dialog__header']">{{ title }}</div>
			</template>
			<el-form :model="state.ruleForm" :rules="state.ruleRules" ref="ruleFormRef" label-width="80px">
				<el-form-item label="字典名称" prop="dictName">
					<el-input v-model="state.ruleForm.dictName" placeholder="请输入字典名称" />
				</el-form-item>
				<el-form-item label="字典类型" prop="dictType">
					<el-input v-model="state.ruleForm.dictType" placeholder="请输入字典类型" />
				</el-form-item>

				<el-form-item label="状态" prop="status">
					<el-radio-group v-model="state.ruleForm.status">
						<el-radio v-for="dict in state.statusOptions" :key="dict.dictValue" :label="dict.dictValue">{{ dict.dictLabel }} </el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="备注" prop="remark">
					<el-input v-model="state.ruleForm.remark" type="textarea" placeholder="请输入内容" />
				</el-form-item>
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

<script setup lang="ts">
import { reactive, ref, unref, getCurrentInstance } from 'vue';

import { ElMessage } from 'element-plus';
import { addData, updateData } from '@/api';
const { proxy } = getCurrentInstance() as any;
const ruleFormRef = ref<HTMLElement | null>(null);

defineProps({
	title: {
		type: String,
		default: () => '',
	},
});
const state = reactive({
	// 是否显示弹出层
	isShowDialog: false,
	loading: false,
	// 表单参数对象
	ruleForm: {
		dictId: 0, // 字典ID
		dictName: '', // 字典名称
		dictType: '', // 字典类型
		status: '', //字典状态
		remark: '', // 备注
	},
	// 字典状态数据字典
	statusOptions: [
		{
			dictValue: '0',
			dictLabel: '正常',
		},
		{
			dictValue: '1',
			dictLabel: '禁用',
		},
	],
	// 字典树选项
	deptOptions: [],
	// 表单校验
	ruleRules: {
		dictName: [{ required: true, message: '字典名称不能为空', trigger: 'blur' }],
		dictType: [{ required: true, message: '字典类型不能为空', trigger: 'blur' }],
	},
});
// 打开弹窗
const openDialog = (row: any) => {
	if (row.dictId && row.dictId != undefined && row.dictId != '') {
		state.ruleForm = row;
		state.ruleForm.dictId = row.dictId; // 字典ID
		state.ruleForm.dictName = row.dictName; // 字典名称
		state.ruleForm.dictType = row.dictType; // 字典类型
		state.ruleForm.status = row.status; //字典状态
		state.ruleForm.remark = row.remark; // 备注
	} else {
		initForm();
	}
	state.isShowDialog = true;
	state.loading = false;
};

// 关闭弹窗
const closeDialog = (row?: object) => {
	proxy.mittBus.emit('onEditPostModule', row);
	state.isShowDialog = false;
};
// 取消
const onCancel = () => {
	closeDialog();
};

// 保存
const onSubmit = () => {
	const formWrap = unref(ruleFormRef) as any;
	if (!formWrap) return;
	formWrap.validate((valid: boolean) => {
		if (valid) {
			state.loading = true;
			if (state.ruleForm.dictId != undefined && state.ruleForm.dictId != 0) {
				updateData('/sys/dict', state.ruleForm)
					.then(() => {
						ElMessage.success('修改成功');
						state.loading = false;
						closeDialog(state.ruleForm); // 关闭弹窗
					})
					.finally(() => {
						state.loading = false;
					});
			} else {
				addData('/sys/dict', state.ruleForm)
					.then(() => {
						ElMessage.success('新增成功');
						state.loading = false;
						closeDialog(state.ruleForm); // 关闭弹窗
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
	state.ruleForm.dictId = 0; // 字典ID
	state.ruleForm.dictName = ''; // 字典名称
	state.ruleForm.dictType = ''; // 字典类型
	state.ruleForm.status = '0'; //字典状态
	state.ruleForm.remark = ''; // 备注
};

defineExpose({
	openDialog,
});
</script>
