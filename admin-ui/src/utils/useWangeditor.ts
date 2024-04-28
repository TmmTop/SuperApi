
import { Boot, IButtonMenu } from '@wangeditor/editor';
import { onMounted, getCurrentInstance } from 'vue';
export default () => {
    const { proxy } = <any>getCurrentInstance();
    // 定义菜单 class
    class MyButtonMenu implements IButtonMenu {
        title = '图片上传';
        iconSvg =
            '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>';
        tag = 'button';

        getValue() {
            return '';
        }
        isActive() {
            return false; // or false
        }
        isDisabled() {
            return false; // or true
        }
        exec() {
            proxy.mittBus.emit('onImageStoregeShow');
        }
    }

    function registerMenu() {
        // 定义菜单配置
        const menu1Conf = {
            key: 'diygwimage', // menu key ，唯一。注册之后，可配置到工具栏
            factory() {
                return new MyButtonMenu();
            },
        };

        // 注册到 wangEditor
        Boot.registerMenu(menu1Conf);
    }
    onMounted(() => {
        registerMenu()
    })
}


