import VueRouter from 'vue-router';
import Vue from "vue";

// TODO 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
            navLeft: true,
            navTitle: 'Home',
            navRight: false,
            keepAlive: true
        }
    },
    {
        path: '/404',
        component: () => import('@/views/common/error404/404.vue'),
        meta: {
            navLeft: true,
            navTitle: '404',
            navRight: false,
            keepAlive: true
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
]
const router = new VueRouter({
    mode: "hash",
    routes
})

export default router;
