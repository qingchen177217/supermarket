import VueRouter from 'vue-router'
import Vue from 'vue'

// 1.安装插件
Vue.use(VueRouter)
const home = () =>
    import ('../views/home/home')
const category = () =>
    import ('../views/category/category')
const cart = () =>
    import ('../views/cart/cart')
const profile = () =>
    import ('../views/profile/profile')

// 2.创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/cart',
        component: cart
    },
    {
        path: '/category',
        component: category
    }, {
        path: '/profile',
        component: profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3. 导出
export default router