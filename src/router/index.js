import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/consolidation',
        name: 'Consolidation',
        component: () =>
            import ( /* webpackChunkName: "consolidation" */ '../views/Consolidation.vue')
    },
    {
        path: '/purchasing',
        name: 'Purchasing',
        component: () =>
            import ( /* webpackChunkName: "purchasing" */ '../views/Purchasing.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router