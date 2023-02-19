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
```js
//从vue-router中导入需要用到的方法
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    // 每一个路由地址都是花括号
    {
        path:"/login",
        name:"Login",
        components:() => import('../views/login.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
```