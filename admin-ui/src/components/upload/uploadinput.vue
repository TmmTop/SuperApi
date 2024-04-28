<template>
	<el-input type="text" :class="url && type == 'image' ? 'diygw-img-input' : ''" v-model="url" clearable :placeholder="'请选择' + title">
		<template #append>
			<el-image
				:src="url"
				v-if="url && type == 'image'"
				style="width: 30px; height: 30px"
				:preview-teleported="true"
				:preview-src-list="[url]"
			></el-image>
			<el-button @click="handleStorage"> 选择{{ title }} </el-button>
		</template>
	</el-input>
	<diy-storage ref="storage" :type="type" :accept="accept" :limit="1" @confirm="getAttachmentFileList"></diy-storage>
</template>

<script lang="ts" setup>
import { nextTick, ref, defineEmits } from 'vue';
import { useVModel } from '@vueuse/core';
import DiyStorage from './storage.vue';

const props = defineProps({
	// 外部v-model值
	modelValue: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'image',
	},
	accept: {
		type: String,
		default: 'image/*',
	},
});

const storage = ref(null);

const emit = defineEmits(['update:modelValue']);

const url = useVModel(props, 'modelValue', emit);

const handleStorage = () => {
	nextTick(() => {
		storage.value!.handleStorageDlg('', '上传' + props.title);
	});
};
// 获取商品相册资源
const getAttachmentFileList = (files = <any>[]) => {
	if (!files.length) {
		return;
	}
	url.value = files[0].url;
};
</script>

<style lang="scss" scoped>
.diygw-img-input ::v-deep(.el-input-group__append) {
	padding-left: 0px;
}
.diygw-img-input {
	::v-deep(.el-image) {
		margin-right: 15px;
	}
}
.sortable-ghost {
	opacity: 0;
}
</style>
