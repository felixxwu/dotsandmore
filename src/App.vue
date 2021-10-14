<template>
    <div id="app">
        <Game />

        <AppSizeUpdater />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import AppSizeUpdater from '@/components/AppSizeUpdater.vue'
import Game from '@/components/Game.vue'

@Options({
    components: {
        AppSizeUpdater,
        Game,
    },
})
export default class App extends Vue {
    mounted(): void {
        store.commit('initialise')
        store.commit('setGridSize', {w: 20, h: 20})
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
    background-color: var(--bg);
}
</style>
