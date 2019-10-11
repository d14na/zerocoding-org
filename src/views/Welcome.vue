<template>
    <div class="animated fadeIn">
        <Header class="mb-3" />
        <CoreStats />

        <b-row>
            <b-col sm="9">
                <b-card>
                    <b-row>
                        <b-col sm="5">
                            <h4 id="traffic" class="card-title mb-0">Traffic</h4>
                            <div class="small text-muted">November 2017</div>
                        </b-col>
                        <b-col sm="7" class="d-none d-md-block">
                            <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
                            <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
                                <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
                                    <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
                                    <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
                                    <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
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
                        <small class="text-muted">New Clients</small><br>
                        <strong class="h4">9,123</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-01" :data="[35, 23, 56, 22, 97, 23, 64]" variant="info" width="80" height="30" />
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="danger">
                        <small class="text-muted">Recurring Clients</small><br>
                        <strong class="h4">22,643</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-02" :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" />
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="warning">
                        <small class="text-muted">Pageviews</small><br>
                        <strong class="h4">78,623</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                        </div>
                    </Callout>

                    <hr />

                    <Callout variant="success">
                        <small class="text-muted">Organic</small><br>
                        <strong class="h4">49,123</strong>
                        <div class="chart-wrapper" :style="{ top: '-10px'}">
                            <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                        </div>
                    </Callout>

                    <div class="text-right">
                        <small class="text-secondary">
                            source: <a href="https://matomo.org/" target="_blank" class="text-secondary">Matomo Analytics</a>
                        </small>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="6" lg="3">
                <div class="brand-card">
                    <div class="brand-card-header bg-facebook">
                        <i class="fa fa-facebook"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">89k</div>
                            <div class="text-uppercase text-muted small">friends</div>
                        </div>
                        <div>
                            <div class="text-value">459</div>
                            <div class="text-uppercase text-muted small">feeds</div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col sm="6" lg="3">
                <div class="brand-card">
                    <div class="brand-card-header bg-twitter">
                        <i class="fa fa-twitter"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">973k</div>
                            <div class="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                            <div class="text-value">1.792</div>
                            <div class="text-uppercase text-muted small">tweets</div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col sm="6" lg="3">
                <div class="brand-card">
                    <div class="brand-card-header bg-linkedin">
                        <i class="fa fa-linkedin"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">500+</div>
                            <div class="text-uppercase text-muted small">contacts</div>
                        </div>
                        <div>
                            <div class="text-value">292</div>
                            <div class="text-uppercase text-muted small">feeds</div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col sm="6" lg="3">
                <div class="brand-card">
                    <div class="brand-card-header bg-google-plus">
                        <i class="fa fa-google-plus"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">894</div>
                            <div class="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                            <div class="text-value">92</div>
                            <div class="text-uppercase text-muted small">circles</div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
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
            selected: 'Month',
            tableItems: [
                {
                    avatar: { url: 'img/avatars/1.jpg', status: 'success' },
                    user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
                    country: { name: 'USA', flag: 'us' },
                    usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
                    payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
                    activity: '10 sec ago'
                },
                {
                    avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
                    user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
                    country: { name: 'Brazil', flag: 'br' },
                    usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
                    payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
                    activity: '5 minutes ago'
                },
                {
                    avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
                    user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
                    country: { name: 'Poland', flag: 'pl' },
                    usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
                    payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
                    activity: 'Last week'
                }
            ],
            tableFields: {
                avatar: {
                    label: '<i class="icon-people"></i>',
                    class: 'text-center'
                },
                user: {
                    label: 'User'
                },
                country: {
                    label: 'Country',
                    class: 'text-center'
                },
                usage: {
                    label: 'Usage'
                },
                payment: {
                    label: 'Payment method',
                    class: 'text-center'
                },
                activity: {
                    label: 'Activity'
                }
            }
        }
    },
    methods: {
        variant (value) {
            let $variant
            if (value <= 25) {
                $variant = 'info'
            } else if (value > 25 && value <= 50) {
                $variant = 'success'
            } else if (value > 50 && value <= 75) {
                $variant = 'warning'
            } else if (value > 75 && value <= 100) {
                $variant = 'danger'
            }
            return $variant
        },
        flag (value) {
            return 'flag-icon flag-icon-' + value
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
