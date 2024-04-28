<template>
	<el-dialog :title="title" top="5vh" v-model="visible" append-to-body center width="800px">
		<div class="flex storages">
			<div class="categorys diy-tree file-border flex flex-direction-column">
				<el-button type="primary" @click="handleAdd()">新增目录</el-button>
				<div class="mt-1 text-center" plain :class="[!form.parentId ? 'selected' : '']" @click="selectCategory('')">全部</div>
				<div
					class="mt-1 p-1 text-center"
					plain
					:key="item"
					:class="[form.parentId == item.storageId ? 'selected' : '']"
					@click="selectCategory(item.storageId)"
					v-for="item in categorys"
				>
					{{ item.name }}
				</div>
			</div>
			<div class="flex1 file-border">
				<!-- 文件列表开始 -->
				<div class="flex justify-between">
					<div class="diy-mb-20">
						<el-input
							v-model="form.name"
							label-width="0px"
							placeholder="输入名称搜索"
							style="width: 250px"
							@keyup.enter.native="handleSearch()"
							@clear="handleSearch()"
							:clearable="true"
						>
							<template #suffix>
								<SvgIcon @click="handleSearch" name="ele-Search" :size="20" />
							</template>
						</el-input>
					</div>

					<diy-upload
						ref="upload"
						:upload-tip="uploadConfig.uploadTip"
						:multiple="uploadConfig.multiple"
						:type="type"
						:accept="accept"
						:limit="uploadConfig.limit"
						:parent-id="form.parentId"
						@confirm="_getUploadFileList"
					></diy-upload>
				</div>
				<div class="files" :max="limit !== 0 ? limit : 100">
					<div class="file-list" v-loading="loading">
						<div :key="index" v-for="(item, index) in currentTableData" class="item" :data-label="item.name" :class="item.selectclz">
							<div
								class="file-image"
								:style="{
									backgroundImage: 'url(' + getImageThumb(item) + ')',
								}"
								@click="selectFile(item)"
							></div>
							<div class="file-name">
								{{ item.name }}
							</div>
							<div class="mask" @click="selectFile(item)">
								<SvgIcon name="ele-Check" :size="20" />
							</div>
							<div class="el-dropdown" @click="handleDelete(item.storageId)">
								<SvgIcon class="delete" name="ele-Delete" :size="20" />
							</div>
						</div>
					</div>
				</div>

				<!-- 翻页开始 -->
				<diy-pagefooter
					style="margin: 0; padding: 20px 0 0 0"
					:current="page.current"
					:size="page.size"
					:total="page.total"
					:is-size="false"
					@change="handlePaginationChange"
				/>
			</div>
		</div>

		<!-- 确认,取消 -->
		<template #footer v-if="isSelect == '1'" class="dialog-footer">
			<div style="float: left; font-size: 13px">
				<span v-if="checkList.length > limit && limit !== 0" style="color: #f56c6c">
					当前已选 {{ checkList.length }} 个，最多允许选择 {{ limit }} 个文件
				</span>
				<span v-else>当前已选 {{ checkList.length }} 个文件</span>
			</div>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" :loading="loadingCollection" :disabled="checkList.length > limit && limit !== 0" @click="handleConfirm"
				>确定</el-button
			>
		</template>
	</el-dialog>

	<el-dialog :title="nameMap[nameStatus]" v-model="nameFormVisible" append-to-body center top="5vh" width="600px">
		<el-form :model="nameForm" :rules="rules" ref="refform" label-width="50px" label-position="left" @submit.native.prevent>
			<el-form-item label="名称" prop="name">
				<el-input v-model="nameForm.name" placeholder="请输入目录名称" @keyup.enter.native="nameStatus === 'add' ? add() : rename()" ref="input" />
			</el-form-item>
		</el-form>

		<template #footer>
			<el-button @click="nameFormVisible = false">取消</el-button>

			<el-button v-if="nameStatus === 'add'" type="primary" :loading="dialogLoading" @click="add">确定</el-button>

			<el-button v-else type="primary" :loading="dialogLoading" @click="rename">修改</el-button>
		</template>
	</el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue';
import { listData, listAllData, addData, delData } from '@/api/index';
import { ElMessageBox, ElMessage } from 'element-plus';
import DiyUpload from './upload.vue';
import DiyPagefooter from './pagefooter.vue';

