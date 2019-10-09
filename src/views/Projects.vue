<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <b-card
                    header-tag="header"
                    footer-tag="footer">
                    <div slot="header">
                        Projects
                    </div>
                    <b-list-group>
                        <b-list-group-item><a href="https://cloudflare-ipfs.com/ipfs/QmQckzYgehFUPFdJvhD3sk9UiTRk4ibCUa1aEGqFSd6iin">Full Source</a></b-list-group-item>
                        <b-list-group-item><a href="https://cloudflare-ipfs.com/ipfs/QmZphxLbShLsreHcncgxcewf2hhLfETtQCuYf89PdHFQVf">Full Source (minimized)</a></b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>

            <b-col md="6">
                <div class="card">
                    <div class="card-header">
                        Projects
                    </div>

                    <div class="card-body">
                        <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>

                        <b-button block variant="primary">Primary</b-button>
                        <b-button block variant="secondary">Secondary</b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'typography'
}
</script>
