/* Import (local) libraries. */
// NOTE: We use a local version of zerolib (w/ ES6 support).
import ZeroLib from '../../libs/zerolib'

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
                return this._log('What should we do about this undefined?')
            }
        }

        /* Handle incoming event. */
        switch(evt) {
        /**
         * Peer Message
         *
         * Incoming messages, handled by PeerMessage plugin.
         */
        case 'peerReceive': {
            this._log('EVENT: peerReceive', msg)

            /* Set display object. */
            const displayConsole = document.getElementById('display-console')

            /* Format message (for display). */
            const formatted = `<code><pre class="text-white">${JSON.stringify(msg, null, 4)}</pre></code>`

            /* Update display. */
            displayConsole.innerHTML = formatted

            /* This message is valid - broadcast it to other peers. */
            this.cmd('peerValid', [msg.params.hash])

            /* Get message itself. */
            let text = msg.params.message

            /* Get identity address. */
            let identityAddress = msg.params.signed_by

            /* Log event. */
            this._log(identityAddress + ':', text)

            break
        }

        /**
         * Default (Unknown Event)
         */
        default:
            // FIXME Add notification for Clearnet users to d/l client.
            this._log('Unknown event:', evt)
        }
    }
}

export default ZeroApp
