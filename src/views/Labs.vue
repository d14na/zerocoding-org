<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="12" lg="4">
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnAlerts">Alerts</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnNewPermission">Permission Request</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnUserInput">User Input</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnCertSelect">Certificate Select</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnServerInfo">Server Info</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnSiteInfo">Site Info</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnMergerList">Merger Site List</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnCORSPermission">CORS Permission (ZeroCDN)</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnChartDb">ChartDb</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnNewsfeed">Newsfeed</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnNewsfeedList">Newsfeed List</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnRunAs">Command `as`</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnPubkey">Public Key</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnEcies">ECIES Encryption</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnUserSettings">User Settings</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnPlugin">Blockchain Plugin</button>
                <button class="btn btn-outline-dark btn-block mb-3" @click="btnMisc">MISC</button>
            </b-col>

            <b-col sm="12" lg="8">
                <div class="card">
                    <div class="card-header">
                        ZEROCODING LABS
                    </div>
                    <div class="card-body">
                        <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>

                        <b-button block variant="primary">Primary</b-button>
                        <b-button block variant="secondary">Secondary</b-button>
                    </div>
                </div>

                <b-card class="bg-white">
                    <div slot="header">
                        The Truth About Zeronet

                        <div class="card-header-actions">
                            <b-link href="#/tutorials/the-truth-about-zeronet" class="card-header-action btn-setting">
                                <i class="icon-home"></i>
                            </b-link>
                            <b-link href="javascript://" class="card-header-action btn-close">
                                <i class="icon-close"></i>
                            </b-link>
                        </div>
                    </div>
                    <b-card-body v-html="preview">
                        <!-- placeholder for markdown display -->
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import libraries. */
import marked from 'marked'

/* Import (local) libraries. */
// NOTE: We use a local version of zerolib (w/ ES6 support).
import ZeroLib from '../libs/zerolib'

/**
 * Zeronet Application
 */
class ZeroApp extends ZeroLib {
    setSiteInfo(_siteInfo) {
        console.log('FULL SITE INFO', _siteInfo)

        var out = document.getElementById("out")
        out.innerHTML =
            "Page address: " + _siteInfo.address +
            "<br>- Peers: " + _siteInfo.peers +
            "<br>- Size: " + _siteInfo.settings.size +
            "<br>- Modified: " + (new Date(_siteInfo.content.modified*1000))
    }

    onOpen() {
        /* Call super. */
        super.onOpen()

        this.cmd('siteInfo', [], function (_siteInfo) {
            App.setSiteInfo(_siteInfo)
        })
    }

    onEvent(_event, _message) {
        if (_event === 'setSiteInfo') {
            this.setSiteInfo(_message.params)
        } else {
            this._log('Unknown event:', _event)
        }
    }
}

