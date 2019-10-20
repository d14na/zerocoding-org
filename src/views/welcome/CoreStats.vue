<template>
    <b-card-group class="mb-4">
        <b-card class="text-white bg-success">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-people"></i>
            </div>
            <div class="h1 mb-0">17,105</div>
            <small class="text-muted text-uppercase font-weight-bold">Monthly Active Users</small>
            <card-chart-sample chartId="card-chart-sample" class="chart-wrapper px-3" style="height:70px;" :height="70" />
        </b-card>

        <b-card class="text-white bg-success">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-user-follow"></i>
            </div>
            <div class="h1 mb-0">2,708</div>
            <small class="text-muted text-uppercase font-weight-bold">First-time Users</small>
            <card-chart-sample chartId="card-chart-sample" class="chart-wrapper px-3" style="height:70px;" :height="70" />
        </b-card>

        <b-card class="text-white bg-danger">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-speedometer"></i>
            </div>
            <div class="h2 mb-0">5min 32sec</div>
            <small class="text-muted text-uppercase font-weight-bold">Average User Visit</small>
            <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="25" />
        </b-card>

        <b-card class="text-white bg-info">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-basket-loaded"></i>
            </div>
            <div class="h5 mb-0">TheBlackAlley <small>10.6k</small></div>
            <small class="text-muted text-uppercase font-weight-bold">Most Visited Zites</small>
            <div class="mt-2 mb-0 text-right">
                <div>Beautyleg腿模 <small>3.5k</small></div>
                <div>Jessica Nigri Gallery <small>3.1k</small></div>
                <div>Millchan <small>2.7k</small></div>
                <div>XiuRen秀人 <small>1.5k</small></div>
            </div>
        </b-card>

        <b-card class="text-white bg-info">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-pie-chart"></i>
            </div>
            <div class="h3 mb-0">Android <small><small>45.2%</small></small></div>
            <small class="text-muted text-uppercase font-weight-bold">Top Operating Systems</small>
            <div class="mt-2 mb-0 text-right">
                <div>Windows <small>33.4%</small></div>
                <div>iOS <small>13.8%</small></div>
                <div>Mac <small>4.2%</small></div>
                <div>Linux <small>2.9%</small></div>
            </div>
        </b-card>
    </b-card-group>
</template>

<script>
import CardChartSample from './CardChartSample'

export default {
    name: 'dashboard',
    components: {
        CardChartSample,
    },
    data: function () {
        return {
            //
        }
    },
    methods: {
        //
    }
}
</script>

<style scoped>
/*  */
</style>
