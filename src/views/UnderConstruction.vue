<template>
    <div>
        <b-tabs content-class="mt-3" justified card>
            <b-tab active>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Dev Status</strong>
                    <strong class="d-sm-none">Status</strong>
                </template>

                <div class="coming-soon-content">
                    We're BUIDLing something wonderful, just you wait and see.
                </div>
            </b-tab>
            <b-tab>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">User Wishlist</strong>
                    <strong class="d-sm-none">Wishlist</strong>
                </template>

                <div class="coming-soon-content">
                    Est quis enim summis excepteur id fore e admodum ad cillum aut iis duis officia
                    ex commodo quid summis senserit aute, non dolore proident non iis summis tempor
                    magna cernantur si fabulas in quis o e ubi reprehenderit. Labore ad ex veniam
                    iudicem, eiusmod duis nostrud ingeniis non ut aute fidelissimae, incurreret ne
                    malis constias si ea ubi quid summis dolore, ne multos offendit, a veniam fugiat
                    aliqua proident, mandaremus est voluptate. Aliquip ne fugiat ad aliqua eu
                    incurreret te fore, ullamco aliqua offendit mandaremus ad hic minim ita export.
                    Ad elit multos esse possumus et ad offendit hic voluptate, veniam an ea aliqua
                    occaecat eu eu quae quid quis incididunt aut se deserunt adipisicing do aliqua
                    comprehenderit mentitum aliqua cernantur, hic aliqua arbitrantur, quibusdam a
                    probant.Commodo ut duis, hic legam eruditionem, illum voluptatibus arbitror enim
                    incididunt, se tempor minim te ullamco, summis laboris arbitror se ut fore
                    admodum nostrud hic et non domesticarum, nam nulla appellat excepteur. Ubi velit
                    imitarentur, o anim eram velit probant, ex velit excepteur occaecat, do quae
                    tractavissent. Si quem firmissimum an admodum veniam o cupidatat eruditionem do
                    nisi ex litteris do magna, iis deserunt comprehenderit.
                </div>
            </b-tab>
            <b-tab>
                <template v-slot:title>
                    <strong class="d-none d-sm-inline-flex">Make A Wish</strong>
                    <strong class="d-sm-none">Wish</strong>
                </template>

                <div class="coming-soon-content">
                    <p>
                        We need your help in getting this project up and running.
                        Please let us know what you need to make it great!
                    </p>

                    Ex incididunt transferrem. Te cernantur consectetur, mentitum tamen enim ut
                    dolor. Mandaremus enim tamen e aliqua est nisi occaecat ad magna minim, cillum
                    de id tempor incurreret de sed labore iudicem occaecat.Ex sint coniunctione ea
                    qui est enim aute dolore, ab officia o appellat, si ita praetermissum, ut
                    voluptate despicationes, nam enim eram a voluptate ut non summis est esse a
                    cupidatat eram ubi expetendis graviterque. Ullamco do sunt. Laboris o quid
                    constias.
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            //
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
    }
}
</script>
