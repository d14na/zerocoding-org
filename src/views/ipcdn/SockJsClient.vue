<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>SockJS (Client)</strong>
        </div>

        <p>
            SockJS is a browser JavaScript library that provides a WebSocket-like object.
            SockJS gives you a coherent, cross-browser, Javascript API which creates a low latency, full duplex, cross-domain communication channel between the browser and the web server.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>sockjs-client-v1.4.0.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">62.8k</button>
                <Links min="QmepNtNvxdfxfftPXDg8SrQz7DBWLHgSFpN4c1MEzSf55e" />
            </b-list-group-item>
            <b-list-group-item>
                <strong>sockjs-client-v1.1.4.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">60.6k</button>
                <Links min="QmR5GdHeantgSV6nqfMjjEvPnbpcU4qBznhfaN21iRBdtJ" />
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
/* Import components. */
const Links = () => import('./Links')

export default {
    components: {
        Links
    }
}
</script>
