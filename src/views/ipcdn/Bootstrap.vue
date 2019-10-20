<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Bootstrap</strong>
        </div>

        <p>
            Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>bootstrap-v4.3.1.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">155.8k</button>
                <Links
                    min="QmZqVNydZxRrioxHwMxCa5CQs7yRLPqnKUexuyrTkJhBwa"
                    map="QmYzNEGrbF4KnihF36paGphcmFmNJiF2hum6Yv8nYFi5FA"
                    full="QmefHBbEVazYGac8TkZfpNtVxRrQvgBpfwLvKenABGMeyv" />
            </b-list-group-item>
            <b-list-group-item>
                <strong>bootstrap-v4.3.1.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">58.1k</button>
                <Links
                    min="QmZqVNydZxRrioxHwMxCa5CQs7yRLPqnKUexuyrTkJhBwa"
                    map="QmYzNEGrbF4KnihF36paGphcmFmNJiF2hum6Yv8nYFi5FA"
                    full="QmefHBbEVazYGac8TkZfpNtVxRrQvgBpfwLvKenABGMeyv" />
            </b-list-group-item>
            <b-list-group-item>
                <strong>bootstrap.bundle-v4.3.1.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">78.6k</button>
                <Links
                    min="QmdLn3ahnMQmWZSNcbx6e1Y2awhy9PmeYnyjJj8UaWX4Dp"
                    map="QmPQARizhynCWnuyQVn75cRFMZ1CbPak8USrDEfWypw97S"
                    full="QmScSYYbGxcHfPX26Q2XF1w4eEQdeZfJpUzaMaH4QEqFRN" />
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
