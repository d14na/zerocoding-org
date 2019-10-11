<template>
    <b-row>
        <b-col sm="12" lg="6">
            <b-alert show class="introWin" rounded-circle>
                <div>
                    <b-tabs content-class="mt-3" justified>
                        <b-tab title="Welcome" class="contentWin" active>
                            <template v-slot:title>
                                <strong class="text-warning">Welcome</strong>
                            </template>

                            <h2 class="text-center">{{greeting}}</h2>
                            <hr />

                            <p>
                                Arbitror eruditionem ex quamquam, iudicem enim sunt probant illum ea qui magna
                                duis legam officia sed eu irure id malis, irure appellat te comprehenderit,
                                eiusmod minim velit a nisi, quid expetendis ea nulla ipsum non tempor occaecat e
                                dolor aute. Incididunt fore proident possumus, constias dolor an occaecat
                                transferrem, admodum praetermissum est ingeniis, a ipsum cernantur laborum. In
                                esse senserit laboris, labore expetendis ab familiaritatem, amet non singulis an
                                quae, eiusmod quae noster eu veniam. Fugiat a vidisse se magna.Nam mandaremus
                                concursionibus. Iis legam esse quis admodum. Ea ingeniis et quamquam se offendit
                                minim expetendis, illum ut a esse iudicem, ingeniis eram occaecat nescius do a
                                sint distinguantur, ne aut minim mentitum, non e firmissimum non incurreret non
                                nisi quamquam.
                            </p>
                        </b-tab>
                        <b-tab class="contentWin">
                            <template v-slot:title>
                                <strong class="text-warning">Quick Start</strong>
                            </template>

                            <h2 class="text-center">Quick Start</h2>
                            <hr />

                            <p class="mb-0">
                                Nostrud ad nostrud. Iis in irure possumus, si occaecat imitarentur. Multos
                                eiusmod cernantur. An summis anim a arbitror quo cupidatat de quorum proident ab
                                dolor singulis ut mandaremus, quae laborum est reprehenderit, et nulla doctrina,
                                ipsum expetendis ne noster enim sed est litteris philosophari, minim litteris
                                fidelissimae.Ea veniam commodo. Enim qui pariatur ne sint ex incididunt a
                                cernantur an offendit non incurreret ex proident ipsum quae incurreret export.
                                Constias labore malis voluptate velit, fore probant reprehenderit.
                            </p>
                        </b-tab>
                        <b-tab class="contentWin">
                            <template v-slot:title>
                                <strong class="text-warning">Trending</strong>
                            </template>

                            <h2 class="text-center">What's Trending Now?</h2>
                            <hr />

                            <ul class="horizontal-bars type-2">
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
                            </ul>
                        </b-tab>
                        <b-tab class="contentWin">
                            <template v-slot:title>
                                <strong class="text-warning">CoC</strong>
                            </template>

                            <CodeOfConduct />
                        </b-tab>
                    </b-tabs>
                </div>
            </b-alert>
        </b-col>
        <b-col sm="12" lg="6">
            <b-carousel id="carousel1"
                class="mb-0"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="7000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <!-- Text slides with image -->
                <b-carousel-slide
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://lorempixel.com/1024/480/technics/2/">
                </b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                    src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                        ut lacus vel interdum.
                    </p>
                </b-carousel-slide>
            </b-carousel>

            <div class="text-right">
                <b-badge variant="secondary" @click="monetii" class="monetii">
                    <small class="text-white">
                        <i class="fa fa-question-circle mr-0"></i>
                        Blockchain Ads by Monetii
                    </small>
                </b-badge>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import CodeOfConduct from './CodeOfConduct'

export default {
    components: {
        CodeOfConduct
    },
    data: () => {
        return {
            greeting: `Welcome Devs!`,
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        onSlideStart (slide) {
            console.log('onSlideStart', slide)
            this.sliding = true
        },
        onSlideEnd (slide) {
            console.log('onSlideEnd', slide)
            this.sliding = false
        },
        monetii () {
            window.open('http://127.0.0.1:43110/monetii.bit')
        },
    },
}
</script>

<style scoped>
.introWin {
    height: 250px;
    overflow: hidden;

    background-color: rgba(30, 30, 30, 0.8);
    color: rgba(230, 230, 230, 1.0);
}

.contentWin {
    height: 165px;
    overflow: auto;

    color: rgba(30, 30, 30, 0.8)
}
</style>
