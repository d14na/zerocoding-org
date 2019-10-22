<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="5">
                <b-card v-for="workshop of workshops">
                    <b-media>
                        <template v-slot:aside>
                            <b-img class="cover-img" :src="workshop.coverImg" rounded alt="Workshop"></b-img>
                        </template>

                        <h5 class="mt-0">{{workshop.title}}</h5>

                        <p class="workshop">
                            {{workshop.body}}
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="7">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>Workshop Preview</strong>
                        </div>

                        <div class="card-body">
                            <p class="mb-3">
                                You don't have to be a hacker to manage your digital life.
                                Our Workshop makes it easy for you to look an expert with a host of user-friendly tools and services.
                            </p>

                            <hr />

                            <b-button block variant="primary" @click="openHome">Open (Local) File Manger</b-button>
                            <b-button block variant="outline-warning">Connect To Remove Server</b-button>

                            <!-- <hr /> -->

                            <!-- <b-button block variant="outline-danger">Browse Database</b-button> -->
                            <!-- <b-button block variant="outline-danger">Edit Database</b-button> -->
                        </div>

                        <!-- placeholder for markdown display -->
                        <!-- <b-alert show id="display-console">
                            {{preview}}
                        </b-alert> -->

                        <b-img id="demo-console" src="https://i.imgur.com/yIf0577.gif" rounded alt="Workshop"></b-img>
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
            preview: '',
            tabIndex: 0,
            workshops: [{
                title: 'File Manager',
                body: `Manage all of your decentralized files, including: users.json, sites.json`,
                coverImg: 'https://i.imgur.com/gL11cX0.jpg',
            }, {
                title: 'Database Manager',
                body: `Manage your decentralized databases from a simple interface designed to make you an expert dba in no time.`,
                coverImg: 'https://i.imgur.com/2du2fL1.png',
            }, {
                title: '(Local) Systems Manager',
                body: `Manage your local system using this convenient toolkit.`,
                coverImg: 'https://i.imgur.com/VKQMkdl.png',
            }, {
                title: '(Remote) Systems Manager',
                body: `Manage all of your remote systems using a secure shell.`,
                coverImg: 'https://i.imgur.com/J93gHNo.png',
            }]
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
.win-summary {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-summary {
    float: right;
    width: 45vw;

    margin-top: 125px;
    margin-right: 25px;
}

#display-console {
    height: 130px;
    margin: 20px;

    font-size: 0.8em;
    background-color: rgba(30, 30, 30, 0.8);
}
#demo-console {
    height: 130px;
    margin: 20px;

    object-fit: cover;
    object-position: center;
}

.cover-img {
    width: 125px;
    height: 125px;

    object-fit: cover;
    object-position: center;
}
</style>
