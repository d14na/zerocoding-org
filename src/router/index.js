import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Bounties = () => import('@/views/Bounties')
const IpCdn = () => import('@/views/IpCdn')
const Jobs = () => import('@/views/Jobs')
const Labs = () => import('@/views/Labs')
const Plugins = () => import('@/views/Plugins')
const Projects = () => import('@/views/Projects')
const Tutorials = () => import('@/views/Tutorials')
const Welcome = () => import('@/views/Welcome')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/welcome',
        name: 'Welcome',
        component: DefaultContainer,
        children: [{
            path: 'welcome',
            name: '',
            component: Welcome
        }, {
            path: 'bounties',
            name: 'Bounties',
            component: Bounties
        }, {
            path: 'ipcdn',
            name: 'InterPlanetary Content Delivery Network (IPCDN)',
            component: IpCdn
        }, {
            path: 'jobs',
            name: 'Jobs & Career',
            component: Jobs
        }, {
            path: 'labs',
            name: 'Labs',
            component: Labs
        }, {
            path: 'plugins',
            name: 'Plugins',
            component: Plugins
        }, {
            path: 'projects',
            name: 'Projects',
            component: Projects
        }, {
            path: 'tutorials',
            name: 'Tutorials',
            component: Tutorials
        }]
    }]
})
