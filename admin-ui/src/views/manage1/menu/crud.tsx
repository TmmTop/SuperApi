/*
 * @Author: 490912587@qq.com
 * @Date: 2024-05-09 16:45:44
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-13 18:11:34
 * @FilePath: \admin-ui\src\views\manage\menu\crud.tsx
 * @Description: 
 */
import { dict } from '@fast-crud/fast-crud';
import { shallowRef, ref } from 'vue';
import { getMenuPage, addMenu, editMenu, delMenu } from '@/service/api/index';
//去掉children
const removeChildren = (tree) => {
  let childs = tree
  for (let i = childs.length; i--; i > 0) {
    if (childs[i].children) {
      delete childs[i].children
    }
  }
  return childs;
}
const getTopMenu = async (query) => {
  var param = {
    "Order": "order_no asc",
    "constant~=": "false",
    "pid": "0",
    "name~!=": "home"
  }
  const result = await getMenuPage(param);
  if (result) {
    result.data.push({ id: "0", title: "顶级路由" });
    result.data = removeChildren(result.data);
    return result.data.reverse();
  }
};
const topMenus = await getTopMenu();
export default function ({ expose }) {
  const pageRequest = async (query) => {
    query.param = {
      "Order": "id asc",
      "constant~=": "true"
    }
    const result = await getMenuPage(query);
    return result;
  };
  const editRequest = async ({ form, row }: EditReq) => {
    if (form.id == null) {
      form.id = row.id;
    }
    return await editMenu(form);
  };
  const delRequest = async ({ row }: DelReq) => {
    return await delMenu(row);
  };
  const addRequest = async ({ form }: AddReq) => {
    return await addMenu(form);
  };
  //勾选
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
        rowKey: (row) => row.id, //设置你的主键id获取方式， 默认(row)=>row.id
        checkedRowKeys: selectedIds,
        'onUpdate:checkedRowKeys': onSelectionChange,
      },
      pagination: {
        show: false
      },
      request: {
        pageRequest,
        delRequest,
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
          remove: { show: true },
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
            //禁止在列设置中选择
            columnSetDisabled: true,
            //设置第一行不允许选择
            // disabled(row, index) {
            //   return row.id === 1;
            // },
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
              { trigger: 'blur' },
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
              { trigger: 'blur' },
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
              { trigger: 'blur' },
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
              { trigger: 'blur' },
            ],
          }
        },
        component: {
          title: '组件路径',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入组件路径' },
              { trigger: 'blur' },
            ],
          }
        },
        redirect: {
          title: '重定向',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入重定向' },
              // { trigger: 'blur' },
            ],
          }
        },
        i18nKey: {
          title: '国际化键值',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入国际化键值' },
              { trigger: 'blur' },
            ],
          }
        },
        keepAlive: {
          title: '是否缓存',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入是否缓存' },
              { trigger: 'blur' },
            ],
          }
        },
        constant: {
          title: '是否常量路由',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入常量路由' },
              { trigger: 'blur' },
            ],
          }
        },
        icon: {
          title: '路由图标',
          type: 'text',
          search: { show: false },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入路由图标' },
              { trigger: 'blur' },
            ],
          }
        },
        localIcon: {
          title: '本地路由图标',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入本地路由图标' },
              //{ trigger: 'blur' },
            ],
          }
        },
        innerHref: {
          title: '内嵌跳转链接',
          type: 'text',
          search: { show: false },
          column:{
            show: false 
          },
          form: {
            col: { span: 12 },
            rule: [
              { required: true, message: '请输入内嵌跳转链接' },
              //{ trigger: 'blur' },
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
              //{ trigger: 'blur' },
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
              //{ trigger: 'blur' },
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
              //{ trigger: 'blur' },
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
              //{ trigger: 'blur' },
            ],
          }
        }
      },
    },
  };
}