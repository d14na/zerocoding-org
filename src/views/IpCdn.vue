<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <b-card
                    header-tag="header"
                    footer-tag="footer">
                    <div slot="header">
                        <i class="fa fa-code mr-2"></i>
                        <strong>Zeronet Development Library</strong>
                    </div>

                    <p>
                        A comprehensive development toolkit for building decentralized apps on Zeronet and others (eg. IPFS).
                    </p>

                    <b-list-group>
                        <b-list-group-item>
                            zerolib.js
                            <a href="https://cloudflare-ipfs.com/ipfs/QmQckzYgehFUPFdJvhD3sk9UiTRk4ibCUa1aEGqFSd6iin" target="_blank"><i class="fa fa-external-link ml-2"></i></a>
                            <a href="javascript://"><i class="fa fa-copy ml-2"></i></a>
                        </b-list-group-item>
                        <b-list-group-item>
                            zerolib.min.js
                            <a href="https://cloudflare-ipfs.com/ipfs/QmZphxLbShLsreHcncgxcewf2hhLfETtQCuYf89PdHFQVf" target="_blank"><i class="fa fa-external-link ml-2"></i></a>
                            <a href="javascript://"><i class="fa fa-copy ml-2"></i></a>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>

                <JQuery />
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
const JQuery = () => import('@/views/ipcdn/JQuery')

export default {
    name: 'typography',
    components: {
        JQuery
    }
}
</script>
