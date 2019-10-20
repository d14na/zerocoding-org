<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>Flag Icon CSS</strong>
        </div>

        <p>
            A collection of all country flags in SVG — plus the CSS for easier integration.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>flags-v3.4.3.min.css</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">33.7k</button>
                <Links min="QmRsHiURBYvnRmKnp3gEsoz8ZR1eGo8ckmjRzx1JkmoDLi/css/flag-icon.min.css" />
            </b-list-group-item>
            <b-list-group-item>
                <span>Example Usage</span>
                <div class="text-center">
                    <code>&lt;span class="flag-icon flag-icon-us"&gt;&lt;/span&gt;</code>
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <h4>4 x 3</h4>
                <a :href="flagImg(flag)" v-for="flag of flags" v-bind:key="flag" target="_blank">
                <img class="flag" :src="flagImg(flag)" /></a>
            </b-list-group-item>
            <b-list-group-item>
                <h4>1 x 1</h4>
                <a :href="flagImg(flag)" v-for="flag of flags" v-bind:key="flag" target="_blank">
                <img class="square-flag" :src="squareFlagImg(flag)" /></a>
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
                'ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz',
                'la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly',
                'ma','mc','md','me','mf','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz',
                'na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz',
                'om',
                'pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py',
                'qa',
                're','ro','rs','ru','rw',
                'sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz',
                'tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','tz',
                'ua','ug','um','un','us','uy','uz',
                'va','vc','ve','vg','vi','vn','vu',
                'wf','ws',
                'ye','yt',
                'za','zm','zw',
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
