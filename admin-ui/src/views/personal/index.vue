<template>
	<div class="container">
		<div class="el-card is-always-shadow diygw-col-24 admintable-clz">
			<div class="el-card__body">

				<div class="current-title">个人中心</div>
				<el-form ref="editFormRef" :model="state.personalForm" size="default" label-width="200px"
					label-postition="right" class="flex flex-wrap diygw-col-16">
					<el-row :gutter="35">
						<el-col :xs="24" class="mb20">
							<el-form-item label="姓名" :rules="[
								{
									required: true,
									trigger: 'blur',
									message: '姓名不能为空哟',
								},
							]" prop="nickname">
								<el-input v-model="state.personalForm.nickname" placeholder="请输入姓名" clearable></el-input>
							</el-form-item>
						</el-col>

						<el-col :xs="24" class="mb20">
							<el-form-item label="原密码">
								<el-input v-model="state.personalForm.password" type="password" placeholder="请输入密码"
									clearable></el-input>
							</el-form-item>
						</el-col>
						<el-col :xs="24" class="mb20">
							<el-form-item label="新密码">
								<el-input v-model="state.personalForm.newpassword" type="password" placeholder="请输入密码"
									clearable></el-input>
							</el-form-item>
						</el-col>
						<el-col :xs="24" class="mb20">
							<el-form-item prop="upload" class="diygw-el-rate" label="头像">
								<diy-uploadinput v-model="state.personalForm.avatar" title="点击上传头像"></diy-uploadinput>
							</el-form-item>
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<el-form-item>
								<el-button type="primary" :loading="state.saveloading" @click="onSubmit">
									<el-icon>
										<ele-Position />
									</el-icon>
									更新个人信息
								</el-button>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script setup name="personal">
import { reactive, ref, unref, onMounted } from 'vue';
import DiyUploadinput from '@/components/upload/uploadinput.vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserInfo } from '@/stores/userInfo';
import { postData } from '@/api';
import { ElMessage } from 'element-plus';
import { Session } from '@/utils/storage';
const stores = useUserInfo();
const { userInfos } = storeToRefs(stores);
const router = useRouter();
// 定义变量内容
const state = reactive({
	loading: false,
	personalForm: {
		nocheck: '1',
		id: undefined,
		nickname: '',
		password: '',
		newpassword: '',
		avatar: '',
	},
	saveloading: false,
	editFormRules: {
		nickname: [
			{
				trigger: 'blur',
				required: true,
				message: '姓名不能为空',
			},
		],
	},
});

const editFormRef = ref(null);
// 保存
const onSubmit = () => {
	const formWrap = unref(editFormRef);
	if (!formWrap) return;
	formWrap.validate((valid) => {
		if (valid) {
			state.saveloading = true;
			let url = '/sys/user/update'
			if (state.personalForm.password) {
				if (!state.personalForm.newpassword) {
					ElMessage.error('请输入新密码！');
					state.saveloading = false;
					return false;
				}
			}
			postData(url, state.personalForm)
				.then(() => {
					ElMessage.success('修改成功');
					userInfos.value.avatar = state.personalForm.avatar;
					userInfos.value.nickname = state.personalForm.nickname;
					Session.set('userInfo', userInfos.value);
					state.saveloading = false;
				})
				.finally(() => {
					state.saveloading = false;
				});
		} else {
			ElMessage.error('验证未通过！');
		}
	});
};



onMounted(() => {
	if (userInfos.value) {
		state.personalForm.nickname = userInfos.value.nickname;
		state.personalForm.avatar = userInfos.value.avatar;
		state.personalForm.userId = userInfos.value.userId
		state.personalForm.username = userInfos.value.userName
	} else {
		router.push({
			path: "/",
		});
	}
})
</script>
