import { createApp } from 'vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import {TroisJSVuePlugin} from 'troisjs'
import App from './App.vue'

createApp(App).use(TroisJSVuePlugin).use(ElementUI).mount('#app')
