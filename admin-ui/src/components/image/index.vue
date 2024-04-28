<template>
  <el-form-item :label="label" :prop="propname">
    <el-input class="diygw-image" :model-value="data" @input="handleInput">
      <template #append>
        <el-tooltip
          hide-after="0"
          effect="dark"
          content="点击选择图片"
          placement="top"
        >
          <SvgIcon v-if="!data" @click="handleStorage(getAttachmentFileList, 'data','选择图片')" name="ele-CirclePlus" :size="20" />
    
          <img @click="handleStorage(getAttachmentFileList, 'data','选择图片')" class="input-addon" v-else :src="data" />
        </el-tooltip>
      </template>
    </el-input>
    <div class="el-form-item__label text-left" v-if="options.helpText">{{options.helpText}}</div>
  <diy-storage
    ref="storage"
    style="display: none"
    :limit="uploadConfig.limit"
    @confirm="storageCallback"
  ></diy-storage>
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent, ref, reactive,PropType,  toRefs,inject } from "vue";
import { useVModel } from "@vueuse/core";
export interface objType {
  [propName: string]: any
}
import DiyStorage from '@/components/upload/storage.vue'

export default defineComponent({
  name: "DiygwImage",
  components:{
    DiyStorage
  },
  props: {
    modelValue: {
      type: [String],
      default: "",
    },
    propname: {
      type: String,
      default: "img",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "mini",
    },
    options:{
      type: Object as PropType<objType>,
      // eslint-disable-next-line vue/require-valid-default-prop
      default:{
        helpText:''
      }
    },
    inline: {
      type: [Boolean, String],
      default: false,
    },
    disabled: Boolean,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const data = useVModel(props, "modelValue", emit);

    const handleInput = (value: string) => {
      data.value = value;
    };

    const obj = reactive({
      storageCallback: "",
      uploadConfig: {
        limit: 1,
      },
    });

    const storage = ref(null);
    const diygwuploadp = inject('diygwuploadp')
    const providePreviewpage = inject('previewpage')
    // 打开资源选择框
    const handleStorage = (callback,source = "", title = "") => {
      obj['storageCallback'] = callback;
      obj['uploadConfig']['limit'] = 1;
      storage.value.handleStorageDlg( source, title);
    };
    // 获取商品相册资源
    const getAttachmentFileList = (files) => {
      if (!files.length) {
        return;
      }
      const file = files[0];
      data.value = file.url
    };
    
    return {
      data,
      diygwuploadp,
      providePreviewpage,
      ...toRefs(obj),
      storage,
      handleInput,
      handleStorage,
      getAttachmentFileList,
    };
  },
});
</script>

<style lang="scss">
.diygw-image {
  .input-addon{
    width:24px;
    height:24px;
  }
  .el-input__inner {
    padding-right: 0;
  }
  .el-input-group__append {
    width: 35px !important;
    padding: 0 5px;
    background-color: #fff;

    .el-icon-plus {
      border: 1px solid var(--el-input-border);
      border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
      padding: 2px;
    }
  }
}
</style>
