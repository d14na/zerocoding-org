<template>
    <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
            <i class="fa fa-code mr-2"></i>
            <strong>JQuery</strong>
        </div>

        <p>
            jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
        </p>

        <b-list-group>
            <b-list-group-item>
                <strong>jquery-v3.3.1.min.js</strong>
                <button class="btn-pill btn-sm btn-light disabled ml-2">86.9k</button>
                <Links
                    min="QmRbr6GPmMaXViCSY6fErfB14WWdCMBESyRzTPdk6VvjDu"
                    map="Qmd81mDYLoJc4yRGrDfsTSiX8F6i3RP3ofHfahqJtYnVNN"
                    full="QmWmzYYF9dAcqMDqDjCue4ChpDmAexizqqKp6vngYgWjju" />
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
/* Import components. */
const Links = () => import('./Links')

export default {
    components: {
        Links
    }
}
</script>
