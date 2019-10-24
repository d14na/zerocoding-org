/* Initialize hub address. */
const HUB_ADDRESS = '1LoBBY2nHUfRBdawmMLhHGRnAGVWTxWBjj'

/**
 * Request Permission
 */
const _requestPermission = function () {
    return new Promise(async (resolve, reject) => {
        /* Request permission for hub. */
        const success = await this.app.cmd('wrapperPermissionAdd', ['Merger:ZeroCoding-Chans'])
            .catch(error => {
                return reject(error)
            })

        // console.log('SUCCESS', success)

        /* Validate permission. */
        if (success) {
            /* Add new merger site. */
            this.app.cmd('mergerSiteAdd', [HUB_ADDRESS])

            resolve(success)
        } else {
            return reject(success)
        }
    })
}

/**
 * Run (Remote) Hub Test
 */
const _runHubTest = async function () {
    /**
     * Send Message
     */
    const _sendMessage = (_text) => {
        /* Build package. */
        const pkg = {
            message: _text,
            privatekey: false
        }

        // console.log('SENDING VIA HUB', pkg)

        /* Send message to those who have downloaded hub. */
        this.app.cmd('as', [HUB_ADDRESS, 'peerBroadcast', pkg])
    }

    /* Build package. */
    const pkg = {
        text: 'This is my FIRST package!',
        // message: 'Just a quick, hi there!',
        privatekey: false
    }

    // FIXME: Test for permission, request if necessary.
    if (pkg !== {}) {
        await _requestPermission.bind(this)()
    }

    // let text = 'Just a quick, hi there!'
    return _sendMessage(pkg)
}

/**
 * Run Tests
 */
const runTests = async function () {
    /* Request server info. */
    const serverInfo = await this.app.cmd('serverInfo')

    // TODO Display in screen terminal.
    console.log('RUNTEST SERVER INFO', serverInfo)

    /* Handle Background Processing. */
    if (this.activePluginId === 'background-processing') {
        return this.app.cmd('wrapperNotification', [
            'error',
            'Sorry, that TEST is currently unavailable.',
            7000
        ])
    }

    /* Handle Blockchain. */
    if (this.activePluginId === 'blockchain') {
        this.app.cmd('blockchainInfo', [], (results) => {
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
        /* Run HUB test. */
        return _runHubTest.bind(this)()
    }

    /* Handle Superuser. */
    if (this.activePluginId === 'superuser') {
        const results = {
            sudo: await this.app.cmd('sudo'),
            site: await this.app.cmd('sudoGetSite'),
            user: await this.app.cmd('sudoGetUser'),
        }

        /* Set display object. */
        const displayConsole = document.getElementById('display-console')

        /* Format message (for display). */
        const formatted = `<code><pre class="text-white">${JSON.stringify(results, null, 4)}</pre></code>`

        /* Update display. */
        displayConsole.innerHTML = formatted
    }
}

export default runTests
