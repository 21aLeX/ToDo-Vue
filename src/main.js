import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import * as ConfirmDialog from 'vuejs-confirm-dialog';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App, store);
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
}
app.use(ConfirmDialog);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');