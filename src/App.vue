<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'zerocoding'
}
</script>

<style lang="scss">
// CoreUI Icons Set
@import '~@coreui/icons/css/coreui-icons.min.css';

/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';

/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';

/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';

// Import Main styles for this application
@import 'assets/scss/style';

/* Initialize GLOBAL styles. */
// FIXME: Move to external stylesheet.

/* Creates a clickable item. */
.clickable {
    cursor: pointer;
}

/* Adds a divider / horizontal-rule. */
.divider {
    border-top: 1px solid rgba(180, 180, 180, 0.3);
    margin: 10px 5px;
}
</style>
