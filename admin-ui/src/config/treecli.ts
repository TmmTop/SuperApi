/*
 * @Author: 490912587@qq.com
 * @Date: 2024-05-14 17:40:42
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-14 17:41:20
 * @FilePath: \admin-ui\src\config\treecli.ts
 * @Description: 
 */
//去掉本级的children
export function removeChildren(tree) {
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
//无限级去掉最后一层children为[]的数据
export function removeEmptyChildren(tree) {
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