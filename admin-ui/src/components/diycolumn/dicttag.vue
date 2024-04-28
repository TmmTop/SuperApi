<template>
	<div>
		<template v-for="(item, index) in optionsValue">
			<template v-if="values.includes(String(item[props.valueField]))">
				<el-tag :disable-transitions="true" :key="item[props.valueField] + ''" :index="index"
					:type="item.elTagType === 'primary' ? '' : item.elTagType" :class="item.elTagClass">{{
						item[props.labelField] }}</el-tag>
			</template>
		</template>
	</div>
</template>
<script>
export default {
	name: 'DictTag',
};
</script>
<script setup>
import { computed, getCurrentInstance } from 'vue';
const props = defineProps({
	// 数据
	options: {
		type: Array,
		default: null,
	},
	dict: {
		type: String,
	},
	valueField: {
		type: String,
		default: 'value',
	},
	labelField: {
		type: String,
		default: 'label',
	},
	// 当前的值
	value: [Number, String, Array],
});

const { proxy } = getCurrentInstance();
const optionsValue = computed(() => {
	if (props.options) {
		return props.options;
	} else if (props.dict) {
		let value = proxy.getDict(props.dict);
		return value.value;
	} else {
		return [];
	}
});

const values = computed(() => {
	if (props.value !== null && typeof props.value !== 'undefined') {
		if (Array.isArray(props.value)) {
			return props.value
		}
		
		if (typeof props.value == 'string' &&props.value.startsWith("[") && props.value.endsWith("]")) {
			return JSON.parse(props.value)
		} else {
			return [String(props.value)];
		}
	} else {
		return [];
	}
});
</script>

<style scoped>
.el-tag+.el-tag {
	margin-left: 10px;
}
</style>
