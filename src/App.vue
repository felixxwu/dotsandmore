<template>
    <div id="app">
        Hello world

        <AppSizeUpdater />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
// import store from './store/index'

import AppSizeUpdater from '@/components/AppSizeUpdater.vue'

@Options({
    components: {
        AppSizeUpdater,
    },
})
export default class App extends Vue {}
</script>

<style>
body {
    margin: 0;
    overflow: hidden;
}

#app {
    width: var(--appWidth);
    height: var(--appHeight);
}
</style>
