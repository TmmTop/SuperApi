import type { App } from 'vue';
import type { FsSetupOptions, PageQuery } from '@fast-crud/fast-crud';
import { FastCrud } from '@fast-crud/fast-crud';
import '@fast-crud/fast-crud/dist/style.css';
import './common.scss';
import { localStg } from '@/utils/storage';
import type { FsUploaderOptions } from '@fast-crud/fast-extends';
import {
  FsExtendsCopyable,
  FsExtendsEditor,
  FsExtendsJson,
  FsExtendsInput,
  FsExtendsTime,
  FsExtendsUploader
} from '@fast-crud/fast-extends';
import '@fast-crud/fast-extends/dist/style.css';
import UiNaive from '@fast-crud/ui-naive';
import axios from 'axios';
import type { VueI18n } from 'vue-i18n';
import { request } from '@/service/request';
import { setupNaive } from '@/plugins/fast-crud/naive';
import { getServiceBaseURL } from '@/utils/service';
/**
 *  fast-crud的安装方法
 *  注意：在App.vue中，需要用fs-ui-context组件包裹RouterView，让fs-crud拥有message、notification、dialog的能力
 * @param app
 * @param options
 */
export type FsSetupOpts = {
  i18n?: VueI18n;
};
function install(app: App, options: FsSetupOpts = {}) {
  // 安装naive ui 常用组件
  setupNaive(app);
  app.use(UiNaive);
  app.use(FastCrud, {
    i18n: options.i18n,
    logger: { off: { tableColumns: false } },
    async dictRequest(context: { url: string }) {
      const url = context.url;
      let res: Service.SuccessResult | Service.FailedResult;
      res = await request.get(url);
      res = res || {};
      return res.data || [];
    },
    /**
     * useCrud时会被执行
     */
    commonOptions() {
      return {
        table: {
          size: 'small',
          pagination: false
        },
        search: {
          col: {
            span: '8'
          },
          show: true,
          validate: true,
          options: {
            showFeedback: true,
            size: 'medium'
          },
        },
        rowHandle: {
          buttons: {
            view: { text: null, icon: 'EyeOutlined', size: 'small' },
            edit: { text: null, icon: 'EditOutlined', size: 'small' },
            remove: { type: 'error', text: null, icon: 'DeleteOutlined', size: 'small' }
          },
          dropdown: {
            more: { size: 'small' }
          }
        },
        request: {
          // 查询参数转换
          transformQuery: (query: PageQuery) => {
            const { page, form, sort } = query;
            const limit = page.pageSize;
            const currentPage = page.currentPage ?? 1;
            const offset = limit * (currentPage - 1);

            return {
              page: {
                limit,
                offset
              },
              query: form,
              sort: sort || {}
            };
          },
          // page请求结果转换
          transformRes: originPageRes => {
            const { res } = originPageRes;
            const pageSize = res.limit;
            let currentPage = res.offset / pageSize;
            if (res.offset % pageSize === 0) {
              currentPage += 1;
            }
            return { currentPage, pageSize, ...res };
          }
        },
        form: {
          display: 'flex', // 表单布局
          labelWidth: '120px' // 表单label宽度
        }
      };
      // 从 useCrud({permission}) 里获取permission参数，去设置各个按钮的权限
      // const crudPermission = useCrudPermission(context);
      // return crudPermission.merge(opts);
    }
  } as FsSetupOptions);
  const { baseURL, otherBaseURL } = getServiceBaseURL(import.meta.env, false);
  // 安装uploader 公共参数
  const uploaderOptions: FsUploaderOptions = {
    defaultType: 'form',
    form: {
      action: baseURL + '/default/File/UploadFile',
      name: 'file',
      withCredentials: false,
      uploadRequest: async props => {
        const { action, file, onProgress } = props;
        const data = new FormData();
        data.append('file', file);
        const token = localStg.get('token');
        const Authorization = token ? `Bearer ${token}` : null;
        const res = await axios.post(action, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": Authorization
          },
          timeout: 60000,
          onUploadProgress(progress) {
            onProgress({ percent: Math.round((progress.loaded / progress.total!) * 100) });
          }
        });
        if (res.data.code == 200) {
          // 上传完成后的结果，一般返回个url 或者key,具体看你的后台返回啥
          return res.data.result;
        } else {
          throw new Error(res.data.message);
        }
      },
      async successHandle(ret: any) {
        return {
          url: baseURL.replace("/api", "") + '/Upload/' + ret.id + ret.suffix,
          key: ret.fileName
        };
      }
    }
  };
  // fast-extends里面的扩展组件均为异步组件，只有在使用时才会被加载，并不会影响首页加载速度
  // 安装editor
  app.use(FsExtendsEditor, {
    // 编辑器的公共配置
    wangEditor: {}
  });
  app.use(FsExtendsUploader, uploaderOptions);
  app.use(FsExtendsJson);
  app.use(FsExtendsTime);
  app.use(FsExtendsCopyable);
  app.use(FsExtendsInput);
}

export default {
  install
};

export function setupFastCrud(app: App<Element>, options: FsSetupOpts = {
  //关闭日志
}) {
  install(app, options);
}
