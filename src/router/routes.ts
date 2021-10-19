import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../layouts/Auth.vue'),
        children: [
            { path: '', component: () => import('../views/auth/Login.vue') },
            {
                path: '/dashboard',
                component: () => import('../views/dashboard/user/dashboard.vue'),
            },
        ],
    },
]

export default routes
