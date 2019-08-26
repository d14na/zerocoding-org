import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Labs = () => import('@/views/Labs')
const Resumes = () => import('@/views/Resumes')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: DefaultContainer,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard
        }, {
            path: 'labs',
            name: 'Labs',
            component: Labs
        }, {
            path: 'resumes',
            name: 'Resumes | CVs',
            component: Resumes
        }]
    }]
})
