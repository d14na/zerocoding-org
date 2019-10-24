/**
 * Get Revision
 */
const getRev = function (_pluginId) {
    /* Search. */
    for (let plugin of this.plugins) {
        if (_pluginId === plugin.id) {
            return plugin.rev
        }
    }

    return 0
}

export default getRev
