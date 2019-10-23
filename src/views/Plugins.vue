<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="12" lg="8">
                <b-row>
                    <b-col sm="6" v-for="plugin of plugins" v-bind:key="plugin.id">
                        <b-card
                            :title="plugin.title"
                            :img-src="getCover(plugin.coverImg)"
                            img-alt="Plugin Cover"
                            img-top
                            class="mb-3"
                        >
                            <b-card-text>
                                {{plugin.coverDesc}}
                            </b-card-text>

                            <b-button @click="loadPlugin(plugin.id)" variant="primary">OPEN {{plugin.title}} <i class="fa fa-arrow-right ml-1"></i></b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>{{pluginTitle}} Manager</strong>
                        </div>

                        <div class="card-body">
                            <p>
                                Its easy to <strong>install</strong> ANY of the plugins listed on this page.
                            </p>

                            <b-button block variant="primary" class="mb-3" @click="openHome">Open {{pluginTitle}} Home</b-button>

                            <hr />

                            <b-button block variant="warning" @click="runTest">Run {{pluginTitle}} Tests</b-button>
                            <b-button block variant="outline-danger" @click="install">Install {{pluginTitle}}</b-button>
                            <b-button block variant="outline-danger" @click="uninstall">Uninstall {{pluginTitle}}</b-button>
                        </div>

                        <!-- placeholder for markdown display -->
                        <b-alert show id="display-console">
                            {{preview}}
                        </b-alert>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import (local) libraries. */
// NOTE: We use a local version of zerolib (w/ ES6 support).
import ZeroLib from '../libs/zerolib'

/**
 * Zeronet Application
 */
class ZeroApp extends ZeroLib {
    constructor(_supeer) {
        super(_supeer)

        /* Initialize notification flag. */
        this.notif = false

        /* Bind methods. */
        this.onOpen = this.onOpen.bind(this)
    }

    onOpen() {
        /* Call super. */
        super.onOpen()
    }

    onEvent(evt, msg) {
        /* Validate event. */
        if (typeof evt === 'undefined') {
            if (!this.notif) {
                this.notif = true
                return console.error('What should we do about this undefined?')
            }
        }

        switch(evt) {
        case 'peerReceive':
            this.cmd('peerValid', [msg.params.hash]); // This message is valid - broadcast it to other peers

            let text = msg.params.message; // Get message itself
            let identityAddress = msg.params.signed_by; // and identity address

            console.log(identityAddress + ":", text); // and print them

            break
        default:
            // FIXME Add notification for Clearnet users to d/l client.
            this._log('Unknown event:', evt)
        }
    }
}

