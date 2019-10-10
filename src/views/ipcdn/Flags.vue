<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Flags</strong>
        </div>

        <p>
            SockJS is a browser JavaScript library that provides a WebSocket-like object.
            SockJS gives you a coherent, cross-browser, Javascript API which creates a low latency, full duplex, cross-domain communication channel between the browser and the web server.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>4 x 3</strong>
                <img v-for="flag of flags" v-bind:key="flag" class="flag" :src="flagImg(flag)" />
            </b-list-group-item>
            <b-list-group-item>
                <strong>1 x 1</strong>
                <img v-for="flag of flags" v-bind:key="flag" class="square-flag" :src="squareFlagImg(flag)" />
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
    },
    data: () => {
        return {
            flags: [
                'ad','ae','af','ag','ai','al','am','ao','aq','ar','as','at','au','aw','ax','az',
                'ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz',
                'ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz',
                'de','dj','dk','dm','do','dz',
                'ec','ee','eg','eh','er','es-ct','es','et','eu',
                'fi','fj','fk','fm','fo','fr',
                'ga','gb-eng','gb-nir','gb-sct','gb-wls','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy',
                'hk','hm','hn','hr','ht','hu',
                'id','ie','il','im','in','io','iq','ir','is','it',
                'je','jm','jo','jp',
                'us',
            ]
        }
    },
    methods: {
        flagImg (_countryId) {
            return `https://ipfs.io/ipfs/QmTq1STANGjUk9sbyPd6SHAAK1b65KT7i4vmYvq4Lp1of8/${_countryId}.svg`
        },
        squareFlagImg (_countryId) {
            return `https://ipfs.io/ipfs/QmQuMaj2UDy9BDsqLRGbJpfYSriSkbsadL5vPWqHUxGJT6/${_countryId}.svg`
        },
    },
}
</script>

<style scoped>
.flag {
    width: 16px;
    height: 12px;

    margin-left: 5px;
}
.square-flag {
    width: 12px;
    height: 12px;

    margin-left: 9px;
}
</style>
