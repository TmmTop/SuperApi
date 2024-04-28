import { createApp } from 'vue';
import pinia from '@/stores/index';
import App from '@/App.vue';
import router from '@/router';
import { directive } from '@/directive/index';
import { i18n } from '@/i18n/index';
import other from '@/utils/other';
import http from '@/utils/http';
import { download } from '@/utils/http'
import { useDict, getDict } from '@/utils/dict';
import ElementPlus from 'element-plus';
import '@/theme/index.scss';
import mitt from 'mitt';

// import VueGridLayout from 'vue-grid-layout';
import { getDicts } from './api';
import { selectDictLabel } from '@/utils/index'
import Column from '@/components/diycolumn';
import * as ElIcon from '@element-plus/icons-vue'
const app = createApp(App);
for (let iconName in ElIcon) {
    app.component(iconName, ElIcon[iconName])
}
directive(app);
other.elSvg(app);

app.use(pinia).use(router).use(ElementPlus).use(i18n).use(Column).mount('#app');
app.config.globalProperties.mittBus = mitt();
app.config.globalProperties.getDicts = getDicts
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.$http = http
app.config.globalProperties.useDict = useDict
app.config.globalProperties.getDict = getDict
app.config.globalProperties.download = download
