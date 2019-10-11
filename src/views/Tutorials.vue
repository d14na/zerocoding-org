<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="4">
                <div role="tablist">
                    <b-card no-body class="mb-2" v-for="guide of guides" v-bind:key="guide.id" @click="loadGuide(guide.id)">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="javascript://" v-b-toggle.accordion-1 class="btn-tutorial">
                                {{guide.title}}
                                <div class="btn-tutorial-author text-right mr-2">
                                    Researched and written by <a :href="guide.authorLink" target="_blank" class="text-info"><strong>{{guide.author}}</strong></a>
                                </div>
                            </b-button>
                        </b-card-header>

                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <h4 class="text-center">Table Of Contents</h4>

                                <ul>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/1">Chapter 01 — Zites</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/2">Chapter 02 — Security</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/3">Chapter 03 — Cloning Zites</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/4">Chapter 04 — Creating Static Zite</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/5">Chapter 05 — ZeroFrame</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/6">Chapter 06 — Databases</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/7">Chapter 07 — Changing Tables</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/8">Chapter 08 — DbSchema</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/9">Chapter 09 — User Content</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/10">Chapter 10 — Editing User Data</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/11">Chapter 11 — Merger Sites</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/12">Chapter 12 — Merged Content</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/13">Chapter 13 — Ugly Things</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/14">Example — ZeroAuth.js</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/15">Example — ZeroFS.js</a></li>
                                    <li><a href="#/tutorials/the-truth-about-zeronet/16">Example — ZeroPage.js</a></li>
                                </ul>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-2">
                      <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-2 class="btn-tutorial">Another Tutorial</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-2">
                      <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-3 class="btn-tutorial">Yet Another Tutorial</b-button>
                      </b-card-header>
                      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
            </b-col>

            <b-col md="8">
                <b-card class="bg-white">
                    <div slot="header">
                        The Truth About Zeronet

                        <div class="card-header-actions">
                            <b-link href="#/tutorials/the-truth-about-zeronet" class="card-header-action btn-setting">
                                <i class="icon-home"></i>
                            </b-link>
                            <b-link href="javascript://" class="card-header-action btn-close">
                                <i class="icon-close"></i>
                            </b-link>
                        </div>
                    </div>
                    <b-card-body v-html="preview">
                        <!-- placeholder for markdown display -->
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import libraries. */
import marked from 'marked'
import superagent from 'superagent'

export default {
    data: () => {
        return {
            guides: [{
                id: 'the-truth-about-zeronet',
                title: 'The Truth About Zeronet',
                author: 'Ivanq',
                authorLink: 'https://github.com/imachug',
            }],
            preview: '',
        }
    },
    methods: {
        loadGuide (_guideId) {
            // alert('loading ' + _guideId)
            this.$router.push({ path: `/tutorials/${_guideId}` })
        },
        async loadPreview (_pageId) {
            console.log('LOADING PREVIEW', _pageId);
            let cid = ''
            let markdown = null
            let preview = ''

            /* Select page Content ID (CID). */
            switch(_pageId) {
            case 1: // zites.md
                cid = 'QmahYoWmnY7KBz2rffC53QWNhJXvTn8h5AG1WzqHiZ2Hjh'
                break
            case 2: // security.md
                cid = 'QmPNdF8nviZ42JX9NhqjucrAuNi35vJRATvXeP6WP8aCTN'
                break
            case 3: // cloning-zites.md
                cid = 'QmfEWmHSmWiasQffELSgZiNLudRvgZL2RHKJULDzQjG2gu'
                break
            case 4: // creating-static-zite.md
                cid = 'QmZZXazhfsVAutoLBMjXQcNAht3LbVzChRGBP2hVjB2FKr'
                break
            case 5: // zeroframe.md
                cid = 'QmfXPL4T6agJxiDZWq9GrecBvB3Uexb2s4Abo2Y1MAx6JB'
                break
            case 6: // databases.md
                cid = 'Qmbey3NBcjAqE9LFH53pGTSAF8AZqKZvFMsfkGEnFX4KRu'
                break
            case 7: // changing-tables.md
                cid = 'QmXbic2BBkF581efAbcz5Tm3KoQfqGFRprK3q9hGsKnucv'
                break
            case 8: // dbschema.md
                cid = 'QmTAr3zYkCmke2Vv4mS9XDF2Qw4HjNtENfPo4JjiNRjKsh'
                break
            case 9: // user-content.md
                cid = 'Qmay6XnLuGYcwFV1Dz6JKdVD16qYCg1vkmtvVmfJY2HqSZ'
                break
            case 10: // editing-user-data.md
                cid = 'QmTGfxN3KrjanPnmAXdSdRWMqY6jqivywag9skh4PC7KRc'
                break
            case 11: // merger-sites.md
                cid = 'QmTtfaharNkqdyyQuAm1GSRTLVCDGZFN9y1w4qsZKYbFKc'
                break
            case 12: // merged-content.md
                cid = 'QmSBeGpENBwMGH4ftH6u4C8hv4dysVuCyHsUTidLLwynkZ'
                break
            case 13: // ugly-things.md
                cid = 'QmXkeKXLwjf79UkuCN1kDbcqVyX4Ds8g91MuLvG6rTNjxu'
                break
            case 14: // examples/ZeroAuth.js
                cid = 'QmbGBN7tuDhE2ZaLSJvHpo3UGsS4RXkkesEEkPitXpoeTP'
                break
            case 15: // examples/ZeroFS.js
                cid = 'QmPCwyrqDx6zsMM6Mtnhb5x6gK6G59T6pTttRYZWoJGYtK'
                break
            case 16: // examples/ZeroPage.js
                cid = 'QmUdJHF5CAVzQM2eyCekN1ZyjZJmCaVN6xsnaGD5FCU5gZ'
                break
            }

            /* Request markdown from IPFS. */
            markdown = await superagent(`https://ipfs.io/ipfs/${cid}`)
                .catch(console.error)

            // console.log('MARKDOWN', markdown)

            if (!markdown) {
                return this.preview = marked(`<h1>Markdown Error</h1>`)
            }

            /* Set type. */
            const type = markdown.type

            /* Set preview. */
            switch(type) {
            case 'text/plain':
                preview = markdown.text
                break
            default:
                preview = markdown.text
                console.error('UNKNOWN CONTENT TYPE', type)
            }

            this.preview = marked(preview)
        },
    },
    mounted: function () {
        /* Set (current) route. */
        const route = this.$router.currentRoute

        console.log('CURRENT ROUTE', route)

        /* Set guide id. */
        const guideId = route.params.guideId

        /* Set page id. */
        const pageId = route.params.pageId

        console.log('PAGE/GUIDE', guideId, pageId)

        if (pageId) {
            this.loadPreview(parseInt(pageId))
        } else {
            this.loadPreview(1)
        }
    },
    watch: {
        $route(to, from) {
            console.log('GOINGTO', to)
            /* Set guide id. */
            const guideId = to.params.guideId

            /* Set page id. */
            const pageId = to.params.pageId

            // console.log('PAGE/GUIDE', guideId, pageId)

            if (pageId) {
                this.loadPreview(parseInt(pageId))
            } else {
                this.loadPreview(1)
            }
        }
    },
}
</script>

<style scoped>
.previewWin {
    padding: 15px;
}

.btn-tutorial {
    /* height: 45px; */
    padding: 10px 0;

    background-color: rgba(30, 30, 30, 0.8);
    color: rgba(230, 230, 230, 1.0);
    font-size: 1.4em;
}
.btn-tutorial-author {
    color: rgba(230, 230, 230, 0.5);
    font-size: 0.6em;
}
</style>
