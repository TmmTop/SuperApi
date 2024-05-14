/*
 * @Author: 490912587@qq.com
 * @Date: 2024-05-09 16:45:44
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-14 18:18:37
 * @FilePath: \admin-ui\src\views\manage\menu\crud.tsx
 * @Description: 
 */
import { dict } from '@fast-crud/fast-crud';
import { shallowRef, ref } from 'vue';
import { getMenuTree, addMenu, editMenu, delMenu } from '@/service/api/index';
import { removeChildren } from "@/config"
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
const topMenus = await getTopMenu();
export default function ({ expose }) {
  const pageRequest = async (query) => {
    query.param = {
      "Order": "id asc",
      "constant~=": "true",
      "title~%": query.title
    }
    if (!query.title) {
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
        scrollX: 1200,
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
        transformQuery: ({ page, form, sort }) => {
          const order = sort == null ? {} : { orderProp: sort.prop, orderAsc: sort.asc }
          return { page: page.currentPage, pageSize: page.pageSize, ...form, ...order };
        },
        transformRes: ({ res }) => {
          const records = res.data;
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
          form: {
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
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入重定向' },
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
        keepAlive: {
          title: '是否缓存',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入是否缓存' },
            ],
          }
        },
        constant: {
          title: '是否常量路由',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入常量路由' },
            ],
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
          }
        },
        localIcon: {
          title: '本地路由图标',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 }
          }
        },
        innerHref: {
          title: '内嵌跳转链接',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入内嵌跳转链接' },
            ],
          }
        },
        href: {
          title: '外部跳转链接',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入外部跳转链接' },
            ],
          }
        },
        hideInMenu: {
          title: '是否隐藏',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入是否隐藏' },
            ],
          }
        },
        fixedIndexInTab: {
          title: '是否固定Tab',
          type: 'text',
          search: { show: false },
          column: {
            show: false
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入是否固定Tab' },
            ],
          }
        },
        orderNo: {
          title: '排序',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由排序' },
            ],
          }
        }
      },
    },
  };
}
