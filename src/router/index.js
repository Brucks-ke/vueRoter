import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    // 每一个路由地址都是花括号
    // 登录页面
    {
        path:"/",
        name:"Login",
        component:() => import('../views/login.vue')
    },
    // 学生信息页面
    {
        path:"/student",
        name:"student",
        component:() => import('../views/studentList.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to,from,next) => {
    const token = localStorage.getItem('token')
    // 如果token不存在或者当前页面不是去往主页就返回到主页，因为密码输入不正确
    if(!token && to.path != "/"){
        next("/")
    } 
    // 如果token存在（已登录）并且现在想要进入主页就进入反复进入student
    else if(token && to.path == "/"){
        next("/student")
    }
    // 如果
    else{
        next()
    }
})
export default router;