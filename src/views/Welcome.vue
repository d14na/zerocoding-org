<template>
    <div class="animated fadeIn">
        <Header class="mb-3" />
        <CoreStats />

        <b-row>
            <b-col sm="9">
                <b-card>
                    <b-row>
                        <b-col sm="5">
                            <h4 id="traffic" class="card-title mb-0">Zeronet Forecast</h4>
                            <div class="small text-muted">{{curVelocityDisplay}}</div>
                        </b-col>
                        <b-col sm="7" class="d-none d-md-block">
                            <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
                            <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
                                <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
                                    <b-form-radio class="mx-0" value="9">September</b-form-radio>
                                    <b-form-radio class="mx-0" value="10">October</b-form-radio>
                                    <b-form-radio class="mx-0" value="11">November</b-form-radio>
                                </b-form-radio-group>
                            </b-button-toolbar>
                        </b-col>
                    </b-row>
                    <main-chart-example chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
                </b-card>
            </b-col>

            <b-col sm="3">
                <b-card>
                    <Callout variant="info">
                        <small class="text-muted">New Developers</small><br>
                        <strong class="h4">31</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-01" :data="[35, 23, 56, 22, 97, 23, 64]" variant="info" width="80" height="30" />
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="danger">
                        <small class="text-muted">New Messages</small><br>
                        <strong class="h4">1,649</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-02" :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" />
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="warning">
                        <small class="text-muted">New Media</small><br>
                        <strong class="h4">179</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="success">
                        <small class="text-muted">New Zites</small><br>
                        <strong class="h4">5</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                        </div>
                    </Callout>

                    <div class="text-right">
                        <small class="text-secondary">
                            source: <a href="javascript://" class="text-secondary">ZeroCoding School</a>
                        </small>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <!-- Start Brands -->

        <b-row>
            <b-col sm="6" lg="3">
                <div class="brand-card clickable" @click="openTwitter">
                    <div class="brand-card-header bg-twitter">
                        <i class="fa fa-twitter"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">23</div>
                            <div class="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                            <div class="text-value">10</div>
                            <div class="text-uppercase text-muted small">tweets</div>
                        </div>
                    </div>
                </div>
            </b-col>

            <b-col sm="6" lg="3">
                <div class="brand-card clickable" @click="openReddit">
                    <div class="brand-card-header bg-google-plus">
                        <i class="fa fa-reddit-alien"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">1</div>
                            <div class="text-uppercase text-muted small">Members</div>
                        </div>
                        <div>
                            <div class="text-value">5</div>
                            <div class="text-uppercase text-muted small">Online</div>
                        </div>
                    </div>
                </div>
            </b-col>

            <b-col sm="6" lg="3">
                <div class="brand-card clickable" @click="openGithub">
                    <div class="brand-card-header bg-indigo">
                        <i class="fa fa-github-alt"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">0</div>
                            <div class="text-uppercase text-muted small">Stars</div>
                        </div>
                        <div>
                            <div class="text-value">0</div>
                            <div class="text-uppercase text-muted small">Forks</div>
                        </div>
                    </div>
                </div>
            </b-col>

            <b-col sm="6" lg="3">
                <div class="brand-card clickable" @click="openTelegram">
                    <div class="brand-card-header bg-primary">
                        <b-img src="https://i.imgur.com/PG4baGJ.png" width="35" />
                        <!-- <i class="fa fa-telegram"></i> -->
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">2</div>
                            <div class="text-uppercase text-muted small">members</div>
                        </div>
                        <div>
                            <div class="text-value">0</div>
                            <div class="text-uppercase text-muted small">messages</div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row> <!-- End Brands -->
    </div>
</template>

<script>
/* Import libraries. */
import moment from 'moment'

import CardChartSample from './welcome/CardChartSample'
import CoreStats from './welcome/CoreStats'
import Header from './welcome/Header'

import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
    name: 'dashboard',
    components: {
        CardChartSample,
        CoreStats,
        Header,

        Callout,
        CardLine1ChartExample,
        CardLine2ChartExample,
        CardLine3ChartExample,
        CardBarChartExample,
        MainChartExample,
        SocialBoxChartExample,
        CalloutChartExample
    },
    data: function () {
        return {
            selected: '10',
        }
    },
    computed: {
        curVelocityDisplay () {
            return moment().format('MMMM YYYY')
        },
    },
    methods: {
        openGithub () {
            window.open('https://github.com/d14na/zerocoding-org')
        },
        openReddit () {
            window.open('https://www.reddit.com/r/ZeroCoding/')
        },
        openTelegram () {
            window.open('https://t.me/joinchat/IngPhRZ92K5GRbKoA1jlnw')
        },
        openTwitter () {
            window.open('https://twitter.com/ZeronetCoding')
        },
    }
}
</script>

<style scoped>
/* IE fix */
#card-chart-01, #card-chart-02 {
    width: 100% !important;
}
</style>
