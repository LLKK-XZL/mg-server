import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import NotFound from '../components//NotFound.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        redirect: Welcome,
        component: Home,
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
                component: Welcome,
            },
            {
                name: 'login',
                path: '/login',
                component: Login,
            }
        ]

    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFount',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router