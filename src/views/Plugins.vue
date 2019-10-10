<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="12" lg="8">
                <b-row>
                    <b-col sm="6" v-for="plugin of plugins" v-bind:key="plugin.id">
                        <b-card
                            :title="plugin.title"
                            :img-src="getCover()"
                            img-alt="Plugin Cover"
                            img-top
                            class="mb-3"
                        >
                            <b-card-text>
                                {{plugin.coverDesc}}
                            </b-card-text>

                            <b-button href="javascript://" variant="primary">Open Plugin</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>Plugin Summary</strong>
                        </div>

                        <div class="card-body">
                            <b-button block variant="outline-success" class="mb-3">Open Plugin Details</b-button>

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
            plugins: [{
                id: 'plugin-1',
                title: 'Plugin #1',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`
            }, {
                id: 'plugin-2',
                title: 'Plugin #2',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`
            }, {
                id: 'plugin-3',
                title: 'Plugin #3',
                coverDesc: `Some quick example text to build on the card title and make up the bulk of the card's content.`
            }]
        }
    },
    methods: {
        getCover () {
            /* Set constants. */
            const MAX_IMG_ID = 300

            /* Calculate random integer. */
            const rndInt = Math.floor(Math.random() * MAX_IMG_ID) + 700

            return `https://picsum.photos/id/${rndInt}/600/300`
        },
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
