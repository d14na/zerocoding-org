/**
 * Initialize (Active) Plugins List
 *
 * id        : unique identifier
 * name      : uiserver identifier
 * namespace : unique namespace for UiWebSocket calls
 * title     : display title
 * coverDesc : description of plugin (can use `plugin_info` by default)
 * coverImg  : media/artwork
 * rev       : current revision
 */
const active = [{
    id: 'blockchain',
    name: 'Blockchain',
    namespace: 'blockchain',
    title: 'Blockchain',
    coverDesc: `Connect your Zeronet client to the cryptocurrency world with this Bitcoin/Ethereum wallet manager.`,
    coverImg: 'https://i.imgur.com/Ew9Utjm.png',
    rev: 4,
}, {
    id: 'peer-message',
    name: 'PeerMessage',
    namespace: 'peer',
    title: 'PeerMessage',
    coverDesc: `A single plugin for everything. From chats to ID providers. In PeerMessage, messages can be sent to all peers hosting the site. The messages are broadcasted among the network like in a chain reaction.`,
    coverImg: 'https://i.imgur.com/u3rViqE.png',
    rev: 5,
}, {
    id: 'superuser',
    name: 'Superuser',
    namespace: 'sudo',
    title: 'Superuser',
    coverDesc: `For advanced users that are looking for more fine-grained control over their Zeronet experience.`,
    coverImg: 'https://i.imgur.com/Ce98F9v.jpg',
    rev: 12,
}, {
    id: 'background-processing',
    name: 'Background',
    namespace: 'start',
    title: 'Background Processing',
    coverDesc: `ZeroNet plugin for running site code in background, when browser is closed. Safe.`,
    coverImg: 'https://i.imgur.com/4ZJQwfK.jpg',
    rev: 1,
}]

export {
    active
}
// module.exports = active
