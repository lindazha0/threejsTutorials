import { createApp } from 'vue'
// import App from './App.vue'
import routes from './router'
import {createRouter, createWebHashHistory} from 'vue-router';
// element-plus
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

// TroisJS
import {TroisJSVuePlugin} from 'troisjs'

const app = createApp({el:'#app'})

// use all icons
for (let i in Icons){
    app.component(i, Icons[i])
}

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
// console.log(app)
app.use(router)

app.use(TroisJSVuePlugin).use(ElementUI).mount('#app')
