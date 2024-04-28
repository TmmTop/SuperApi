<template>
	<el-pagination
		small
		:page-size="size"
		:total="total"
		:page-sizes="sizes"
		:disabled="loading"
		:layout="sizes.includes(size) && isSize ? layout : simple"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
	>
	</el-pagination>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	name: 'DiyPagefooter',
	props: {
		current: {
			default: 0,
		},
		size: {
			default: 0,
		},
		total: {
			default: 0,
		},
		loading: {
			default: false,
		},
		isSize: {
			default: true,
		},
	},
	emits: ['change'],
	setup(props, { emit }) {
		const data = reactive({
			sizes: [10, 15, 25, 50, 100, 250, 500],
			layout: 'total, sizes, prev, pager, next',
			simple: 'total, prev, pager, next',
		});
		const handleSizeChange = (val) => {
			emit('change', {
				current: props.current,
				size: val,
				total: props.total,
			});
		};
		const handleCurrentChange = (val) => {
			emit('change', {
				current: val,
				size: props.size,
				total: props.total,
			});
		};
		return {
			handleSizeChange,
			handleCurrentChange,
			...toRefs(data),
		};
	},
});
</script>
<style lang="scss" scoped>
.el-pagination {
	display: flex;
	justify-content: flex-end;
	:deep(.el-pager li) {
		margin: 0 1px;
	}
}
</style>
