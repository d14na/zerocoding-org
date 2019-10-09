<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Marked</strong>
        </div>

        <p>
            A low-level markdown compiler for parsing markdown without caching or blocking for long periods of time.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>marked.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">24.1k</button>
                <Links min="QmSh8FbbUEiDYNFbeRtGfdxa5r853iYRhWsZvWRP8fXwdX" />
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
