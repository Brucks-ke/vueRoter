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