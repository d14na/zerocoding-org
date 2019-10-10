<template>
    <div class="float-right">
        <a :href="ipfs" target="_blank" v-b-tooltip.hover title="ipfs.io"><i class="fa fa-external-link ml-2 text-primary"></i></a>
        <a :href="cloudflare" target="_blank" v-b-tooltip.hover title="cloudflare-ipfs.com"><i class="fa fa-external-link ml-2 text-success"></i></a>
        <a :href="infura" target="_blank" v-b-tooltip.hover title="ipfs.infura.io"><i class="fa fa-external-link ml-2 text-warning"></i></a>
        <span class="ml-2 text-secondary">|</span>
        <a href="javascript://" @click="copy"><i class="fa fa-copy ml-2 text-danger" v-b-tooltip.hover title="Copy HTML Tag to Clipboard"></i></a>
        <a v-if="fullSource" :href="fullSource" target="_blank" v-b-tooltip.hover title="View the Uncompressed Source"><i class="fa fa-code ml-2 text-danger"></i></a>
        <a v-if="minMap" :href="minMap" target="_blank" v-b-tooltip.hover title="View the Minified Map"><i class="fa fa-map-o ml-2 text-danger"></i></a>
    </div>
</template>

<script>
export default {
    props: ['min', 'full', 'map'],
    computed: {
        cloudflare () {
            if (this.min) {
                return `https://cloudflare-ipfs.com/ipfs/${this.min}`
            } else {
                return null
            }
        },
        infura () {
            if (this.min) {
                return `https://ipfs.infura.io/ipfs/${this.min}`
            } else {
                return null
            }
        },
        ipfs () {
            if (this.min) {
                return `https://ipfs.io/ipfs/${this.min}`
            } else {
                return null
            }
        },
        fullSource () {
            if (this.full) {
                return `https://ipfs.0net.io/ipfs/${this.full}`
            } else {
                return null
            }
        },
        minMap () {
            if (this.map) {
                return `https://ipfs.0net.io/ipfs/${this.map}`
            } else {
                return null
            }
        },
    },
    methods: {
        copy () {
            alert('copying..')
        }
    }
}
</script>
