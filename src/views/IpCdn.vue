<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <ZeroLib />
                <JQuery />
                <Vuejs />
                <SockJsClient />
                <Ethers />
                <Marked />
                <Flags />
            </b-col>

            <b-col md="6">
                <div class="card">
                    <div class="card-header">
                        <strong>ZeroLib</strong>
                    </div>

                    <div class="card-body">
                        <p>
                            Simply the FASTEST content delivery on the planet. GUARANTEED!
                        </p>

                        <hr />

                        <b-button block variant="primary">IPFS</b-button>
                        <b-button block variant="success">Cloudflare</b-button>
                        <b-button block variant="warning">Infura</b-button>

                        <hr />

                        <b-button block variant="outline-danger">Copy to Clipboard</b-button>
                        <b-button block variant="outline-danger">View Full Source</b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import views. */
const Ethers = () => import('@/views/ipcdn/Ethers')
const Flags = () => import('@/views/ipcdn/Flags')
const JQuery = () => import('@/views/ipcdn/JQuery')
const Marked = () => import('@/views/ipcdn/Marked')
const SockJsClient = () => import('@/views/ipcdn/SockJsClient')
const Vuejs = () => import('@/views/ipcdn/Vuejs')
const ZeroLib = () => import('@/views/ipcdn/ZeroLib')

export default {
    components: {
        Ethers,
        Flags,
        JQuery,
        Marked,
        SockJsClient,
        Vuejs,
        ZeroLib,
    }
}
</script>
