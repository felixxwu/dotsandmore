<template>
    <div id="app">
        Hello world
        <Grid :size="{w: 10, h: 10}" />

        <AppSizeUpdater />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import AppSizeUpdater from '@/components/AppSizeUpdater.vue'
import Grid from '@/components/Grid.vue'

@Options({
    components: {
        AppSizeUpdater,
        Grid,
    },
})
export default class App extends Vue {
    mounted(): void {
        store.commit('initialise')
    }
}
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
