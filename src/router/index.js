import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    // 每一个路由地址都是花括号
    {
        path:"/",
        name:"Login",
        component:() => import('../views/login.vue')
    },
    {
        path:"/Student",
        name:"student",
        component:() => import('../views/studentList.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;