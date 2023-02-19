# vueRouter

多页面的应用，我们需要利用路由来实现页面之间的跳转的过程，

1、安装路由插件
````
npm install vue -router@4
```
2、对路由进行管理
①在src下面创建一个router文件夹，用来存放路由相关的代码
②在这里面创建一个index.js的文件，路由核心的代码就在这里面
③相关的代码
``` js
//从vue-router中导入需要用到的方法
import {createRouter,createWebHistory} from 'vue-router'
//每个页面对应的路径的名称
const routes = [
    // 每一个路由地址都是花括号
    {
        path:"/login",  //定义访问这个页面的路径
        name:"Login",   //
        components:() => import('../views/login.vue')   //导入这个页面的代码
    }
]

const router = createRouter({    //创建路由
    history:createWebHistory(),  //设置路由的模式为history模式
    routes     //把上面的定义的每个页面的路径加载到路由中
})
export default router;    //导出
```

4.在项目中使用路由
在main.js中吧路由加载到页面中

```js
import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
```