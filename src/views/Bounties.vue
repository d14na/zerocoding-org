<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="7">
                <b-card v-for="bounty of bounties">
                    <b-media>
                        <template v-slot:aside>
                            <b-img :src="bounty.coverImg" rounded width="64" height="64" alt="Bounty Cover Image"></b-img>
                        </template>

                        <h5 class="mt-0">{{bounty.title}}</h5>

                        <p class="bounty">
                            {{bounty.coverDesc}}
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="5">
                <div class="win-preview fixed-top">
                    <div class="card d-none d-lg-flex card-preview">
                        <div class="card-header">
                            <strong>Attend a Zeronet Meetup + Tweet about it</strong>
                        </div>

                        <div class="card-body">
                            <b-img thumbnail fluid src="https://i.imgur.com/azXbC7q.png" class="mb-3" alt="Bounty Preview"></b-img>

                            <h4>Description</h4>

                            <p>
                                This one is for listening to and tweeting about an eligible talk by someone from our team!
                            </p>

                            <h4>Requirements</h4>

                            <ol>
                                <li>Attend a talk by someone from Zeronet <em>(see dates and times below)</em></li>
                                <li>Tweet something about it live or directly after. Honest feedback, excitement, your favorite insight, etc.</li>
                            </ol>

                            <h4>Definition of Done</h4>

                            <p>
                                What should bounty fulfillers submit as proof that they have completed the bounty? What do fulfillers need to include in a submission in order for it to be accepted?
                            </p>

                            <ul>
                                <li>Link to the tweet</li>
                                <li>Tweet must prove you were there</li>
                            </ul>
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
            bounties: [
                {
                    title: 'Attend a Zeronet Meetup + Tweet about it',
                    coverDesc: `This one is for listening to and tweeting about an eligible talk by someone from our team!`,
                    coverImg: 'https://i.imgur.com/azXbC7q.png',
                }, {
                    title: 'Write a haiku about privacy',
                    coverDesc: `Status builds tools and infrastructure for secure and private communication. Privacy is a fundamental human right that is being taken away via centralized third parties.
                    Our Mission
                    Status strives to be a secure communication tool that upholds human rights. We enable community money, community law and through privacy, preserve culture.

                    If you feel the same way we do, let us know. Share a haiku about privacy and what it means to you.`,
                    coverImg: 'https://i.imgur.com/xMKxvVw.png',
                }, {
                    title: 'Write 5 posts about Zeronet on P0rtal',
                    coverDesc: `It is important that your posts has something to do with the Zeronet project and/or community.`,
                    coverImg: 'https://i.imgur.com/RbnmAh4.png',
                }, {
                    title: 'Create a video walk-through for Zeronet n00bs',
                    coverDesc: `The video should be at least 3 minutes in length, not longer than 5 minutes.`,
                    coverImg: 'https://i.imgur.com/8MWZOiz.png',
                }
            ]
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
.win-preview {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-preview {
    float: right;
    width: 30vw;

    margin-top: 125px;
    margin-right: 25px;
}

.bounty {
    display: block;
    max-height: 65px;
    overflow: auto;
}
</style>
