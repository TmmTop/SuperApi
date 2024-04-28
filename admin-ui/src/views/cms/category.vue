<template>
	<div class="container">
		<div class="diygw-title diygw-top solid-bottom" style="color: white; background: #07c160">
			<div class="title flex1 text-center"></div>
		</div>
		<el-form ref="formFormRef" v-model="form" label-width="120px" label-postition="right" class="flex flex-wrap diygw-col-24">
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="测边栏位置">
					<el-radio-group v-model="form.location">
						<el-radio v-for="item in formData.locationDatas" :key="item.value" :label="item.value">
							{{ item.label }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="启用自定义">
					<el-radio-group v-model="form.islocation">
						<el-radio v-for="item in formData.islocationDatas" :key="item.value" :label="item.value">
							{{ item.label }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="图标类型">
					<el-radio-group v-model="form.icontype">
						<el-radio v-for="item in formData.icontypeDatas" :key="item.value" :label="item.value">
							{{ item.label }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="宣传图">
					<diy-uploadinput v-model="form.img" title="宣传图"></diy-uploadinput>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="图标类型">
					<el-radio-group v-model="form.jumptype">
						<el-radio v-for="item in formData.jumptypeDatas" :key="item.value" :label="item.value">
							{{ item.label }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="侧边栏标题">
					<el-input type="text" placeholder="请输入提示" v-model="form.title"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="网址">
					<el-input type="text" placeholder="请输入提示" v-model="form.link"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="打开类型">
					<el-radio-group v-model="form.linktype">
						<el-radio v-for="item in formData.linktypeDatas" :key="item.value" :label="item.value">
							{{ item.label }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="地理经度">
					<el-input type="text" placeholder="请输入提示" v-model="form.lng"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="地理纬度">
					<el-input type="text" placeholder="请输入提示" v-model="form.lat"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="电话">
					<el-input type="text" placeholder="请输入提示" v-model="form.phone"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="小程序地址">
					<el-input type="text" placeholder="请输入提示" v-model="form.wechatxcx"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-12">
				<el-form-item class="diygw-el-rate" label="小程序原始ID">
					<el-input type="text" placeholder="请输入提示" v-model="form.wechatappid"> </el-input>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="弹出内容">
					<Editor v-model="form.content" />
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="语音讲解">
					<diy-uploadinput type="mp3" accept=".mp3,.wma,.wav,.amr" v-model="form.mp3" title="语音讲解"></diy-uploadinput>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="视频讲解">
					<diy-uploadinput type="video" accept=".rm,.rmvb,.wmv,.avi,.mpg,.mpeg,.mp4" v-model="form.video" title="视频讲解"></diy-uploadinput>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="单图">
					<diy-uploadinput v-model="form.upload" title="单图"></diy-uploadinput>
				</el-form-item>
			</div>
			<div class="flex diygw-col-24">
				<el-form-item class="diygw-el-rate" label="文件">
					<diy-uploadinput type="file" accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.zip,.rar" v-model="form.upload1" title="文件"></diy-uploadinput>
				</el-form-item>
			</div>
		</el-form>
		<div class="clearfix"></div>
	</div>
</template>

<script setup>
	//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
	import { ref, toRefs, reactive, onMounted, getCurrentInstance, onUnmounted } from 'vue';

	import DiyUploadinput from '@/components/upload/uploadinput.vue';
	import Editor from '@/components/editor/index.vue';

	const { proxy } = getCurrentInstance();

	const state = reactive({
		form: {
			location: 'right',
			islocation: 'yes',
			icontype: 'system',
			img: '',
			jumptype: '',
			title: '',
			link: '',
			linktype: 'window',
			lng: '',
			lat: '',
			phone: '',
			wechatxcx: '',
			wechatappid: '',
			content: '',
			mp3: '',
			video: [],
			upload: '',
			upload1: ''
		},

		formData: {
			locationDatas: [
				{ value: 'right', label: '右边', checked: true },
				{ value: 'left', label: '左边', checked: false }
			],
			islocationDatas: [
				{ value: 'yes', label: '是', checked: true },
				{ value: 'not', label: '否', checked: false }
			],
			icontypeDatas: [
				{ value: 'system', label: '系统图标', checked: true },
				{ value: 'user', label: '用户图标', checked: false }
			],
			jumptypeDatas: [
				{ value: 'mp3', label: '全局音乐', checked: false },
				{ value: 'favor', label: '点赞', checked: false },
				{ value: 'view', label: '人气', checked: false },
				{ value: 'pinglun', label: '评论', checked: false },
				{ value: 'link', label: '超链接', checked: false },
				{ value: 'favor', label: '点赞', checked: false },
				{ value: 'phone', label: '拨打电话', checked: false },
				{ value: 'wechatxcx', label: '打开微信小程序', checked: false },
				{ value: 'content', label: '弹出内容', checked: false },
				{ value: 'mp3', label: '语音讲解', checked: false },
				{ value: 'video', label: '视频讲解', checked: false },
				{ value: 'daohang', label: '导航', checked: false }
			],
			linktypeDatas: [
				{ value: 'window', label: '弹窗打开', checked: true },
				{ value: 'blank', label: '新页面打开', checked: false }
			]
		}
	});
	const { form, formData } = toRefs(state);
	const formFormRef = ref(null);
	const submitForm = async () => {
		if (!formFormRef.value) return;
		await formFormRef.value.validate((valid, fields) => {
			if (valid) {
				console.log('submit!');
			} else {
				console.log('error submit!', fields);
			}
		});
	};

	const resetForm = () => {
		if (!formFormRef.value) return;
		formFormRef.value.resetFields();
	};
	const init = async () => {};
	// 页面加载时
	onMounted(() => {
		init();
	});

	// 页面卸载时
	onUnmounted(() => {});
</script>

<style lang="scss" scoped>
	.container {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 12px;
	}
</style>
