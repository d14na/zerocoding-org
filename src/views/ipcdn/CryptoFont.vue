<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>CryptoFont</strong>
        </div>

        <p>
            A sleek webfont for your favourite cryptocurrencies. Featuring 88 icons.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>cryptofont-v0.1.1.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">3.7k</button>
                <Links
                    min="QmNe6EiYuccguVULEwMQRJGtR7JRpeHRHjyamYzBnD72ZE/css/cryptofont.min.css"
                    full="QmNe6EiYuccguVULEwMQRJGtR7JRpeHRHjyamYzBnD72ZE/css/cryptofont.css" />
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
