<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="5">
                <b-card v-for="hello of hellos">
                    <b-media>
                        <template v-slot:aside>
                            <b-img class="cover-img" :src="hello.coverImg" rounded alt="Hello"></b-img>
                        </template>

                        <h5 class="mt-0">{{hello.title}}</h5>

                        <p class="hello">
                            {{hello.body}}
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="7">
                <div class="win-preview fixed-top">
                    <div class="card d-none d-lg-flex card-preview">
                        <div class="card-header">
                            <strong>Show Me The Code</strong>
                        </div>

                        <!-- placeholder for markdown display -->
                        <b-alert show id="display-console">
                            <pre id="display-body">
                                {{preview}}
                            </pre>
                        </b-alert>
                    </div>
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
/* Import views. */
const UnderConstruction = () => import('@/views/UnderConstruction')

export default {
    components: {
        UnderConstruction,
    },
    data: () => {
        return {
            preview: `
<!DOCTYPE html>
<html>
<head>
    <title>[ZITE-TITLE-HERE]</title>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <base href="" target="_top" id="base">
    <script>base.href = document.location.href.replace("/media", "").replace("index.html", "").replace(/[&?]wrapper=False/, "").replace(/[&?]wrapper_nonce=[A-Za-z0-9]+/, "")</scr\ipt>
</head>
<body>
    Hello, Zero!
</body>
</html>
            `,
            fullPreview: `
<!DOCTYPE html>
<html>
<head>
    <title>[ZITE-TITLE-HERE]</title>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <base href="" target="_top" id="base">
    <script>base.href = document.location.href.replace("/media", "").replace("index.html", "").replace(/[&?]wrapper=False/, "").replace(/[&?]wrapper_nonce=[A-Za-z0-9]+/, "")</scr\ipt>
</head>
<body>
<div id="out"></div>
<script type="text/javascript" src="js/ZeroFrame.js"></scr\ipt>
<script>
class Page extends ZeroFrame {
	setSiteInfo(site_info) {
		var out = document.getElementById("out")
		out.innerHTML =
			"Page address: " + site_info.address +
			"<br>- Peers: " + site_info.peers +
			"<br>- Size: " + site_info.settings.size +
			"<br>- Modified: " + (new Date(site_info.content.modified*1000))
	}

	onOpenWebsocket() {
		this.cmd("siteInfo", [], function(site_info) {
			page.setSiteInfo(site_info)
		})
	}

	onRequest(cmd, message) {
		if (cmd == "setSiteInfo")
			this.setSiteInfo(message.params)
		else
			this.log("Unknown incoming message:", cmd)
	}
}
page = new Page()
</scr\ipt>
</body>
</html>
            `,
            hellos: [
                {
                    title: 'Just Show Me The Code',
                    body: `Okay, KISS! Keepin' It Super Simple is not a problem. Hello, Zero! is the simplest baseline of a working Zeronet website (aka Zite).`,
                    coverImg: 'https://i.imgur.com/3oedvZ6.jpg',
                }, {
                    title: 'BUIDL Me Something',
                    body: `Ready to move on to bigger and better things? NOTE: Zites are INSTANTLY seeded from 0net.Dev to support "initial" publishing from behind those pesky firewalls.`,
                    coverImg: 'https://i.imgur.com/dxRagsI.png',
                }, {
                    title: 'I Need To Import A Project?',
                    body: `Bring your ASP & PHP! Our growing community of developers are ready to support your wildest dreams. SPEDN some crypto and discover the power of BOUNTIES!`,
                    coverImg: 'https://i.imgur.com/tpTrDoG.jpg',
                }, {
                    title: `So What's The Best Zite?`,
                    body: `We've put together a showcase of the most awesome zites to help get you inspired. Found a winner? Just CLONE it! And NEVER start from scratch again.`,
                    coverImg: 'https://i.imgur.com/O0w4iDk.jpg',
                }
            ]
        }
    },
    methods: {
        closeNotice () {
            /* Go back in history ONE stop. */
            this.$router.go(-1)
        },
    },
    mounted: function () {
        /* Display the un-dismissable modal. */
        // this.$bvModal.show('modal-under-construction')
    },
}
</script>

<style scoped>
.win-preview {
    /* border: 4pt solid #f33; */
    height: 1px; /* prevent UI blocking */
}

.card-preview {
    float: right;
    width: 45vw;
    /* height: 300px; */

    margin-top: 125px;
    margin-right: 25px;
}

#display-console {
    height: 380px;
    margin: 20px;

    overflow: auto;

    font-size: 0.8em;
    background-color: rgba(30, 30, 30, 0.8);
}
#display-body {
    color: rgba(230, 230, 230, 1.0);
}

.hello {
    display: block;
    max-height: 105px;
    overflow: auto;
}

.cover-img {
    width: 125px;
    height: 125px;

    object-fit: cover;
    object-position: center;
}
</style>
