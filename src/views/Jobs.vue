<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" sm="7">
                <b-card v-for="job of jobs">
                    <b-media>
                        <template v-slot:aside>
                            <b-img src="https://picsum.photos/64" width="64" alt="Job"></b-img>
                        </template>

                        <h5 class="mt-0">{{job.title}}</h5>

                        <p class="job">
                            {{job.body}}
                        </p>
                    </b-media>
                </b-card>
            </b-col>

            <b-col sm="5">
                <div class="win-preview fixed-top">
                    <div class="card d-none d-lg-flex card-preview">
                        <div class="card-header">
                            <strong>Job Preview</strong>
                        </div>

                        <div class="card-body">
                            <b-img thumbnail fluid src="https://picsum.photos/600" alt="Job Preview"></b-img>
                        </div>
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
            tabIndex: 0,
            jobs: [
                {
                    title: 'Job #1',
                    body: `Eram vidisse offendit eu duis ab incididunt de quid eu ad illum constias,
                    voluptate quo export, mentitum non noster offendit sed pariatur eram fore et
                    aute de esse proident te summis quorum, nisi singulis id efflorescere. Officia
                    aut iudicem ad velit possumus de eiusmod. Legam excepteur sed ipsum fore. Ea et
                    coniunctione est admodum qui illum ullamco, est laboris fidelissimae ad ullamco
                    noster singulis senserit, duis occaecat hic aliqua aute, nulla senserit ea eram
                    quorum quo nescius cillum vidisse, si nescius praetermissum.Singulis fugiat hic
                    probant concursionibus, dolor voluptate et reprehenderit. Et quid labore amet
                    admodum, aute singulis possumus sed in quorum appellat exercitation, commodo
                    eram tamen nostrud quorum iis consequat ut consequat, incurreret amet probant
                    commodo ut ullamco culpa sed mandaremus cohaerescant qui te tamen litteris
                    familiaritatem. Ex id concursionibus, de esse consequat praesentibus qui irure
                    instituendarum ullamco quid ullamco iis fugiat probant qui incurreret ne esse a
                    mentitum ne eiusmod sempiternum hic senserit et id sed cohaerescant, possumus
                    enim voluptate.`
                }, {
                    title: 'Job #2',
                    body: `Fore qui offendit et enim. Ingeniis cillum export occaecat sint, illum si
                    cupidatat, consequat te dolor, noster cernantur sed philosophari. Ullamco magna
                    malis do culpa, pariatur iis veniam senserit, ubi e arbitrantur est se proident
                    se ingeniis.Quae cernantur aliquip, tempor quamquam id despicationes, o id
                    imitarentur sed an cillum arbitror reprehenderit a mentitum do duis proident, in
                    elit in nisi si magna ingeniis ubi praesentibus, laborum ea irure nescius. Nulla
                    proident eu voluptate ea noster si sed ipsum cernantur, quo cillum graviterque
                    ad esse mentitum a quibusdam. Iudicem do laborum, qui aute philosophari ex
                    nostrud multos magna ex nisi, commodo multos cupidatat aliquip ne ex velit
                    fabulas philosophari, non offendit de fabulas id eu a distinguantur e dolor non
                    proident.`
                }, {
                    title: 'Job #3',
                    body: `Sed enim vidisse ne proident velit fore sed quem. Ab de consectetur est
                    incididunt dolore mentitum aliquip non probant ab aute iis eu enim sunt amet
                    ullamco. Non sint efflorescere, fore transferrem occaecat fugiat vidisse. Ea a
                    nulla dolor aliqua, consequat multos fabulas, ubi aut quae doctrina, consequat
                    sed aliqua quamquam.Veniam quamquam hic enim tamen se duis ut nostrud id id
                    veniam nostrud tractavissent ut hic o consectetur, cernantur si multos, qui eu
                    sempiternum ad si amet cernantur praesentibus, do in magna tamen magna. Amet
                    relinqueret incurreret quis arbitror aut aute nam offendit o senserit dolor
                    nescius proident non e labore quibusdam arbitror. Excepteur nisi quamquam
                    quibusdam.`
                }, {
                    title: 'Job #4',
                    body: `Cupidatat legam dolor qui fore se admodum de eiusmod hic ad aut esse arbitror,
                    aliqua ita e quid quibusdam sed legam voluptate se malis anim do esse fabulas
                    nam distinguantur, occaecat elit anim mandaremus cillum non nisi est in fore
                    pariatur. Veniam mentitum de fugiat elit in dolor cupidatat nam fidelissimae,
                    aliquip qui illum, te tamen ne export. Illum do a dolore ingeniis te ipsum
                    proident incididunt ex probant reprehenderit non commodo, enim possumus
                    imitarentur de quo legam occaecat tractavissent, an duis noster aute laborum a
                    deserunt ea eiusmod, ex cernantur in officia. Ex ad concursionibus.Quid
                    incurreret possumus, deserunt fore quamquam admodum. Nisi officia e appellat,
                    mentitum multos nam occaecat efflorescere quo duis do ne ipsum iudicem o nostrud
                    velit noster ingeniis magna, appellat ita quem occaecat, singulis multos aliqua
                    an esse, hic nisi occaecat nescius, ad aute nam nisi. Litteris est constias si
                    quis familiaritatem quamquam quorum mandaremus, expetendis export noster o
                    dolore, probant nam proident. De nulla dolore in doctrina.`
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
        this.$bvModal.show('modal-under-construction')
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
    width: 30vw;

    margin-top: 125px;
    margin-right: 25px;
}

.job {
    display: block;
    max-height: 65px;
    overflow: auto;
}
</style>
