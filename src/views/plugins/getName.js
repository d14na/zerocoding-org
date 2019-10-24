/**
 * Get Name
 */
const getName = function (_pluginId) {
    /* Search. */
    for (let plugin of this.plugins) {
        if (_pluginId === plugin.id) {
            return plugin.name
        }
    }

    return 'Unknown'
}

export default getName
