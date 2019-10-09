<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <ZeroLib />
                <JQuery />
                <Vuejs />
                <SockJsClient />
                <Ethers />
                <Flags />
            </b-col>

            <b-col md="6">
                <div class="card">
                    <div class="card-header">
                        InterPlanetary Content Delivery Network
                    </div>

                    <div class="card-body">
                        <p>
                            Simply the FASTEST content delivery on the planet. GUARANTEED!
                        </p>

                        <b-button block variant="primary">Getting Started</b-button>
                        <b-button block variant="secondary">Learn More..</b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
const Ethers = () => import('@/views/ipcdn/Ethers')
const Flags = () => import('@/views/ipcdn/Flags')
const JQuery = () => import('@/views/ipcdn/JQuery')
const SockJsClient = () => import('@/views/ipcdn/SockJsClient')
const Vuejs = () => import('@/views/ipcdn/Vuejs')
const ZeroLib = () => import('@/views/ipcdn/ZeroLib')

export default {
    components: {
        Ethers,
        Flags,
        JQuery,
        SockJsClient,
        Vuejs,
        ZeroLib,
    }
}
</script>
