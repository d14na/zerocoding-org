<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Font Awesome</strong>
        </div>

        <p>
            Font Awesome is a font and icon toolkit based on CSS and LESS.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>fontawesome-v5.11.2.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">55.4k</button>
                <Links
                    min="QmUudNAbiFPTVG9oeA531ZJWasQ3eeKiiqoFDU4o58ZeAW/css/fontawesome.min.css"
                    full="QmUudNAbiFPTVG9oeA531ZJWasQ3eeKiiqoFDU4o58ZeAW/css/fontawesome.css" />
            </b-list-group-item>
            <b-list-group-item>
                <strong>fontawesome.all-v5.11.2.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">56.8k</button>
                <Links
                    min="QmUudNAbiFPTVG9oeA531ZJWasQ3eeKiiqoFDU4o58ZeAW/css/all.min.css"
                    full="QmUudNAbiFPTVG9oeA531ZJWasQ3eeKiiqoFDU4o58ZeAW/css/all.css" />
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
