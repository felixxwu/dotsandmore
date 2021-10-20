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
        store.commit('setGridSize', {w: 7, h: 7})
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
    animation: colour-loop 60s infinite linear;
}

@keyframes colour-loop {
    0% {
        background-color: hsl(0, 100%, 95%);
    }
    33% {
        background-color: hsl(120, 100%, 95%);
    }
    67% {
        background-color: hsl(240, 100%, 95%);
    }
    100% {
        background-color: hsl(360, 100%, 95%);
    }
}
</style>