export default defineComponent({
	name: 'DiyStorage',
	components: {
		DiyUpload,
		DiyPagefooter,
	},
	props: {
		type: {
			default: 'image',
		},
		accept: {
			default: 'image/*',
		},
		// 最大选择数(0表示不限制)
		limit: {
			type: Number,
			required: false,
			default: 0,
		},
		isSelect: {
			default: '1',
		},
	},
	setup(props, { emit }) {
		const data = reactive({
			baseUrl: '',
			title: '',
			isLoad: false,
			icontype: 'default',
			visible: false,
			loading: false,
			uploadConfig: {
				uploadTip: '请选择文件进行上传，',
				multiple: true,
				accept: 'image/*',
				limit: 0,
				type: 'image',
				replace: false,
			},
			storageType: props.type,
			source: '',
			loadingCollection: false,
			checkList: [],
			categorys: [],
			syscategorys: [],
			currentTableData: [],
			currentSysTableData: [],
			searchSysTableData: [],
			dialogLoading: false,
			nameForm: {
				type: '',
				name: undefined,
				parentId: undefined,
			},
			nameFormVisible: false,
			nameStatus: 'edit',
			nameMap: {
				edit: '重命名',
				add: '新增目录',
			},
			iconfonturl: '',
			rules: {
				name: [
					{
						required: true,
						message: '目录名称不能为空',
						trigger: 'blur',
					},
					{
						max: 255,
						message: '长度不能大于 255 个字符',
						trigger: 'blur',
					},
				],
			},
			form: {
				name: undefined,
				parentId: undefined,
				order_type: 'desc',
				order_field: 'storageId',
			},
			sysform: {
				parentId: 'icon1',
				name: '',
				type: 'system',
			},
			page: {
				current: 1,
				size: 15,
				total: 0,
			},
		});

		const upload = ref(null);

		const getImageThumb = (item: any) => {
			if (item.type == 'mp3') {
				return '/static/images/mp3.png';
			} else if (item.type == 'mp4') {
				return '/static/images/mp3.png';
			} else if (item.type == 'image' || item.type == 'scene') {
				return item.url;
			} else {
				return '/static/images/file.png';
			}
		};

		const handleStorageDlg = (source = '', title = '') => {
			data.title = title ? title : '文件管理';
			// if (type == 'mp3') {
			// 	data.uploadConfig.accept = '.mp3';
			// } else if (type == 'mp4') {
			// 	data.uploadConfig.accept = '.mp4';
			// } else {
			// 	data.uploadConfig.accept = 'image/*';
			// }
			data.visible = true;
			data.storageType = props.type;
			data.source = source;
			data.checkList = [];
			data.currentTableData.forEach((item: any) => {
				item.selectclz = '';
			});

			if (!data.isLoad) {
				data.loadingCollection = false;
				data.currentTableData = [];
				data.uploadConfig.type = props.type;
				handleSubmit();
				nextTick(() => {
					getStorageDirectory();
					if (upload.value) {
						upload.value?.handleClose();
					}
				});
			}
		};
		const handlePaginationChange = (val: any) => {
			data.page = val;
			nextTick(() => {
				handleSubmit();
			});
		};
		const handleSearch = () => {
			data.page.current = 1;
			handleSubmit();
		};

		const handleSubmit = () => {
			data.loading = true;
			listData('/sys/storage', {
				...data.form,
				type: data.storageType,
				pageNum: data.page.current,
				pageSize: data.page.size,
			})
				.then((res) => {
					data.currentTableData = res.rows || [];
					data.page.total = res.total;
					data.isLoad = true;
				})
				.finally(() => {
					data.loading = false;
				});
		};

		const handleSysSubmit = () => {
			data.loading = true;
			listData('/sys/storage', {
				...data.sysform,
			})
				.then((res) => {
					data.currentSysTableData = res.rows || [];
					data.searchSysTableData = res.rows || [];
				})
				.finally(() => {
					data.loading = false;
				});
		};

		const handleSyscatesSubmit = () => {
			data.loading = true;
			listData('/sys/storage', {
				...data.sysform,
			})
				.then((res) => {
					data.syscategorys = res.rows || [];
					data.sysform.type = 'system';
					data.sysform.parentId = res.rows[0].storageId;
					handleSysSubmit();
				})
				.finally(() => {
					data.loading = false;
				});
		};

		const handleSysSearch = () => {
			let findData = data.currentSysTableData.filter((item: any) => {
				return item.name.indexOf(data.sysform.name) >= 0 || item.cname.indexOf(data.sysform.name) >= 0;
			});
			data.searchSysTableData = findData;
		};

		const handleAllSearch = () => {
			if (data.loading) {
				ElMessage.error('点击过快，正在加载数据');
				return;
			}
			data.sysform.parentId = '';
			handleSysSubmit();
		};

		const handleConfirm = () => {
			if (data.checkList.length <= 0) {
				emit('confirm', [], data.source);
				data.visible = false;
				return;
			}
			let checkList = data.checkList;
			// let finddata = data.currentTableData.filter((item) => {
			//   return checkList.includes(item.storageId);
			// });
			// let finddata2 = data.currentSysTableData.filter((item) => {
			//   return checkList.includes(item.storageId);
			// });
			// finddata = finddata.concat(finddata2)
			data.loadingCollection = false;
			//data.checkList = [];
			data.visible = false;
			emit('confirm', checkList || [], data.source);
		};
		// 上传文件
		// const handleUpload = () => {
		// 	upload.value.handleUploadDlg();
		// };

		const selectCategory = (id: any) => {
			if (data.loading) {
				ElMessage.error('点击过快，正在加载数据');
				return;
			}
			data.form.parentId = id;
			handleSubmit();
		};

		const selectSystemCategory = (item: any) => {
			if (data.loading) {
				ElMessage.error('点击过快，正在加载数据');
				return;
			}
			data.sysform.name = '';
			data.iconfonturl = item.url;
			data.sysform.parentId = item.storageId;
			handleSysSubmit();
		};

		const selectFile = (item: any) => {
			if (props.limit === 1) {
				data.currentSysTableData.forEach((item: any) => {
					item.selectclz = '';
				});
				data.currentTableData.forEach((item: any) => {
					item.selectclz = '';
				});
				let index = data.checkList.findIndex((checkitem: any) => {
					return checkitem == item.storageId;
				});
				if (index >= 0) {
					data.checkList.splice(index, 1);
					item.selectclz = '';
				} else if (data.checkList.length > 0) {
					data.checkList.splice(0, 1, item);
					item.selectclz = 'active';
				} else {
					data.checkList.push(item);
					item.selectclz = 'active';
				}
			} else {
				let index = data.checkList.findIndex((checkitem: any) => {
					return checkitem.storageId == item.storageId;
				});
				if (index >= 0) {
					data.checkList.splice(index, 1);
					item.selectclz = '';
				} else {
					data.checkList.push(item);
					item.selectclz = 'active';
				}
			}
		};

		// 批量删除
		const handleDelete = (val: any) => {
			const storageId = val ? [val] : data.checkList;
			if (storageId.length === 0) {
				ElMessage.error('请选择要操作的数据');
				return;
			}
			ElMessageBox.confirm('确定要执行该操作吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
				closeOnClickModal: false,
			})
				.then(() => {
					delData('/sys/storage', storageId).then(() => {
						for (let i = data.currentTableData.length - 1; i >= 0; i--) {
							if (storageId.indexOf(data.currentTableData[i].storageId) !== -1) {
								data.currentTableData.splice(i, 1);
							}
						}
						ElMessage.success('操作成功');
					});
				})
				.catch(() => {});
		};
		// 文件上传成功后处理
		const _getUploadFileList = (files: any) => {
			for (const value of files) {
				let stroage = value.response.data;
				let index = data.currentTableData.findIndex((item: any) => {
					return item.url == stroage.url;
				});
				if (index == 0) {
					continue;
				}
				if (index > 0) {
					data.currentTableData.splice(index, 1);
				}
				data.currentTableData.splice(0, 0, stroage);
			}
		};

		const refform = ref();
		const refinput = ref();

		// 获取可选择目录
		const getStorageDirectory = () => {
			//if (!this.directoryList.length) {
			listAllData('/sys/storage', { type: 'category' }).then((res) => {
				data.categorys = res.rows;
			});
		};

		const add = () => {
			refform.value.validate((valid: boolean) => {
				if (valid) {
					data.dialogLoading = true;
					data.nameForm.type = 'category';

					addData('/sys/storage', { ...data.nameForm })
						.then((res) => {
							data.categorys.unshift({
								...res.data,
								is_default: 0,
							});
							//getStorageDirectory();
							data.nameFormVisible = false;
							ElMessage.success('操作成功');
						})
						.catch(() => {
							data.dialogLoading = false;
						});
				}
			});
		};

		const rename = () => {
			refform.value.validate((valid: boolean) => {
				if (valid) {
					data.dialogLoading = true;
					// renameStorageItem(data.nameForm.storageId, data.nameForm.name)
					//   .then(res => {
					//     data.currentTableData[data.nameForm.index].name = data.nameForm.name
					//     // data.directoryList = []
					//     getStorageDirectory()
					//     data.nameFormVisible = false
					//     data.$message.success('操作成功')
					//   })
					//   .catch(() => {
					//     data.dialogLoading = false
					//   })
				}
			});
		};

		const handleAdd = () => {
			data.nameForm['name'] = undefined;
			data.nameForm['parentId'] = data.form.parentId;

			data.dialogLoading = false;
			data.nameStatus = 'add';
			data.nameFormVisible = true;

			nextTick(() => {
				refform.value.clearValidate();
			});
		};

		// for(let i=1 ;i<=9;i++){
		//   data.syscategorys.push({
		//     id:'icon'+i,
		//     name:'图标库'+i
		//   })
		// }
		const handleClick = () => {
			if (data.syscategorys.length == 0 && data.icontype == 'system') {
				data.sysform.type = 'systemcategorys';
				handleSyscatesSubmit();
			}
		};
		return {
			refform,
			refinput,
			selectSystemCategory,
			rename,
			add,
			handleAdd,
			handleClick,
			...toRefs(data),
			_getUploadFileList,
			selectCategory,
			getImageThumb,
			selectFile,
			handleDelete,
			handleSearch,
			handleAllSearch,
			handleConfirm,
			handlePaginationChange,
			handleStorageDlg,
			handleSysSearch,
		};
	},
});
</script>
<style>
.storages .el-input__suffix {
	top: 5px;
	height: auto;
}
</style>
<style lang="scss" scoped>
.breadcrumb {
	border: 1px solid #dcdfe6;
	padding: 10px !important;
}
.files {
	height: 50vh;
}
.file-height {
	min-height: calc(40vw - 190px);
}
.file-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	:deep(.el-loading-mask) {
		background-color: transparent;
	}
}
.mt-1 {
	margin-top: 0.25rem;
}
.p-1 {
	padding: 0.25rem;
}
.delete {
	color: #fff;
}
.file-list .item {
	flex: none;
	position: relative;
	width: calc(20% - 20px);
	margin: 10px;
	text-align: center;
	vertical-align: middle;

	.file-image {
		width: 100%;
		height: 100%;
		background-color: #eee;
		border-radius: 4px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		position: absolute;
		left: 0;
		top: 0;
	}
	&:before {
		content: '';
		display: inline-block;
		padding-bottom: 100%;
		width: 0.1px;
		vertical-align: middle;
	}
	.file-name {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		line-height: 34px;
		height: 34px;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;

		text-align: center;
		z-index: 2;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		box-sizing: border-box;
	}
	.mask {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 5;
		background-color: rgba(0, 0, 0, 0.5);
		text-align: center;
		display: none;
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 40px;
		background: rgba(66, 139, 202, 0.8);
	}
	.el-dropdown {
		position: absolute;
		width: 34px;
		line-height: 34px;
		text-align: center;
		background-color: #3296fa;
		cursor: pointer;
		bottom: 0;
		right: 0;
		z-index: 6;
		display: none;
	}

	&:hover {
		&:after {
			position: absolute;
			bottom: -20px;
			left: 0px;
			position: absolute;
			padding: 3px 5px;
			font-size: 12px;
			font-weight: 700;
			color: #fff;
			white-space: nowrap;
			background-color: #006eff;
			border-radius: 3px;
			content: attr(data-label);
		}
		.el-dropdown {
			display: block;
		}
	}
	&.active {
		.mask {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}

.brother-showing i {
	width: 16px;
}
.diy-mb-5 {
	margin-bottom: 5px !important;
}
.diy-tree {
	width: 200px;
}
.file-border {
	border: 1px solid #dcdfe6;
	padding: 10px;
	:deep(.el-form-item__content) {
		margin-left: 0 !important;
	}
	.selected {
		border: 1px solid var(--el-color-primary);
		border-radius: 3px;
		color: var(--el-color-primary);
	}
}

.tree-scroll {
	overflow: auto;
	padding-bottom: 1px;
}
.custom-tree-node {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 8px;
}

.diy-table {
	display: table-row;
}
.diy-cell {
	display: table-cell;
}
</style>
