import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}