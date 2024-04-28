<template>
	<div style="line-height: 0; width: 100%" class="flex justify-start">
		<draggable tag="ul" v-bind="{ animation: 200, disabled: false, ghostClass: 'ghost' }" v-model="imageList"
			class="el-upload-list el-upload-list--picture-card" group="subform" item-key="id">
			<template #item="{ element: item, index }">
				<li class="el-upload-list__item" :style="`width:${width}px; height:${height}px;`">
					<el-image :style="`width:100%; height:100%`" :src="item" fit="contain" />
					<span v-show="!state.isdrag" :class="{ 'el-upload-list__item-actions': true, 'diy-cm': isMove }">
						<SvgIcon style="color:#fff" name="ele-Plus" class="margin-right" @click="handleStorage(index)"
							:size="20" />
						<SvgIcon style="color:#fff" name="ele-Delete" @click="remove(index)" :size="20" />
					</span>
				</li>
			</template>
		</draggable>

		<div v-if="limit == 0 || (imageList.length == 0 && limit == 1)" tabindex="0" style="margin-bottom: 8px"
			class="el-upload el-upload--picture-card" :style="`width:${width}px; height:${height}px;`"
			@click="handleStorage(-1)">
			<SvgIcon name="ele-Plus" :size="20" />
		</div>
		<diy-storage ref="storage" :limit="limit" @confirm="getAttachmentFileList"></diy-storage>
	</div>
</template>

<script lang="ts" setup>
import { nextTick, ref, reactive } from 'vue';
import { useVModel } from '@vueuse/core';
import draggable from 'vuedraggable';
import { ElMessageBox } from 'element-plus';
import DiyStorage from './storage.vue';

const props = defineProps({
	// 外部v-model值
	modelValue: {
		type: Array,
		default: () => [],
	},
	width: {
		default: 80,
	},
	height: {
		default: 80,
	},
	isMove: {
		default: true,
	},
	limit: {
		default: 0,
	},
	customer: {
		type: Object,
		required: false,
		default: () => { },
	},
	contractId: {
		required: false,
		default: '',
	},
	storageType: {
		type: String,
		required: false,
		default: '',
	},
});

const state = reactive({
	isdrag: false,
	index: -1
});
const storage = ref();

const emit = defineEmits(['update:modelValue']);

const imageList = useVModel(props, 'modelValue', emit);

const handleStorage = (index = -1) => {
	state.index = index
	nextTick(() => {
		storage.value.handleStorageDlg('', '上传图片');
	});
};
// 获取商品相册资源
const getAttachmentFileList = (files = <any>[]) => {
	if (!files.length) {
		return;
	}
	if (state.index != -1) {
		imageList.value[state.index] = files[state.index].url;
	} else {
		files.forEach((item: any) => {
			imageList.value.push(item.url);
		});
	}

};

const remove = (index = -1) => {
	ElMessageBox({
		message: '是否删除该文件?',
		title: '警告',
		showCancelButton: true,
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(function () {
		imageList.value.splice(index, 1);
	});
};
</script>

<style lang="scss" scoped>
.sortable-ghost {
	opacity: 0;
}
</style>
