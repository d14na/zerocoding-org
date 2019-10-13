<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="12" lg="8">
                <b-row>
                    <b-col sm="6" v-for="project of getProjects()" v-bind:key="project.id">
                        <b-card
                            :title="project.title"
                            :img-src="getCover(project.coverImg)"
                            img-alt="Project Cover"
                            img-top
                            class="mb-3"
                        >
                            <b-card-text>
                                {{project.coverDesc}}
                            </b-card-text>

                            <b-button href="javascript://" variant="primary">Open Project</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>Project Summary</strong>
                        </div>

                        <div class="card-body">
                            <b-button block variant="outline-success" class="mb-3" @click="openHome">Open Project Details</b-button>

                            <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>

                            <b-button block variant="secondary">Secondary</b-button>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            projects: [{
                id: 'zeronet-explorer',
                title: 'Zeronet Explorer',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
            }, {
                id: 'supeer',
                title: 'Supeer',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
            }, {
                id: 'zero-filters',
                title: 'ZeroFilters',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
            }, {
                id: 'zeronet-exchange',
                title: '0net.Exchange',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
            }, {
                id: 'ipzn',
                title: 'IPZN',
                coverDesc: `IPZN is a platform aims to grow the decentralized web through an incentivized decentralized search engine, as a framework provides unified functionalities extended by plugins for sites, based on IPFS and consensus protocols, and also an out-of-box client similar to ZeroNet for users.`,
                coverImg: 'https://i.imgur.com/Jm8Ejzs.png',
                url: 'https://gitlab.com/ipzn/ipzn/wikis/home',
            }, {
                id: 'framework-js',
                title: 'Framework.js',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
                url: 'http://127.0.0.1:43110/fmwk.bit/',
            }, {
                id: 'horizon-search-engine',
                title: 'Horizon Search Engine',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                coverImg: null,
                url: null,
            }]
        }
    },
    methods: {
        getProjects () {
            /* Randomize the projects. */
            this.shuffle(this.projects)

            /* Return projects. */
            return this.projects
        },
        getCover (_url) {
            /* Set constants. */
            const MAX_IMG_ID = 300

            /* Calculate random integer. */
            const rndInt = Math.floor(Math.random() * MAX_IMG_ID) + 700

            if (_url) {
                return _url
            } else {
                return `https://picsum.photos/id/${rndInt}/600/300`
            }
        },
        openHome () {
            /* Open new window (via Zeronet). */
            this.app.cmd(
                'wrapperOpenWindow',
                ['http://127.0.0.1:43110/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/',
                '_blank']
            )

            // FIXME Detect Zeronet client and save to GLOBAL STORE
            /* Open new window (via Clearnet proxy). */
            // window.open('https://0net.io/1CeEXxqemr5CcVQAAmrW13QYwZV4kAkQz6/')
        },

        /**
         * (Durstenfeld) Shuffle
         */
        shuffle (_array) {
            for (let i = _array.length - 1; i > 0; i--) {
                /* Generate random number. */
                const j = Math.floor(Math.random() * (i + 1));

                // FIXME The NEXT line DOES NOT WORK WITHOUT the semi-colon
                //       inserted above. Can we find out WHY??

                /* Not sure about this, but it looks pretty cool. */
                [_array[i], _array[j]] = [_array[j], _array[i]]
            }
        }
    },
}
</script>

<style scoped>
.win-summary {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-summary {
    float: right;
    width: 25vw;

    margin-top: 125px;
    margin-right: 25px;
}
</style>
