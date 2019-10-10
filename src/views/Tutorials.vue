<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="4">
                <b-card
                    header-tag="header"
                    footer-tag="footer">
                    <div slot="header">
                        <i class="fa fa-book mr-2"></i>
                        <strong>Tutorials </strong>
                    </div>
                    <b-list-group v-for="guide of guides" v-bind:key="guide.id">
                        <b-list-group-item button @click="loadGuide(guide.id)">{{guide.title}}</b-list-group-item>
                    </b-list-group>
                </b-card>
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
                title: 'The Truth About Zeronet'
            }],
            preview: '',
            welcome: `
## Welcome to The Truth About Zeronet

### Researched and written by [Ivanq](https://github.com/imachug)

---

### Chapters

- [01 — Zites](#/tutorials/the-truth-about-zeronet/1)
- [02 — Security](#/tutorials/the-truth-about-zeronet/2)
- [03 — Cloning Zites](#/tutorials/the-truth-about-zeronet/3)
- [04 — Creating Static Zite](#/tutorials/the-truth-about-zeronet/4)
- [05 — ZeroFrame](#/tutorials/the-truth-about-zeronet/5)
- [06 — Databases](#/tutorials/the-truth-about-zeronet/6)
- [07 — Changing Tables](#/tutorials/the-truth-about-zeronet/7)
- [08 — DbSchema](#/tutorials/the-truth-about-zeronet/8)
- [09 — User Content](#/tutorials/the-truth-about-zeronet/9)
- [10 — Editing User Data](#/tutorials/the-truth-about-zeronet/10)
- [11 — Merger Sites](#/tutorials/the-truth-about-zeronet/11)
- [12 — Merged Content](#/tutorials/the-truth-about-zeronet/12)
- [13 — Ugly Things](#/tutorials/the-truth-about-zeronet/13)
- [Example — ZeroAuth.js](#/tutorials/the-truth-about-zeronet/14)
- [Example — ZeroFS.js](#/tutorials/the-truth-about-zeronet/15)
- [Example — ZeroPage.js](#/tutorials/the-truth-about-zeronet/16)
            `
        }
    },
    methods: {
        loadGuide (_guideId) {
            // alert('loading ' + _guideId)
            this.$router.push({ path: `/tutorials/${_guideId}` })
        },
        async loadPreview (_pageId) {
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

        // console.log('CURRENT ROUTE', route)

        /* Set guide id. */
        const guideId = route.params.guideId

        /* Set page id. */
        const pageId = route.params.pageId

        // console.log('PAGE/GUIDE', guideId, pageId)

        if (pageId) {
            this.loadPreview(parseInt(pageId))
        } else {
            this.preview = marked(this.welcome)
        }
    },
    watch: {
        $route(to, from) {
            /* Set guide id. */
            const guideId = to.params.guideId

            /* Set page id. */
            const pageId = to.params.pageId

            // console.log('PAGE/GUIDE', guideId, pageId)

            if (pageId) {
                this.loadPreview(parseInt(pageId))
            } else {
                this.preview = marked(this.welcome)
            }
        }
    },
}

/* Initialize ZeroApi. */
// const zeroApi = new ZeroApi()

function readFile(file, callback) {
    console.log('READFILE IS DISABLED!!')
    // zeroApi.cmd('fileGet', [file, false], callback)
}

// if (!pageNum) {
//     const markdown = marked(welcome)
//
//     /* Update the markup holder. */
//     $('#preview').html(markdown)
// } else {
//     switch(parseInt(pageNum)) {
//         case 1:
//             pageName = '01-zites.md'
//             break
//         case 2:
//             pageName = '02-security.md'
//             break
//         case 3:
//             pageName = '03-cloning-zites.md'
//             break
//         case 4:
//             pageName = '04-creating-static-zite.md'
//             break
//         case 5:
//             pageName = '05-zeroframe.md'
//             break
//         case 6:
//             pageName = '06-databases.md'
//             break
//         case 7:
//             pageName = '07-changing-tables.md'
//             break
//         case 8:
//             pageName = '08-dbschema.md'
//             break
//         case 9:
//             pageName = '09-user-content.md'
//             break
//         case 10:
//             pageName = '10-editing-user-data.md'
//             break
//         case 11:
//             pageName = '11-merger-sites.md'
//             break
//         case 12:
//             pageName = '12-merged-content.md'
//             break
//         case 13:
//             pageName = '13-ugly-things.md'
//             break
//         default:
//             pageName = '01-zites.md'
//             break
//     }
//
//     /* Read the source (markdown) file. */
//     // readFile(`the-truth-about-zeronet/${pageName}`, (content) => {
//     //     if (content) {
//     //         const markdown = marked(welcome + content)
//     //
//     //         /* Update the markup holder. */
//     //         $('#preview').html(markdown)
//     //     }
//     // })
// }
</script>

<style scoped>
.previewWin {
    padding: 15px;
}
</style>
