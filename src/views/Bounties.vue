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
    </div>
</template>

<script>
export default {
  name: 'typography'
}
</script>
