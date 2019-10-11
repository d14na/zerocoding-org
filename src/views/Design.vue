<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="4">
                <b-card>
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="FAQ"></b-img>
                        </template>

                        <h5 class="mt-0">Icon Gallery</h5>

                        <p class="faq">
                            Easily choose from thousands of icons from 6 awesome FREE libraries.
                        </p>
                    </b-media>
                </b-card>

                <b-card>
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="FAQ"></b-img>
                        </template>

                        <h5 class="mt-0">Photo Gallery</h5>

                        <p class="faq">
                            Easily choose from thousands of royalty-free and public domain photos to use in your project.
                        </p>
                    </b-media>
                </b-card>

                <b-card>
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="FAQ"></b-img>
                        </template>

                        <h5 class="mt-0">Photo Editor</h5>

                        <p class="faq">
                            Design an awesome logo for your new project.
                        </p>
                    </b-media>
                </b-card>

                <b-card>
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="FAQ"></b-img>
                        </template>

                        <h5 class="mt-0">Video Producer</h5>

                        <p class="faq">
                            Design an awesome logo for your new project.
                        </p>
                    </b-media>
                </b-card>

                <b-card>
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="FAQ"></b-img>
                        </template>

                        <h5 class="mt-0">Logo Creator</h5>

                        <p class="faq">
                            Design an awesome logo for your new project.
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="8">
                <div class="win-preview fixed-top">
                    <div class="card d-none d-lg-flex card-preview">
                        <div class="card-header">
                            <b-row>
                                <b-col><strong>Photo Editor</strong></b-col>
                                <b-col class="text-right"><small>[ source: <strong class="text-primary">picsum.photos/800/600</strong> ]</small></b-col>
                            </b-row>
                        </div>

                        <div class="card-body">
                            <b-img fluid src="https://picsum.photos/800/600" class="picsum" alt="FAQ Preview"></b-img>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>

        <!-- Under Construction -->
        <b-modal id="modal-under-construction" centered no-close-on-esc no-close-on-backdrop hide-header-close>
            <template v-slot:modal-title>
                <b-img src="https://ipfs.io/ipfs/QmPnhBwSfQksYsB1wCsReVcDK2PnpSzM7TMqfboRrbCZFX" fluid rounded alt="Under Construction (Fancy)"></b-img>
            </template>

            <UnderConstruction />

            <template v-slot:modal-footer>
                <button class="btn btn-sm btn-outline-danger float-left" @click="closeNotice">↵ Return</button>

                <small class="text-secondary d-none d-sm-inline-flex"><strong>14 days 6 hours 28 minutes 4 seconds</strong></small>
                <small class="text-secondary d-sm-none"><strong>14 days 6 hrs 28 mins 4 secs</strong></small>
            </template>
        </b-modal>
    </div>
</template>

<script>
/* Import views. */
const UnderConstruction = () => import('@/views/UnderConstruction')

export default {
    components: {
        UnderConstruction,
    },
    data: () => {
        return {
            tabIndex: 0,
        }
    },
    methods: {
        closeNotice () {
            /* Go back in history ONE stop. */
            this.$router.go(-1)
        },
    },
    mounted: function () {
        /* Display the un-dismissable modal. */
        this.$bvModal.show('modal-under-construction')
    },
}
</script>

<style scoped>
/* TEMP For dev only. */
.picsum {
    width: 100vh;
    height: 380px;
}

.win-preview {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-preview {
    float: right;
    width: 53vw;
    height: 470px;

    margin-top: 125px;
    margin-right: 25px;
}
</style>
