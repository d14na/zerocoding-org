<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <ZeroLib />
                <JQuery />
                <Vuejs />
                <Bootstrap />
                <FontAwesome />
                <IonIcons />
                <CryptoFont />
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
                            ZeroLib is a comprehensive library, designed to utilize the best features of each of the respective networks that it supports.
                        </p>

                        <hr />

                        <b-row>
                            <b-col><b-button block variant="primary" class="">IPFS</b-button></b-col>
                            <b-col><b-button block variant="success">Cloudflare</b-button></b-col>
                            <b-col><b-button block variant="warning">Infura</b-button></b-col>
                        </b-row>

                        <hr />

                        <b-row>
                            <b-col><b-button block variant="outline-danger">Copy to Clipboard</b-button></b-col>
                            <b-col><b-button block variant="outline-info">View Full Source</b-button></b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import views. */
const Bootstrap = () => import('@/views/ipcdn/Bootstrap')
const CryptoFont = () => import('@/views/ipcdn/CryptoFont')
const Ethers = () => import('@/views/ipcdn/Ethers')
const Flags = () => import('@/views/ipcdn/Flags')
const FontAwesome = () => import('@/views/ipcdn/FontAwesome')
const IonIcons = () => import('@/views/ipcdn/IonIcons')
const JQuery = () => import('@/views/ipcdn/JQuery')
const Marked = () => import('@/views/ipcdn/Marked')
const SockJsClient = () => import('@/views/ipcdn/SockJsClient')
const Vuejs = () => import('@/views/ipcdn/Vuejs')
const ZeroLib = () => import('@/views/ipcdn/ZeroLib')

export default {
    components: {
        Bootstrap,
        CryptoFont,
        Ethers,
        Flags,
        FontAwesome,
        IonIcons,
        JQuery,
        Marked,
        SockJsClient,
        Vuejs,
        ZeroLib,
    }
}
</script>
