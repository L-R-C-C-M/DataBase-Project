import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
// app.config.globalProperties.$axios = axios
app.use(ElementPlus).use(store).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



//引入高德地图API
import VueAMap from 'vue-amap'
//让Vue使用高德地图API
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '3656be7baf8903efaaf42b1ab18af172',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch',
    'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',
    'AMap.Geocoder', 'AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11'
});