/**
 * Load Plugin
 */
const loadPlugin = async function (_pluginId) {
    /* Request server info. */
    const serverInfo = await this.app.cmd('serverInfo')

    // TODO Display in screen terminal.
    console.log('LOAD PLUGIN SERVER INFO', serverInfo)

    /* Set active plugin. */
    this.activePluginId = _pluginId

    /* Reset (active) name. */
    this.activePluginName = ''

    /* Reset (active) revision. */
    this.activePluginRev = 0

    /* Set plugin name. */
    const pluginName = this.getName(_pluginId)

    /* Set latest revision. */
    const lasestRev = this.getRev(_pluginId)

    /* Validate plugin. */
    if (serverInfo.plugins_rev && serverInfo.plugins_rev[pluginName]) {
        /* Set (active) name. */
        this.activePluginName = pluginName

        /* Set (active) revision. */
        this.activePluginRev = serverInfo.plugins_rev[pluginName]

        if (this.activePluginRev < lasestRev) {
            return this.app.cmd('wrapperNotification', [
                'info',
`${pluginName} has an update available by visiting the Plugins Manager.
Your CURRENT version is [ rev${this.activePluginRev} ];
the LATEST revision is [ rev${lasestRev} ]`,
                10000
            ])
        }
    }
}

export default loadPlugin
