<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>ZeroLib</strong>
        </div>

        <p>
            A complete toolkit for BUIDLing decentralized applications for the Zeronet and beyond.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>zerolib-v19.9.30.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">2.7k</button>
                <Links
                    min="QmZphxLbShLsreHcncgxcewf2hhLfETtQCuYf89PdHFQVf"
                    full="QmQckzYgehFUPFdJvhD3sk9UiTRk4ibCUa1aEGqFSd6iin" />
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
