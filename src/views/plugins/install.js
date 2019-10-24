/**
 * Install (Plugin)
 */
const install = async function () {
    /* Request server info. */
    const serverInfo = await this.app.cmd('serverInfo')

    // TODO Display in screen terminal.
    console.log('INSTALL SERVER INFO', serverInfo)

    /* Validate minimum requirement. */
    if (serverInfo.rev < 4000) {
        return this.app.cmd('wrapperNotification', [
            'error',
            'You are using an outdated Python 2 ZeroNet.' +
            '<br>Please download a new bundle from https://zeronet.io.',
            7000
        ])
    }

    /* Validate minimum requirement. */
    if (serverInfo.rev < 4191) {
        return this.app.cmd('wrapperNotification', [
            'error',
            'Your ZeroNet is outdated (rev4191 is required), please update.',
            7000
        ])
    }

    /* Handle Background Processing. */
    if (this.activePluginId === 'background') {
        return this.app.cmd('wrapperNotification', [
            'error',
            'Sorry, that PLUGIN is currently unavailable.',
            7000
        ])
    }

    /* Handle Blockchain. */
    if (this.activePluginId === 'blockchain') {
        /* Validate current installation. */
        if (serverInfo.plugins.indexOf('Blockchain') > -1) {
            return this.app.cmd('wrapperNotification', [
                'error',
                'Please update Blockchain from Plugins configuration page.',
                7000
            ])
        } else {
            /* Request new installation. */
            return this.app.cmd('pluginAddRequest', 'plugins/Blockchain')
        }
    }

    /* Handle PeerMessage. */
    if (this.activePluginId === 'peermsg') {
        // NOTE: Special handling for OLDER versions.
        if (serverInfo.plugins.indexOf('PeerMessage') > -1 && !serverInfo.plugins_rev.PeerMessage) {
            return this.app.cmd('wrapperNotification', [
                'error',
                'Please delete the old plugin from plugins/PeerMessage' +
                '<br>first and restart ZeroNet.',
                7000
            ])
        }

        if (serverInfo.plugins_rev.PeerMessage) {
            return this.app.cmd('wrapperNotification', [
                'error',
                'Please update PeerMessage from Plugins configuration page.',
                7000
            ])
        }

        this.app.cmd('pluginAddRequest', 'plugins/PeerMessage')
    }

    /* Handle Superuser. */
    if (this.activePluginId === 'superuser') {
        if (serverInfo.plugins.indexOf('Superuser') > -1) {
            return this.app.cmd('wrapperNotification', [
                'error',
                'Please update Superuser from Plugins configuration page.',
                7000
            ])
        } else {
            /* Request new installation. */
            return this.app.cmd('pluginAddRequest', 'plugins/Superuser')
        }
    }
}

export default install
