<template>
    <b-card-group class="mb-4">
        <b-card class="text-white bg-info">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-people"></i>
            </div>
            <div class="h4 mb-0">87.500</div>
            <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
            <card-chart-sample chartId="card-chart-sample" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
        <b-card class="text-white bg-success">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-user-follow"></i>
            </div>
            <div class="h4 mb-0">385</div>
            <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
            <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
        <b-card class="text-white bg-warning">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-basket-loaded"></i>
            </div>
            <div class="h4 mb-0">1238</div>
            <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
            <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
        </b-card>
        <b-card class="text-white bg-primary">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-pie-chart"></i>
            </div>
            <div class="h4 mb-0">28%</div>
            <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
            <b-progress height={} class="progress-xs mt-3 mb-0" :value="25"/>
        </b-card>
        <b-card class="text-white bg-danger">
            <div class="h1 text-muted text-right mb-4">
                <i class="icon-speedometer"></i>
            </div>
            <div class="h4 mb-0">5:34:11</div>
            <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
            <b-progress height={} class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
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