export default {
    data: () => {
        return {
            activePluginId: 'blockchain',
            preview: '',
            plugins: [{
                id: 'blockchain',
                title: 'Blockchain',
                coverDesc: `Connect your Zeronet client to the cryptocurrency world with this Bitcoin/Ethereum wallet manager.`,
                coverImg: 'https://i.imgur.com/Ew9Utjm.png',
                // coverImg: 'https://i.imgur.com/DSkIwBN.png',
            }, {
                id: 'peer-message',
                title: 'PeerMessage',
                coverDesc: `A single plugin for everything. From chats to ID providers. In PeerMessage, messages can be sent to all peers hosting the site. The messages are broadcasted among the network like in a chain reaction.`,
                coverImg: 'https://i.imgur.com/u3rViqE.png',
            }, {
                id: 'superuser',
                title: 'Superuser',
                coverDesc: `For advanced users that are looking for more fine-grained control over their Zeronet experience.`,
                coverImg: 'https://i.imgur.com/Ce98F9v.jpg',
            }, {
                id: 'background',
                title: 'Background Processing',
                coverDesc: `ZeroNet plugin for running site code in background, when browser is closed. Safe.`,
                coverImg: 'https://i.imgur.com/4ZJQwfK.jpg',
            }],
        }
    },
    computed: {
        pluginTitle () {
            for (let plugin of this.plugins) {
                if (this.activePluginId === plugin.id) {
                    return plugin.title
                }
            }

            return 'Unknown'
        },
    },
    methods: {
        getCover (_url) {
            /* Set constants. */
            const MAX_IMG_ID = 300

            /* Calculate random integer. */
            const rndInt = Math.floor(Math.random() * MAX_IMG_ID) + 700

            if (_url) {
                return _url
            } else {
                return `https://picsum.photos/id/${rndInt}/600/300`
            }
        },
        loadPlugin (_pluginId) {
            /* Set active plugin. */
            this.activePluginId = _pluginId
        },
        openHome () {
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
            case 'peer-message':
                /* Open new window (via Clearnet proxy). */
                // return window.open('https://0net.io/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/')

                /* Open new window (via Zeronet). */
                return this.app.cmd(
                    'wrapperOpenWindow',
                    ['http://127.0.0.1:43110/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/']
                )
            default:
                return this.app.cmd('wrapperNotification', [
                    'error',
                    `Oops! Looks like that plugin doesn't have a home :(`,
                    7000
                ])
            }

        },
        async install () {
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
            if (this.activePluginId === 'peer-message') {
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
        },
        uninstall () {
            const message = `Please un-install ${this.pluginTitle} from Plugins configuration page.`
            const buttonTitle = 'Open Plugins?'

            this.app.cmd('wrapperConfirm', [message, buttonTitle], (confirmed) => {
                /* Validate user selection. */
                if (confirmed) {
                    /* Go to plugins. */
                    this.app.cmd('wrapperOpenWindow', ['/Plugins'])
                }
            })
        },
        async runTest () {
            /* Handle Background Processing. */
            if (this.activePluginId === 'background') {
                return this.app.cmd('wrapperNotification', [
                    'error',
                    'Sorry, that TEST is currently unavailable.',
                    7000
                ])
            }

            /* Handle Blockchain. */
            if (this.activePluginId === 'blockchain') {
                this.app.cmd('blockchain', [], (results) => {
                    /* Set display object. */
                    const displayConsole = document.getElementById('display-console')

                    /* Format message (for display). */
                    const formatted = `<code><pre class="text-white">${JSON.stringify(results, null, 4)}</pre></code>`

                    /* Update display. */
                    displayConsole.innerHTML = formatted
                })
            }

            /* Handle PeerMessage. */
            if (this.activePluginId === 'peer-message') {
                return this.app.cmd('wrapperNotification', [
                    'error',
                    'Sorry, that TEST is currently unavailable.',
                    7000
                ])
            }

            /* Handle Superuser. */
            if (this.activePluginId === 'superuser') {
                this.app.cmd('sudo', [], (results) => {
                    /* Set display object. */
                    const displayConsole = document.getElementById('display-console')

                    /* Format message (for display). */
                    const formatted = `<code><pre class="text-white">${JSON.stringify(results, null, 4)}</pre></code>`

                    /* Update display. */
                    displayConsole.innerHTML = formatted
                })
            }
        },
        async runHubTest () {
            /* Initialize hub address. */
            const HUB_ADDRESS = '1LoBBY2nHUfRBdawmMLhHGRnAGVWTxWBjj'

            /**
             * Send Message
             */
            const _sendMessage = (_text) => {
                /* Build package. */
                const pkg = {
                    message: _text,
                    privatekey: false
                }

                console.log('SENDING', pkg)

                /* Send message to those who have downloaded hub. */
                this.app.cmd('as', [HUB_ADDRESS, 'peerBroadcast', pkg])
            }

            /* Request permission for hub. */
            const success = await this.app.cmd('wrapperPermissionAdd', ['Merger:ZeroCoding-Chans'])
            // const success = await this.app.cmd('permissionAdd', ['Merger:ZC_Chan_Lobby'])
                .catch(error => {
                    console.error('MERGER ERROR:', error)
                })
            console.log('SUCCESS', success)

            /* Validate permission. */
            if (success) {
                /* Add new merger site. */
                this.app.cmd('mergerSiteAdd', [HUB_ADDRESS])
            }

            /* Set display object. */
            const displayConsole = document.getElementById('display-console')

            /* Build package. */
            const pkg = {
                text: 'Just a quick, hi there!',
                // message: 'Just a quick, hi there!',
                privatekey: false
            }

            let text = 'Just a quick, hi there!'
            return _sendMessage(text)

            /* Request peer broadcast. */
            // const request = await this.app.cmd('peerBroadcast', pkg)
            const results = await this.app.cmd('peerBroadcast', [text])
                .catch(error => {
                    /* Format message (for display). */
                    const formatted = `<code><pre class="text-white">${JSON.stringify(error, null, 4)}</pre></code>`

                    /* Update display. */
                    displayConsole.innerHTML = formatted
                })

            /* Validate results. */
            if (results) {
                /* Format message (for display). */
                const formatted = `<code><pre class="text-white">${JSON.stringify(results, null, 4)}</pre></code>`

                /* Update display. */
                displayConsole.innerHTML = formatted
            }
        },
    },
    mounted: function () {
        /* Initialize new zeronet application. */
        this.app = new ZeroApp()

        this.app.onRequest = function (cmd, message) {
            alert('onRequest')
            console.log('CMD', cmd)
            console.log('MESSAGE', message)

            if (cmd === 'peerReceive') {
                this.app.cmd('peerValid', [message.params.hash]); // This message is valid - broadcast it to other peers

                let text = message.params.message; // Get message itself
                let identityAddress = message.params.signed_by; // and identity address

                console.log(identityAddress + ":", text); // and print them
            }
        }
    }
}
</script>

<style scoped>
.win-summary {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-summary {
    float: right;
    width: 25vw;

    margin-top: 125px;
    margin-right: 25px;
}

#display-console {
    height: 100px;
    margin: 20px;

    font-size: 0.8em;
    background-color: rgba(30, 30, 30, 0.8);
}
</style>
