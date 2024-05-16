import { dict, useColumns } from '@fast-crud/fast-crud';
import { shallowRef, ref } from 'vue';
import { REGEXP_PHONE, REGEXP_EMAIL } from '@/config';
import dayjs from 'dayjs';
import { getUserPage, addUser, editUser, delUser, getEnumDataByTypeName, getDepartment, getPost } from '@/service/api/index';
const loadAccountType = async () => {
    const result = await getEnumDataByTypeName("AccountTypeEnum");
    if (result.data) {
        return result.data;
    }
};

const loadStatu = async () => {
    const result = await getEnumDataByTypeName("StatusEnum");
    if (result.data) {
        return result.data;
    }
};


const loadSex = async () => {
    const result = await getEnumDataByTypeName("GenderEnum");
    if (result.data) {
        return result.data;
    }
};

const loadPost = async () => {
    const result = await getPost();
    if (result.data) {
        return result.data;
    }
};

const loadDepartment = async () => {
    const result = await getDepartment();
    if (result.data) {
        return result.data;
    }
};

//无限级去掉最后一层children为[]的数据
function removeEmptyChildren(tree) {
    if (tree) {
        let childs = tree
        for (let i = childs.length; i--; i > 0) {
            if (childs[i].children) {
                if (childs[i].children.length) {
                    removeEmptyChildren(childs[i].children)
                } else {
                    delete childs[i].children
                }
            }
        }
        return childs;
    }
}
const accountTypeList = async () => {
    return await loadAccountType();
}
const statuList = async () => {
    return await loadStatu();
}
const sexList = async () => {
    return await loadSex();
}
const postList = async () => {
    return await loadPost();
}
const departmentList = async () => {
    return await loadDepartment();
}
export default function ({ expose }) {
    const pageRequest = async (query) => {
        const param = await query;
        query.param = {
            "Order": "Id asc",
            "AccountType~=": param.accountType,
            "Account~%": param.account,
            "NickName~%": param.nickName,
            "Phone~%": param.phone
        }
        if (!param.accountType) {
            delete query.param["AccountType~="];
        }
        if (!param.account) {
            delete query.param["Account~%"];
        }
        if (!param.phone) {
            delete query.param["Phone~%"];
        }
        if (!param.nickName) {
            delete query.param["NickName~%"];
        }
        const result = await getUserPage(query);
        return result;
    };
    const editRequest = async ({ form, row }: EditReq) => {
        if (form.id == null) {
            form.id = row.id;
        }
        form.birthday = dayjs(form.birthday).format('YYYY-MM-DD HH:mm:ss')
        return await editUser(form);
    };
    const addRequest = async ({ form }: AddReq) => {
        form.birthday = dayjs(form.birthday).format('YYYY-MM-DD HH:mm:ss')
        return await addUser(form);
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
                wrapper: {
                    width: '800px',
                    draggable: false,
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
                show: true
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
                    const records = res.data.list;
                    const total = res.data.totalPage;
                    const currentPage = res.data.currentPage;
                    const pageSize = res.data.pageSize;
                    return {
                        currentPage: currentPage, pageSize: pageSize, total: total, records
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
                        disabled(row) {
                            return row.account === 'admin';
                        },
                    },
                },
                accountType: {
                    title: '账号类型',
                    type: 'dict-select',
                    dict: dict({
                        label: "describe",
                        value: "value",
                        async getData({ dict }) {
                            return await accountTypeList();
                        }
                    }),
                    search: {
                        show: true, col: { span: 4 },
                        component: {
                            clearable: true
                        },
                    },
                    column: {
                        width: 150,
                    },
                    form: {
                        component: {
                            clearable: false,
                            multiple: false,
                        },
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请选择账号类型' }
                        ]
                    }
                },
                account: {
                    title: '账号',
                    type: 'text',
                    search: { show: true, col: { span: 'auto' } },
                    column: {
                        width: 150,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入账号' },
                        ],
                    }
                },
                departId: {
                    title: '部门',
                    type: 'dict-cascader',
                    dict: dict({
                        cloneable: false,
                        isTree: true,
                        label: "name",
                        value: "id",
                        async getData({ dict }) {
                            return removeEmptyChildren(await departmentList())
                        }
                    }),
                    search: { show: false },
                    column: {
                        width: 150,
                    },
                    form: {
                        component: {
                            clearable: false,
                            multiple: false,
                        },
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请选择部门' }
                        ]
                    }
                },
                posId: {
                    title: '职位',
                    type: 'dict-select',
                    dict: dict({
                        label: "name",
                        value: "id",
                        async getData({ dict }) {
                            return await postList()
                        }
                    }),
                    search: { show: false },
                    column: {
                        width: 150,
                    },
                    form: {
                        component: {
                            clearable: false,
                            multiple: false,
                        },
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请选择职位' }
                        ]
                    }
                },
                nickName: {
                    title: '昵称',
                    type: 'text',
                    search: { show: true, col: { span: 'auto' } },
                    column: {
                        width: 150,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入昵称' },

                        ],
                    }
                },
                realName: {
                    title: '真实姓名',
                    type: 'text',
                    search: { show: false },
                    column: {
                        show: false,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入真实姓名' },

                        ],
                    }
                },
                avatar: {
                    title: '头像',
                    type: 'image-uploader',
                    search: { show: false },
                    column: {
                        width: 150,
                    },
                    form: {
                        col: { span: 24 },
                        rule: [
                            { required: true, message: '请输入头像' },

                        ],
                        component: {
                            limit: 1,
                            uploader: {
                                type: 'form',
                                accept: ".png,.jpeg,.jpg,.ico,.bmp,.gif,.webp,.svg"
                            },
                        },
                        helper: '最大可上传1个文件',
                    }
                },
                phone: {
                    title: '手机号码',
                    type: 'text',
                    search: { show: true, col: { span: 'auto' } },
                    column: {
                        width: 150,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入手机号码' },
                            { pattern: REGEXP_PHONE, message: '手机号码错误', trigger: 'input' },
                        ],
                    }
                },
                email: {
                    title: '邮箱',
                    type: 'text',
                    search: { show: false },
                    column: {
                        width: 180,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入邮箱' },
                            { pattern: REGEXP_EMAIL, message: '邮箱格式错误', trigger: 'input' },
                        ],
                    }
                },
                sex: {
                    title: '性别',
                    type: 'dict-select',
                    search: { show: false },
                    column: {
                        width: 150,
                    },
                    dict: dict({
                        label: "describe",
                        value: "value",
                        async getData({ dict }) {
                            return await sexList()
                        }
                    }),
                    form: {
                        component: {
                            clearable: false,
                            multiple: false,
                        },
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请选择性别' },
                        ],
                    }
                },
                age: {
                    title: '年龄',
                    type: 'number',
                    search: { show: false },
                    column: {
                        width: 150,
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入年龄' }
                        ],
                    }
                },
                nation: {
                    title: '民族',
                    type: 'text',
                    search: { show: false },
                    column: {
                        width: 150
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入民族' },

                        ],
                    }
                },
                birthday: {
                    title: '出生日期',
                    type: 'datetime',
                    search: { show: false },
                    column: {
                        width: 200
                    },
                    form: {
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请输入出生日期' },

                        ],
                        component: {
                            format: 'yyyy年MM月dd日 HH:mm',
                        },
                    }
                },
                status: {
                    title: '状态',
                    type: 'dict-select',
                    search: { show: false },
                    dict: dict({
                        label: "describe",
                        value: "value",
                        async getData({ dict }) {
                            return await statuList()
                        }
                    }),
                    column: {
                        width: 150
                    },
                    form: {
                        component: {
                            clearable: false,
                            multiple: false,
                        },
                        col: { span: 12 },
                        rule: [
                            { required: true, message: '请选择状态' },

                        ],
                    }
                },
                createTime: {
                    title: '创建时间',
                    type: 'text',
                    search: { show: false },
                    column: {
                        width: 200,
                    },
                    form: {
                        show: false,
                    }
                }
            },
        },
    };
}