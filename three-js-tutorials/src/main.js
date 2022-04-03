import { createApp } from 'vue'
import App from './App.vue'

// element-plus
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

// TroisJS
import {TroisJSVuePlugin} from 'troisjs'

const app = createApp(App)

// use all icons
for (let i in Icons){
    app.component(i, Icons[i])
}

app.use(TroisJSVuePlugin).use(ElementUI).mount('#app')
