<template>
    <b-card no-body class="mb-0">
        <b-tabs justified card>
            <b-tab active>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Status &amp; Log</strong>
                    <strong class="d-sm-none">Status</strong>
                </template>

                <div class="uc-content">
                    <b-alert show class="buidl-status mb-3 p-2">
                        <p class="text-center text-danger mb-1">
                            <strong>We're Currently BUIDLin’ Something UNSTOPPABLE!</strong>
                        </p>

                        <b-progress height="10px" class="mb-1">
                            <b-progress-bar variant="success" :value="60"></b-progress-bar>
                            <b-progress-bar variant="warning" :value="20" striped animated></b-progress-bar>
                            <b-progress-bar variant="danger" :value="14"></b-progress-bar>
                            <b-progress-bar variant="light" :value="6"></b-progress-bar>
                        </b-progress>
                    </b-alert>

                    <div class="log-entry" v-html="logDisplay">
                        <!-- pre-rendered log display -->
                    </div>
                </div>
            </b-tab>

            <b-tab>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Wishful Thinking</strong>
                    <strong class="d-sm-none">Wishlist</strong>
                </template>

                <div class="uc-content">
                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-user progress-group-icon"></i>
                            <span class="title">Male</span>
                            <span class="ml-auto font-weight-bold">43%</span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                        </div>
                    </div>
                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-user-female progress-group-icon"></i>
                            <span class="title">Female</span>
                            <span class="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="37" variant="warning"></b-progress>
                        </div>
                    </div>

                    <div class="divider text-center">
                        <b-button variant="link" size="sm" class="text-muted"><i class="icon-options"></i></b-button>
                    </div>

                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-globe progress-group-icon"></i>
                            <span class="title">Organic Search</span>
                            <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="56" variant="success"></b-progress>
                        </div>
                    </div>
                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-social-facebook progress-group-icon"></i>
                            <span class="title">Facebook</span>
                            <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="15" variant="success"></b-progress>
                        </div>
                    </div>
                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-social-twitter progress-group-icon"></i>
                            <span class="title">Twitter</span>
                            <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
                        </div>
                    </div>
                    <div class="progress-group">
                        <div class="progress-group-header">
                            <i class="icon-social-linkedin progress-group-icon"></i>
                            <span class="title">LinkedIn</span>
                            <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
                        </div>
                        <div class="progress-group-bars">
                            <b-progress height={} class="progress-xs" :value="8" variant="success"></b-progress>
                        </div>
                    </div>
                </div>
            </b-tab>

            <b-tab>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Make Your Wish</strong>
                    <strong class="d-sm-none">Wish</strong>
                </template>

                <div class="uc-content">
                    <p>
                        We need your help in getting this project up and running.
                        Please let us know what you need to make it great!
                    </p>

                    <hr />

                    <b-row class="my-1">
                        <b-col sm="4" class="text-right">
                            <label for="input-small"><strong>Profile Name</strong></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-input id="input-small" size="sm" placeholder="Please signin to a profile." readonly></b-form-input>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col sm="4" class="text-right">
                            <label for="textarea-small"><strong>Your Wish</strong></label>
                        </b-col>
                        <b-col sm="7">
                            <b-form-textarea
                                id="user-wish"
                                v-model="userWish"
                                size="sm"
                                rows="3"
                                placeholder="Enter your wish here; then click submit below."
                          ></b-form-textarea>
                        </b-col>
                      </b-row>
                </div>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
export default {
    data: () => {
        return {
            logEntries: [{
                date: 'Thursday, October 24, 2019',
                body: `
                The Plugins area has been released with its first installable plugins: (1) PeerMessage, (2) Blockchain, and (3) Superuser; the latter 2 are for __DEMO PURPOSES ONLY__ and are still under initial development.
                `,
            }, {
                date: 'Friday, October 11, 2019',
                body: `
                We're excited to start rolling out the newly renovated ZeroCoding portal.
                We've obviously got a lot of construction happening.
                Please be patient and bear with us for a while, as our team puts in __WORK__ to get things in proper order.
                `,
            }],
            userWish: ''
        }
    },
    computed: {
        logDisplay () {
            const logEntries = []

            for (const logEntry of this.logEntries) {
                logEntries.push(`
                <strong>${logEntry.date}</strong><br />
                <p>
                    ${logEntry.body}
                </p>
                `)
            }

            return logEntries.join('<hr />')
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
        // this.$bvModal.show('modal-under-construction')
    }
}
</script>

<style scoped>
.uc-content {
    height: 175px;
    overflow: auto;
}

.buidl-status {
    background-color: rgba(30, 30, 30, 0.85);
}

.log-entry {
    font-size: 0.8em;
}
</style>
