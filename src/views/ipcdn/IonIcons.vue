<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>IonIcons</strong>
        </div>

        <p>
            Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>ionicons-v4.5.9-1.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">45.2k</button>
                <Links min="QmNyyeycbEr1ZuyrX9LSVZCYfekHXgUpPC6bi2uqi4tzWf/css/ionicons.min.css" />
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
