import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Bounties = () => import('@/views/Bounties')
const IpCdn = () => import('@/views/IpCdn')
const FAQ = () => import('@/views/FAQ')
const GettingStarted = () => import('@/views/GettingStarted')
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
            path: 'bounties',
            name: 'Bounties',
            component: Bounties

        /* FAQ */
        }, {
            path: 'faq',
            name: 'FAQ',
            component: FAQ

        /* Getting Started */
        }, {
            path: 'getting-started',
            name: 'Getting Started',
            component: GettingStarted

        /* IPCDN */
        }, {
            path: 'ipcdn',
            name: 'InterPlanetary Content Delivery Network (IPCDN)',
            component: IpCdn

        /* Jobs */
        }, {
            path: 'jobs',
            name: 'Jobs Board',
            component: Jobs

        /* Labs */
        }, {
            path: 'labs',
            name: 'Labs',
            component: Labs

        /* Plugins */
        }, {
            path: 'plugins',
            name: 'Plugins',
            component: Plugins

        /* Projects */
        }, {
            path: 'projects',
            name: 'Projects',
            component: Projects

        /* Tutorials */
        },{
            path: 'tutorials',
            name: 'Tutorials',
            component: Tutorials
        },{
            path: 'tutorials/:guideId',
            name: 'Tutorials',
            component: Tutorials
        },{
            path: 'tutorials/:guideId/:pageId',
            name: 'Tutorials',
            component: Tutorials

        /* Welcome */
        },{
            path: 'welcome',
            name: '',
            component: Welcome
        }]
    }]
})
