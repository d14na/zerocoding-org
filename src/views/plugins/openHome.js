/**
 * Open (Plugin) Home
 */
const openHome = function () {
    // FIXME Detect Zeronet client and save to GLOBAL STORE
    switch(this.activePluginId) {
    case 'background':
        /* Open new window (via Clearnet proxy). */
        // return window.open('https://github.com/HelloZeroNet/Plugin-BackgroundProcessing')

        /* Open new window (via Zeronet). */
        return this.app.cmd(
            'wrapperOpenWindow',
            ['https://github.com/HelloZeroNet/Plugin-BackgroundProcessing']
        )
    case 'blockchain':
        /* Open new window (via Clearnet proxy). */
        // return window.open('https://github.com/d14na/plugins-blockchain')

        /* Open new window (via Zeronet). */
        return this.app.cmd(
            'wrapperOpenWindow',
            ['https://github.com/d14na/plugins-blockchain']
        )
    case 'peermsg':
        /* Open new window (via Clearnet proxy). */
        // return window.open('https://0net.io/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/')

        /* Open new window (via Zeronet). */
        return this.app.cmd(
            'wrapperOpenWindow',
            ['http://127.0.0.1:43110/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/']
        )
    case 'superuser':
        /* Open new window (via Clearnet proxy). */
        // return window.open('https://github.com/d14na/plugins-superuser')

        /* Open new window (via Zeronet). */
        return this.app.cmd(
            'wrapperOpenWindow',
            ['https://github.com/d14na/plugins-superuser']
        )
    default:
        return this.app.cmd('wrapperNotification', [
            'error',
            `Oops! Looks like that plugin doesn't have a home :(`,
            7000
        ])
    }

}

export default openHome
