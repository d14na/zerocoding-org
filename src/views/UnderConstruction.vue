<template>
    <div>
        <b-tabs content-class="mt-3" justified card>
            <b-tab active>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Dev Status</strong>
                    <strong class="d-sm-none">Status</strong>
                </template>

                <div class="coming-soon-content">
                    We're BUIDLing something wonderful, just you wait and see.
                </div>
            </b-tab>

            <b-tab>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Wishful Thinking</strong>
                    <strong class="d-sm-none">Wishlist</strong>
                </template>

                <div class="coming-soon-content">
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

                <div class="coming-soon-content">
                    <p>
                        We need your help in getting this project up and running.
                        Please let us know what you need to make it great!
                    </p>

                    Ex incididunt transferrem. Te cernantur consectetur, mentitum tamen enim ut
                    dolor. Mandaremus enim tamen e aliqua est nisi occaecat ad magna minim, cillum
                    de id tempor incurreret de sed labore iudicem occaecat.Ex sint coniunctione ea
                    qui est enim aute dolore, ab officia o appellat, si ita praetermissum, ut
                    voluptate despicationes, nam enim eram a voluptate ut non summis est esse a
                    cupidatat eram ubi expetendis graviterque. Ullamco do sunt. Laboris o quid
                    constias.
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            //
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
.coming-soon-content {
    height: 150px;
    overflow: auto;
}

.wishful-progress {
    border: 1pt solid #f00;
}
</style>
