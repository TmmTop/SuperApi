<template>
	<div style="border: 1px solid #ccc">
		<Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
		<Editor
			style="overflow-y: hidden"
			:style="{ height: height }"
			v-model="data"
			:defaultConfig="editorConfig"
			:mode="mode"
			@onCreated="handleCreated"
		/>
		<diy-storage ref="storage" style="display: none" :limit="uploadConfig.limit" @confirm="getAttachmentFileList"></diy-storage>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, getCurrentInstance, onMounted, onBeforeUnmount, shallowRef, toRefs } from 'vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { useVModel } from '@vueuse/core';
import { toolbarKeys } from './toolbar';
import { IDomEditor } from '@wangeditor/editor';
import DiyStorage from '@/components/upload/storage.vue';

export default defineComponent({
	name: 'DiyEditor',
	components: { Editor, Toolbar, DiyStorage },
	props: {
		// 节点 id
		id: {
			type: String,
			default: () => 'wangeditor',
		},
		// 是否禁用
		isDisable: {
			type: Boolean,
			default: () => false,
		},
		// 内容框默认 placeholder
		placeholder: {
			type: String,
			default: () => '请输入内容',
		},
		// 双向绑定：双向绑定值，字段名为固定，改了之后将不生效
		// 参考：https://v3.cn.vuejs.org/guide/migration/v-model.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5
		modelValue: String,
		// https://www.wangeditor.com/v5/getting-started.html#mode-%E6%A8%A1%E5%BC%8F
		// 模式，可选 <default|simple>，默认 default
		mode: {
			type: String,
			default: () => 'default',
		},
		// 高度
		height: {
			type: String,
			default: () => '300px',
		},
	},
	setup(props, { emit }) {
		const obj = reactive({
			storageCallback: '',
			uploadConfig: {
				limit: 1,
			},
		});
		const storage = ref(null);
		const getAttachmentFileList = (files: any) => {
			if (!files.length) {
				return;
			}
			const file = files[0];
			editorRef.value.restoreSelection();
			editorRef.value.dangerouslyInsertHtml("<img src='" + file.url + "'/>");
		};

		const data = useVModel(props, 'modelValue', emit);
		// 编辑器实例，必须用 shallowRef
		const editorRef = shallowRef();

		// // 模拟 ajax 异步获取内容
		// onMounted(() => {
		//   setTimeout(() => {
		//     valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
		//   }, 1500);
		// });
		// 自定义转换链接 url
		const toolbarConfig = {
			toolbarKeys,
		};
		const editorConfig = { placeholder: props.placeholder };

		// 组件销毁时，也及时销毁编辑器
		onBeforeUnmount(() => {
			proxy.mittBus.off('onImageStoregeShow');
			const editor = editorRef.value;
			if (editor == null) return;
			editor.destroy();
		});
		const { proxy } = <any>getCurrentInstance();
		onMounted(() => {
			// 设置 i18n，App.vue 中的 el-config-provider
			proxy.mittBus.on('onImageStoregeShow', () => {
				storage.value!.handleStorageDlg('', '上传图片');
			});
		});

		const handleCreated = (editor: IDomEditor) => {
			editorRef.value = editor; // 记录 editor 实例，重要！
		};

		return {
			...toRefs(obj),
			storage,
			editorRef,
			data,
			toolbarConfig,
			editorConfig,
			getAttachmentFileList,

			handleCreated,
		};
	},
});
</script>
