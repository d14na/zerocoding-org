<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Ethers</strong>
        </div>

        <p>
            The ethers.js library is a compact and complete JavaScript library for Ethereum.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>ethers-v4.0.7.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">291.2k</button>
                <Links min="QmNyYn3VJiwHHyDBaYtkcDua3avVuKfaVBy66UxwhbZLba" />
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
