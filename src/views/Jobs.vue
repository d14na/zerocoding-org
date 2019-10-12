<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="7">
                <b-card v-for="job of jobs">
                    <b-media>
                        <template v-slot:aside>
                            <b-img :src="job.coverImg" rounded width="64" height="64" alt="Bounty Cover Image"></b-img>
                        </template>

                        <h5 class="mt-0">{{job.title}}</h5>

                        <p class="job">
                            {{job.coverDesc}}
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="5">
                <div class="win-preview fixed-top">
                    <div class="card d-none d-lg-flex card-preview">
                        <div class="card-header">
                            <strong>Ambitious, Talented Blockchain Developer</strong>
                        </div>

                        <div class="card-body">
                            <b-img thumbnail fluid src="https://i.imgur.com/GOHGhmI.png" class="mb-3" alt="Bounty Preview"></b-img>

                            <h4>Description</h4>

                            <p>
                                We are looking for a lead blockchain full stack engineer, who is passionate about building innovative solutions for a groundbreaking new marketplace. You should be knowledgeable of the existing blockchain stack and visionary in your approach to leveraging its components.
                            </p>

                            <h4>Requirements</h4>

                            <ol>
                                <li>Experience working with data architecture, networking, system scalability and security
                                <li>Experience in Open source, APIs, interoperability, platforms</li>
                                <li>Working familiarity with blockchain technology and the architecture of decentralized networks</li>
                                <li>Knowledgeable about Ethereum, Solidity smart-contracts, the Ethereum Virtual Machine, LLL, and IPFS.</li></li>
                            </ol>

                            <h4>Competitive Salary and/or Equity</h4>

                            <p>
                                Forge new relationships and connections with global leaders in the blockchain industry You’ll learn more than you thought was possible; our team is obsessed with personal and professional growth.
                            </p>
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
            jobs: [
                {
                    title: 'Ambitious, Talented Blockchain Developer',
                    coverDesc: `We are looking for a lead blockchain full stack engineer, who is passionate about building innovative solutions for a groundbreaking new marketplace. You should be knowledgeable of the existing blockchain stack and visionary in your approach to leveraging its components.`,
                    coverImg: 'https://i.imgur.com/GOHGhmI.png',
                }, {
                    title: 'Sales Development Representative',
                    coverDesc: `We are looking for a motivated, entrepreneurial self-starter with an appetite & passion for sales. Your job will consist of outbound outreach to potential clients and identifying the needs of each company. Sourcing, vetting, selling and closing will make up the large majority of the role.`,
                    coverImg: 'https://i.imgur.com/9fnXAp3.png',
                }, {
                    title: 'Ambitions Crypto Content Researcher',
                    coverDesc: `We’re looking for a technical writer eager to join our team to bring clarity and transparency to cryptocurrency space. The ideal candidate must have the intellectual curiosity and a desire to learn everything cryptocurrency as well as the technical know-how to write crypto-related research reports from scratch.`,
                    coverImg: 'https://i.imgur.com/6Zekykf.png',
                }, {
                    title: 'PR Coordinator',
                    coverDesc: `We are looking for a motivated and autonomous PR specialist to join our fast growing team. At MLG Blockchain Consulting we value ownership and initiative-taking, therefore we are looking for someone that can take on a project and run with it from beginning to end.`,
                    coverImg: 'https://i.imgur.com/WuZL5Va.png',
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

.job {
    display: block;
    max-height: 65px;
    overflow: auto;
}
</style>
