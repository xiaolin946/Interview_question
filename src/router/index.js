import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: ()=> import('../views/Login.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: ()=> import('../views/test.vue')
    },


]

const router = createRouter({
    history: createWebHistory("/"),
    routes: routes,
})



//输出对象
export default router