export default {
    data: () => {
        return {
            app: null,
            preview: '',
        }
    },
    methods: {
        btnAlerts () {
            this.app.cmd('wrapperNotification', ['info', 'Are you looking for this? Cause I found it!', 3000])
            this.app.cmd('wrapperNotification', ['done', 'You\'re all set!', 6000])
            this.app.cmd('wrapperNotification', ['error', 'Oops! Try again...', 9000])
        },
        btnNewPermission () {
            this.app.cmd('wrapperPermissionAdd', ['ADMIN'])
            // this.app.cmd('wrapperPermissionAdd', ['Merger:CDN'])
            // this.app.cmd('wrapperPermissionAdd', ['Merger:ZeroMe'])
        },
        btnUserInput () {
            this.app.cmd('wrapperPrompt', ['Enter your private key:', 'password'], (_input) => {
                this.app.cmd('wrapperNotification', ['done', `Nice! I see you entered [${_input}]`, 7000])
            })
        },
        btnCertSelect () {
            this.app.cmd('certSelect', { 'accepted_domains': ['kaffie.bit', 'kxoid.bit', 'nametag.bit', 'zeroid.bit'] })
        },
        btnServerInfo () {
            this.app.cmd('serverInfo', {}, (_info) => {
                console.log('Server Info', _info)
            })
        },
        btnSiteInfo () {
            this.app.cmd('siteInfo', {}, (_info) => {
                console.log('Site Info', _info)
            })
        },
        btnMergerList () {
            this.app.cmd('mergerSiteList', [true], (_list) => {
                console.log('Merger Site List', _list)
            })
        },
        btnCORSPermission () {
            this.app.cmd('corsPermission', ['1ZCDN4UGGVmhRd29DrVVW7vNsbmMvfrr3'], (_success) => {
                console.log('Connected via CORS', _success)
            })
        },
        btnChartDb () {
            this.app.cmd('chartGetPeerLocations', {}, (_results) => {
                console.log('Peer locations', _results)
            })
        },
        btnNewsfeed () {
            const query = `
                SELECT
                    post_id AS event_uri,
                    'post' AS type,
                    date_published AS date_added,
                    title AS title,
                    body AS body,
                    '?Post:' || post_id AS url
                FROM
                    post
            `

            const params = ['']

            // this.app.cmd('feedFollow', [{}], (_status) => {

            this.app.cmd('feedFollow', [{"Posts": [query, params]}], (_status) => {
                console.log('Newsfeed status', _status)
            })
        },
        btnNewsfeedList () {
            this.app.cmd('feedListFollow', {}, (_list) => {
                console.log('Newsfeed list', _list)
            })

            this.app.cmd('feedQuery', {}, (_results) => {
                console.log('Newsfeed results', _results)
            })
        },
        btnRunAs () {
            const address = "1ZCDN4UGGVmhRd29DrVVW7vNsbmMvfrr3"
            const query = "SELECT * FROM json WHERE file_name = :file_name"
            const params = {"file_name": "data.json"}

            this.app.cmd("as", [address, "siteInfo", {}], function(res) {
            // this.app.cmd("as", [address, "dbQuery", [query, params]], function(res) {
                console.log(res)
            })

            // this.app.cmd('chartGetPeerLocations', {}, (_results) => {
            //     console.log('Peer locations', _results)
            // })
        },
        btnPubkey () {
            this.app.cmd('userPublickey', {}, (_results) => {
                console.log('Public key', _results)

                const decoded = Buffer.from(_results, 'base64')
                console.log('Decoded', decoded.toString('hex'))
            })
        },
        btnEcies () {
            const options = {
                text: 'some secret message',
                // publickey: 0,
                // publickey: 'A9w1QbLfdgy4ga1MgOOOlieRN46IrrAsGBan6JWtUMgd', // BAD
                // publickey: 'AxzyNRpVzvl4NaFNbuc0lCr1Be0ZLGLuYSy99WQ5ONOD', // GOOD
                // publickey: Buffer.from('03dc3541b2df760cb881ad4c80e38e962791378e88aeb02c1816a7e895ad50c81d', 'hex').toString('base64'), // BAD
                publickey: Buffer.from('031cf2351a55cef97835a14d6ee734942af505ed192c62ee612cbdf5643938d383', 'hex').toString('base64'), // GOOD
                // publickey: Buffer.from('040e4d1a27c134d16f15131352c2002d8c141bc059a1b84ef46804cf3369f3a964fcd9826830c50ffc49a3426fb5f27d1b071fc8b394b87bd0e9f23bfa248b8171', 'hex').toString('base64'), // BITCORE
                // return_aes_key: true
            }
            console.log('OPTIONS', options)

            this.app.cmd('eciesEncrypt', options, (_results) => {
                console.log('Encrypted text', _results)
                console.log('Encrypted text (hex)', Buffer.from(_results, 'base64').toString('hex'))

                // const cypher = Buffer.from(_results[0], 'base64')
                // console.log('CYPHER', cypher.toString('hex'))

                // const pubkey = Buffer.from(_results[0].slice(16, 70), 'base64')
                // console.log('PUBKEY', pubkey.toString('hex'))

                // const cypherKey = Buffer.from(_results[1], 'base64')
                // console.log('CYPHER KEY', cypherKey.toString('hex'))

                const newOptions = {
                    // param: Buffer.from('034f9091a6ef8ed63a337d08e603e37a658d4957ad6de38b57e5c7c85618c39d6398fe587299138e68c8928ed335a62b6faffe6267c506e85d259cff36920df4375588890303ee00eeb548946c079b42283d83d86d26c6c37ebd3afc781cc798dd015b4c7a03cf49aa8af3769cd1c4ae7e', 'hex').toString('base64')
                    // param: 'uVbNWh89O6ldp2NK2T+6DALKACDO9skv2op4R6TtuNSzay7jCQh8KIZsf8i7rKF5T+odEQAg4gQz5UQs2wCOulMTkh5cwu1Lnnv8RMbeigQfFVF3CXKCiYl+jHqtHAAOGZZzqf5kvqp24HB8aCgHLKD8Fs3pxwkDg3tVqvVUXxxC/JdUlNyN4oLlp6cN7xaSnJUhxHTJ'
                    param: _results,
                    // privatekey: 0
                }

                this.app.cmd('eciesDecrypt', newOptions, (_results) => {
                    console.log('Decrypted text', _results)
                })
            })
        },
        btnUserSettings () {
            const options = {
                settings: {
                    hello: 'world',
                    cool: [
                        1, 2, 3
                    ]
                }
            }

            this.app.cmd('userSetSettings', options, (_results) => {
                console.log('User Settings', _results)

                this.app.cmd('userGetSettings', {}, (_results) => {
                    console.log('Retrieve User Settings', _results)
                })
            })
        },
        btnPlugin () {
            this.app.cmd('blockchain', [], (_results) => {
                console.log('Blockchain', _results)
                this.preview = marked(JSON.stringify(_results, null, 4))
            })
        },
        btnMisc () {
            let options = {
                sample: 'more storage data'
            }

            this.app.cmd('wrapperSetLocalStorage', [], (_err) => {
                console.log('MISC RESULTS 1', _err)
            })

            options = {

            }

            this.app.cmd('wrapperGetLocalStorage', options, (_results) => {
                console.log('MISC RESULTS 2', _results)
            })
        },
    },
    mounted: function () {
        /* Initialize new zeronet application. */
        this.app = new ZeroApp()

        /* Initialize preview area. */
        this.preview = marked(`
## Click a button to BEGIN!
## ↵
        `)
    },
}
</script>
