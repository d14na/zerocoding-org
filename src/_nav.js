export default {
    items: [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    }, {
        divider: true
    }, {
        title: true,
        name: 'Resources'
    }, {
        name: 'Resumes | CVs',
        url: '/resumes',
        icon: 'icon-pencil',
        badge: {
            variant: 'primary',
            text: 'NEW'
        }
    }, {
        divider: true
    }, {
        title: true,
        name: 'Get Involved!'
    }, {
        name: 'Labs',
        url: '/labs',
        icon: 'icon-pencil'
    }]
}
