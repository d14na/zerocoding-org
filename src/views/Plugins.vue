<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="12" lg="8">
                <b-row>
                    <b-col sm="6" v-for="plugin of plugins" v-bind:key="plugin.id">
                        <b-card
                            :title="plugin.title"
                            :img-src="getCover(plugin.coverImg)"
                            img-alt="Plugin Cover"
                            img-top
                            class="mb-3"
                        >
                            <b-card-text>
                                {{plugin.coverDesc}}
                            </b-card-text>

                            <b-button @click="loadPlugin(plugin.id)" variant="primary">OPEN {{plugin.title}} <i class="fa fa-arrow-right ml-1"></i></b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4">
                <div class="win-summary fixed-top">
                    <div class="card d-none d-lg-flex card-summary">
                        <div class="card-header">
                            <strong>{{pluginTitle}} Manager</strong>
                        </div>

                        <div class="card-body">
                            <p>
                                Its easy to <strong>install</strong> ANY of the plugins listed on this page.
                            </p>

                            <b-button block variant="primary" class="mb-3" @click="openHome">Open {{pluginTitle}} Home</b-button>

                            <hr />

                            <b-button block variant="danger" @click="install" v-if="activePluginRev == 0">Install {{pluginTitle}}</b-button>
                            <b-button block variant="outline-warning" @click="manage" v-if="activePluginRev > 0">Manage {{pluginTitle}}</b-button>
                            <b-button block variant="outline-warning" @click="runTests" v-if="activePluginRev > 0">Run {{pluginTitle}} Tests</b-button>
                        </div>

                        <!-- placeholder for markdown display -->
                        <b-alert show id="display-console">
                            {{preview}}
                        </b-alert>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import (local) libraries. */
import ZeroApp from './plugins/ZeroApp'

/* Import data. */
import { active } from './plugins/_data'

/* Import (local) modules. */
import getCover from './plugins/getCover'
import getName from './plugins/getName'
import getRev from './plugins/getRev'
import install from './plugins/install'
import loadPlugin from './plugins/loadPlugin'
import manage from './plugins/manage'
import openHome from './plugins/openHome'
import runTests from './plugins/runTests'

export default {
    data: () => {
        return {
            /* Active plugin. */
            activePluginId: '',
            activePluginName: '',
            activePluginRev: 0,

            /* (Terminal) preview. */
            preview: '',

            /* All (active) plugins. */
            plugins: active,
        }
    },
    computed: {
        pluginTitle () {
            /* Search. */
            for (let plugin of this.plugins) {
                if (this.activePluginId === plugin.id) {
                    return plugin.title
                }
            }

            return 'Unknown'
        },
    },
    methods: {
        getCover,
        getName,
        getRev,
        install,
        loadPlugin,
        manage,
        openHome,
        runTests,
    },
    // created: function () {
    //     const getCover = require('./plugins/getCover')
    //     this.getCover = getCover.bind(this)
    //
    //     const getName = require('./plugins/getName')
    //     this.getName = getName.bind(this)
    //
    //     const getRev = require('./plugins/getRev')
    //     this.getRev = getRev.bind(this)
    // },
    mounted: function () {
        /* Initialize new zeronet application. */
        this.app = new ZeroApp()

        /* Load starting plugin. */
        this.loadPlugin('blockchain')
    }
}
</script>

<style scoped>
.win-summary {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-summary {
    float: right;
    width: 25vw;

    margin-top: 125px;
    margin-right: 25px;
}

#display-console {
    height: 100px;
    margin: 20px;
    overflow: auto;

    font-size: 0.8em;
    background-color: rgba(30, 30, 30, 0.8);
}
</style>
