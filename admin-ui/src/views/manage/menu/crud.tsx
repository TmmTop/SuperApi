/*
 * @Author: 490912587@qq.com
 * @Date: 2024-05-09 16:45:44
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-15 17:47:26
 * @FilePath: \admin-ui\src\views\manage\menu\crud.tsx
 * @Description: 
 */
import { dict, useCompute } from '@fast-crud/fast-crud';
import { shallowRef, ref, watch } from 'vue';
import { getMenuTree, addMenu, editMenu, delMenu } from '@/service/api/index';
import { useRouteStore } from '@/store/modules/route';
const { compute } = useCompute()
const routeStore = useRouteStore();
function removeChildren(tree) {
  if (tree) {
    let childs = tree
    for (let i = childs.length; i--; i > 0) {
      if (childs[i].children) {
        delete childs[i].children
      }
    }
    return childs;
  }
}
const getTopMenu = async (query) => {
  var param = {
    "Order": "order_no asc",
    "constant~=": "false",
    "pid": "0",
    "name~!=": "home"
  }
  const result = await getMenuTree(param);
  if (result.data) {
    result.data.push({ id: "0", title: "顶级路由", icon: "mdi:arch" });
    result.data = removeChildren(result.data);
    return result.data.reverse();
  }
};
let topMenus = await getTopMenu();
export default function ({ expose }) {
  const pageRequest = async (query) => {
    const param = await query;
    query.param = {
      "Order": "order_no asc",
      "constant~=": "true",
      "title~%": param.title
    }
    if (!param.title) {
      delete query.param["title~%"];
    }
    const result = await getMenuTree(query);
    return result;
  };
  const editRequest = async ({ form, row }: EditReq) => {
    if (form.id == null) {
      form.id = row.id;
    }
    return await editMenu(form);
  };
  const addRequest = async ({ form }: AddReq) => {
    return await addMenu(form);
  };
  const selectedIds = ref([]);
  const onSelectionChange = (changed) => {
    selectedIds.value = changed;
  };
  return {
    selectedIds,
    crudOptions: {
      container: {
        is: 'fs-layout-card'
      },
      form: {
        wrapper: {//可以参考naiveui的drawer组件属性，直接就可以用
          width: '800px', //antdv对话框的宽度
          draggable: false,//对话框是否支持拖拽
          closeOnEsc: false,
          maskClosable: false,
        }
      },
      search: {
        show: true,
      },
      actionbar: {
        show: true,
      },
      toolbar: {
        show: true,
        buttons: {
          search: { show: true },
          refresh: { show: true },
          compact: { show: true },
          export: { show: true },
          columns: { show: true },
        },
      },
      table: {
        scrollX: 2500,
        bordered: false,
        rowKey: (row) => row.id,
        checkedRowKeys: selectedIds,
        'onUpdate:checkedRowKeys': onSelectionChange,
      },
      pagination: {
        show: false
      },
      request: {
        pageRequest,
        addRequest,
        editRequest,
        transformQuery: async ({ page, form, sort }) => {
          const order = sort == null ? {} : { orderProp: sort.prop, orderAsc: sort.asc }
          return { page: page.currentPage, pageSize: page.pageSize, ...form, ...order };
        },
        transformRes: async ({ res }) => {
          const records = res.data;
          await routeStore.initAuthRoute();
          return {
            currentPage: 1, pageSize: 999999, total: 1, records
          };
        },
      },
      rowHandle: {
        fixed: "right",
        align: "center",
        width: 150,
        buttons: {
          view: { show: true },
          edit: { show: true },
          //使用_checked勾选批量删除后，此按钮失效
          remove: { show: false },
        }
      },
      columns: {
        _checked: {
          title: '选择',
          form: { show: false },
          column: {
            type: 'selection',
            align: 'center',
            width: '55px',
            columnSetDisabled: true,
          },
        },
        pid: {
          title: '父级路由',
          type: 'dict-select',
          dict: dict({
            label: "title",
            value: "id",
            data: topMenus
          }),
          search: { show: false },
          column: { width: "150px" },
          form: {
            component: {
              clearable: false,
              multiple: false,
            },
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入父级路由' },
            ],
          }
        },
        title: {
          title: '路由标题',
          type: 'text',
          search: { show: true },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由标题' },
            ],
          }
        },
        name: {
          title: '路由名称',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由名称' },
            ],
          }
        },
        path: {
          title: '路由地址',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由地址' },
            ],
          }
        },

        component: {
          title: '组件名称',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入组件名称' },
            ],
            helper: {
              render() {
                return (
                  <p style={'color: red;'}>
                    * $后加组件路径即可渲染此组件
                    <br />
                    * 例如：(layout.base$view.home)
                    <br />
                    * layout.base Base布局的顶级路由
                    <br />
                    * layout.blank Blank布局的顶级路由
                    <br />
                    * view. 组件路径
                    <br />
                    * layout.base$ Base布局的组件路径
                    <br />
                    * layout.blank$ Blank布局的组件路径
                  </p>
                );
              },
            },
          }
        },
        href: {
          title: '外链地址',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            helper: {
              render() {
                return (
                  <p style={'color: red;'}>
                    * 组件名称的值后加$view.iframe-page组件路径
                    <br />
                    * 即可渲染iframe组件
                    <br />
                    * 例如：layout.blank$view.iframe-page
                  </p>
                );
              },
            },
          }
        },
        redirect: {
          title: '重定向',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 }
          }
        },
        icon: {
          title: '路由图标',
          type: 'text',
          search: { show: false },
          column: {
            align: 'center',
            component: {
              name: 'fs-icon',
              vModel: 'icon',
              style: 'font-size:18px',
            },
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由图标' },
            ],
            helper: {
              render() {
                return (
                  <a target={'_blank'} href={'https://iconify.design/icon-sets/ion/'}>
                    点击此处选择图标名称
                  </a>
                );
              },
            },
          }
        },
        keepAlive: {
          title: '是否缓存',
          type: 'dict-switch',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请选择是否缓存' },
            ],
          }
        },
        hideInMenu: {
          title: '是否隐藏',
          type: 'dict-switch',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请选择是否隐藏' },
            ],
          }
        },
        i18nKey: {
          title: '国际化键值',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
          }
        },
        orderNo: {
          title: '排序',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 }
          }
        }
      },
    },
  };
}
