<template>
    <div class="animated fadeIn">
        <!-- <b-card no-body> -->
            <b-tabs v-model="tabIndex" small card>
                <b-tab>
                    <template v-slot:title>
                        <div class="d-none d-sm-inline-block tab-title">
                            1 ➤ <strong class="text-warning">Internet vs Zeronet?</strong>
                        </div>
                        <div class="d-sm-none">
                            <strong class="text-warning">Zeronet?</strong>
                        </div>
                    </template>

                    <strong>The Zeronet? .. Is The Internet .. Built Today!</strong>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <div class="d-none d-sm-inline-block">
                            2 ➤ Edit profile
                        </div>
                        <div class="d-sm-none">
                            Edit
                        </div>
                    </template>

                    I'm the second tab
                    <b-card>I'm the card in tab</b-card>
                </b-tab>
                <b-tab disabled>
                    <template v-slot:title>
                        <div class="d-none d-sm-inline-block">
                            3 ➤ Premium Plan
                        </div>
                        <div class="d-sm-none">
                            Premium
                        </div>
                    </template>

                    Sibzamini!
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <div class="d-none d-sm-inline-block">
                            4 ➤ Info
                        </div>
                        <div class="d-sm-none">
                            Info
                        </div>
                    </template>

                    I'm the last tab
                </b-tab>
            </b-tabs>
        <!-- </b-card> -->

        <!-- Control buttons-->
        <div class="text-center">
            <b-button-group class="mt-2">
                <b-button @click="tabIndex--">Previous</b-button>
                <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>

            <div class="text-muted">Current Tab: {{ tabIndex }}</div>
        </div>

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
            tabIndex: 0
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
.tab-title {
    font-size: 1.2em;
}
</style>
