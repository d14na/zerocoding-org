<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Vue.js</strong>
        </div>

        <p>
            Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>vuejs-v2.5.17.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">86.5k</button>
                <Links min="QmYwExkVbo2tQyUmMyvXjf31N58y2ys57ZpSG7Xw6rTZqt" />
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
