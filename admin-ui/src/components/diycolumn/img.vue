<template>
	<div class="flex justify-center">
		<template v-if="isone && srcs.length > 0">
			<div class="flex img-item">
				<el-image :style="style" :preview-teleported="true" :preview-src-list="srcs" :src="srcs[0]"
					:fit="fit"></el-image><span class="tip" v-if="srcs.length > 0">{{ srcs.length }}</span>
			</div>
		</template>
		<template v-if="!isone && srcs.length > 0">
			<el-image :style="style" :preview-teleported="true" :preview-src-list="srcs" v-for="item in srcs" :key="item"
				:src="item" :fit="fit"></el-image>
		</template>
	</div>
</template>
<script lang="ts" setup name="DiyImg">
import { computed } from 'vue';
const props = defineProps({
	// 外部v-model值
	src: {
		type: String,
		default: '',
	},
	style: {
		type: String,
		default: '',
	},
	fit: {
		type: String,
		default: 'contain',
	},
	isone: {
		type: Boolean,
		default: true,
	}
});

const srcs = computed(() => {
	if (props.src) {
		if (Array.isArray(props.src)) {
			return props.src;
		}
		let src = props.src.trim();
		if (src.startsWith('[') && src.endsWith(']')) {
			return JSON.parse(src);
		} else {
			return [props.src];
		}
	}
	return [];
});
</script>

<style lang="scss" scoped>
.sortable-ghost {
	opacity: 0;
}

.img-item {
	position: relative;
	border: 1px solid var(--el-border-color);
	border-radius: 6px;

	.tip {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 10px;
		line-height: 1;
		border-bottom-left-radius: 6px;
		background-color: #0000008b;
		padding: 3px;
		color: #FFF;
	}
}
</style>
