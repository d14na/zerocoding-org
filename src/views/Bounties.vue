<template>
  <div class="animated fadeIn">
      <b-row>
          <b-col sm="6" lg="3">
              <b-card no-body class="bg-primary">
                  <b-card-body class="pb-0">
                      <b-dropdown class="float-right" variant="transparent p-0" right>
                          <template slot="button-content">
                              <i class="icon-settings"></i>
                          </template>
                          <b-dropdown-item>Action</b-dropdown-item>
                          <b-dropdown-item>Another action</b-dropdown-item>
                          <b-dropdown-item>Something else here...</b-dropdown-item>
                          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                      </b-dropdown>
                      <h4 class="mb-0">9.823</h4>
                      <p>Members online</p>
                  </b-card-body>
                  <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
              </b-card>
          </b-col>
          <b-col sm="6" lg="3">
              <b-card no-body class="bg-info">
                  <b-card-body class="pb-0">
                      <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
                          <template slot="button-content">
                              <i class="icon-location-pin"></i>
                          </template>
                          <b-dropdown-item>Action</b-dropdown-item>
                          <b-dropdown-item>Another action</b-dropdown-item>
                          <b-dropdown-item>Something else here...</b-dropdown-item>
                          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                      </b-dropdown>
                      <h4 class="mb-0">9.823</h4>
                      <p>Members online</p>
                  </b-card-body>
                  <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
              </b-card>
          </b-col>

          <b-col sm="12" lg="6">
              <b-carousel id="carousel1"
                  class="mb-3"
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
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" lg="6">
                <div class="card">
                  <div class="card-header">
                    LOOK AT MY RESUME
                  </div>
                  <div class="card-body">
                    <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>

                      <b-button block variant="primary">Primary</b-button>
                      <b-button block variant="secondary">Secondary</b-button>
                  </div>
                </div>
            </b-col>

            <b-col sm="12" lg="6">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
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
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'

/* Import views. */
const UnderConstruction = () => import('@/views/UnderConstruction')

export default {
    components: {
        CardLine1ChartExample,
        CardLine2ChartExample,
        UnderConstruction,
    },
    data: () => {
        return {
            slide: 0,
            sliding: null,
            text: `
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
              brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
              tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
              vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
              synth nesciunt you probably haven't heard of them accusamus labore VHS.
            `,
        }
    },
    methods: {
        closeNotice () {
            /* Go back in history ONE stop. */
            this.$router.go(-1)
        },
        suggest () {
            alert('not right now.')
        },

        onSlideStart (slide) {
            console.log('onSlideStart', slide)
            this.sliding = true
        },
        onSlideEnd (slide) {
            console.log('onSlideEnd', slide)
            this.sliding = false
        },
    },
    mounted: function () {
        /* Display the un-dismissable modal. */
        this.$bvModal.show('modal-under-construction')
    },
}
</script>
