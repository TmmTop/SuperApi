<template>
  <div class="upload-control" @click="visible = true">
    <el-upload
      ref="upload"
      list-type="text"
      :action="uploadUrl"
      :data="params"
      :multiple="multiple"
      :show-file-list="showFileList"
      :drag="drag"
      :accept="accept"
      :limit="limit"
      :headers="headers"
      :auto-upload="autoUpload"
      :on-remove="handleRemove"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
    >
      <el-button  type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { Session } from '@/utils/storage';
import { ElMessage } from "element-plus";
import type { UploadInstance } from 'element-plus'


export default defineComponent({
  name: "DiyUpload",
  props: {
    // 自定义信息
    uploadTip: {
      type: String,
      required: false,
      default: "请选择资源进行(支持拖拽)上传，",
    },
    // 是否支持多选
    multiple: {
      type: Boolean,
      required: false,
      default: true,
    },
    // 是否显示已上传列表
    showFileList: {
      type: Boolean,
      required: false,
      default: true,
    },
    // 是否开启拖拽上传
    drag: {
      type: Boolean,
      required: false,
      default: false,
    },
    // 接受上传的文件类型
    accept: {
      type: String,
      required: false,
      default: "*/*",
    },
    type: {
      type: String,
      required: false,
      default: "image",
    },
    // 最大允许上传个数
    limit: {
      type: Number,
      required: false,
      default: 0,
    },
    // 是否选取后立即上传
    autoUpload: {
      type: Boolean,
      required: false,
      default: true,
    },
    parentId: {
      type: String,
      required: false,
      default: "0",
    },
  },

  emits: ["update:value", "upload", "confirm"],
  setup(props, { emit }) {
   const data = reactive({
      visible: false,
      loading: false,
      moduleName: "",
      tokenLoading: false,
      uploadUrl: (process.env.NODE_ENV === 'production'?"":"/api")+"/sys/storage/upload",
      params: <any>{},
      headers:{
        Authorization: Session.get('token')
      }
    });

    // const getToken = () => {
    //   // 检测Token是否过期
    //    getUploadToken(props.parentId).then(res => {
    //         data.uploadUrl =  res.data.uploadUrl
    //    })
    // }
    
    // onMounted(() => {
		// 	getToken();
		// });

    const upload = ref<UploadInstance>()

    const handleClose = () => {
      // 替换资源后需要更换Token
      data.visible = false;
      data.loading = false;
      upload.value && upload.value.clearFiles();
    };

    const handleConfirm = () => {
      emit("confirm");
      handleClose();
    };

    // 删除资源
    const handleRemove = (file:any, fileList:any) => {
      if (file.status === "success" && file.response) {
        const response = file.response.data;
        if (response && response[0].storage_id) {
          // const storageId = response[0].storage_id
          // delStorageList(Array.isArray(storageId) ? storageId : [storageId])
        }
      }
      emit("upload", fileList);
    };

    // 上传文件之前的钩子
    const handleBeforeUpload = () => {
      // 生成上传请求参数
      data.params["timestamp"] = Math.round(new Date().getTime() / 1000) + 100;
      data.params["format"] = "json";
      data.params["type"] = props.type;
      data.params["parentId"] = props.parentId
      // data.params["token"] = Session.get('token')
      // 本地上传所需要的权限参数

      // 自动上传时,"确定"按钮将改变状态
      if (props.autoUpload) {
        data.loading = true;
      }
    };
    // 文件上传成功时的钩子
    const handleSuccess = (response:any, file:any, fileList:any) => {
      if (response.code === 200 && response.data) {
        emit("upload", fileList);
        handleChange(fileList);
        return;
      }

      handleError(response.msg, file, fileList);
    };
    // 文件上传失败时的钩子
    const handleError = (err:any, file:any, fileList:any) => {
      ElMessage.error(err);
      for (let i = fileList.length - 1; i >= 0; i--) {
        if (file === fileList[i]) {
          fileList.splice(i, 1);
          emit("upload", fileList);
          break;
        }
      }

      handleChange(fileList);
    };
    // 文件超出个数限制时的钩子
    const handleExceed = (files:any, fileList:any) => {
      if (files.length + fileList.length > props.limit) {
        const count = props.limit - fileList.length;
        ElMessage.error(`上传数量超出限制，最多还能选择 ${count} 个文件`);
      }
    };
    // "确定"按钮状态转换
    const handleChange = (fileList:any) => {
      if (props.autoUpload) {
        if ( Object.keys(fileList).every((item) => fileList[item].status === "success")) {
          data.loading = false;
        }
        let successFileList = fileList.filter((item:any) => {
          return item.status === "success";
        });
        if(successFileList.length==fileList.length){
          setTimeout(function(){
              upload.value!.clearFiles()
          },500)
        }
        emit("confirm", successFileList);
      }
    };

    return {
      ...toRefs(data),
      upload,
      handleClose,
      handleConfirm,
      handleBeforeUpload,
      handleRemove,
      handleSuccess,
      handleError,
      handleExceed,
      handleChange,
    };
  },
});
</script>

<style lang="scss">
.upload-control {
  width: auto;
  display: flex;
}
.upload-control > div {
  display: flex;
  overflow: hidden;
}

.upload-control .el-upload-list {
    display: flex; 
    position: fixed;
    top: calc(5vh + 110px);
    left: calc(50% + 200px);
    width: 200px;
    flex-direction: column;

    .is-success{
      animation-name: fadeOutRight;
    }
}
.upload-control .el-upload-list__item:first-child {
  margin-top: 5px;
}
</style>
