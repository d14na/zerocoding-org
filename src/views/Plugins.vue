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

                            <b-button href="javascript://" variant="primary">View Plugin <i class="fa fa-arrow-right ml-1"></i></b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>Plugin Manager</strong>
                        </div>

                        <div class="card-body">
                            <p>
                                Its easy to <strong>install, update and uninstall</strong> ANY of the plugins listed on this page.
                            </p>

                            <b-button block variant="primary" class="mb-3" @click="openHome">Open PeerMessage Home</b-button>

                            <hr />

                            <b-button block variant="warning" @click="runTest">Run {{pluginName}} Tests</b-button>
                            <b-button block variant="outline-danger" @click="install">Install Blockchain</b-button>
                            <b-button block variant="outline-danger" @click="uninstall">Uninstall Blockchain</b-button>
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
        pluginName () {
            return 'PeerMessage'
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
        openHome () {
            /* Open new window (via Zeronet). */
            this.app.cmd(
                'wrapperOpenWindow',
                ['http://127.0.0.1:43110/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/',
                '_blank']
            )

            // FIXME Detect Zeronet client and save to GLOBAL STORE
            /* Open new window (via Clearnet proxy). */
            // window.open('https://0net.io/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/')
        },
        async install () {
            // this.app.cmd('wrapperNotification', ['error', 'Oops! That feature is NOT available yet.', 5000])

            const serverInfo = await this.app.cmd('serverInfo')
            console.log('INSTALL SERVER INFO', serverInfo)

            if (serverInfo.rev < 4000) {
                return this.app.cmd(
                    'wrapperNotification',
                    [
                        'error',
                        'You are using an outdated Python 2 ZeroNet.<br>Please download a new bundle from https://zeronet.io.'
                    ]
                )
            }

            if (serverInfo.rev < 4191) {
                return this.app.cmd(
                    'wrapperNotification',
                    [
                        'error',
                        'Your ZeroNet is outdated (rev4191 is required), please update.'
                    ]
                )
            }

            return this.app.cmd('pluginAddRequest', 'plugins/Blockchain')

            if (serverInfo.plugins.indexOf('PeerMessage') > -1 && !serverInfo.plugins_rev.PeerMessage) {
                return this.app.cmd(
                    'wrapperNotification',
                    [
                        'error',
                        'Please delete the old plugin from plugins/PeerMessage<br>first and restart ZeroNet.'
                    ]
                )
            }

            if (serverInfo.plugins_rev.PeerMessage) {
                return this.app.cmd(
                    'wrapperNotification',
                    [
                        'error', 'Please update PeerMessage from Plugins configuration page.'
                    ]
                )
            }

            // this.app.cmd('pluginAddRequest', 'plugins/PeerMessage')
        },
        update () {
            this.app.cmd('wrapperNotification', ['error', 'Oops! That feature is NOT available yet.', 5000])
        },
        uninstall () {
            this.app.cmd('wrapperNotification', ['error', 'Oops! That feature is NOT available yet.', 5000])
        },
        async runTest () {
            this.app.cmd('blockchain', [], (results) => {
                /* Set display object. */
                const displayConsole = document.getElementById('display-console')

                /* Format message (for display). */
                const formatted = `<code><pre class="text-white">${JSON.stringify(results, null, 4)}</pre></code>`

                /* Update display. */
                displayConsole.innerHTML = formatted
            })
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
