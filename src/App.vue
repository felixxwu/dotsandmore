<template>
    <div id="app" @mousemove="handleMouseMove">
        <Game />

        <AppSizeUpdater />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'
import {throttle} from 'throttle-debounce'
import AppSizeUpdater from '@/components/AppSizeUpdater.vue'
import Game from '@/components/Game.vue'
import {Coord} from '@/types'

@Options({
    components: {
        AppSizeUpdater,
        Game,
    },
})
export default class App extends Vue {
    updateLightSourceInStore = throttle(store.state.mouseThrottle, false, (point: Coord) => {
        setTimeout(() => {
            store.commit('setLightSourcePos', point)
        })
    })

    mounted(): void {
        store.commit('initialise')
        store.commit('setGridSize', {w: 10, h: 10})
    }

    handleMouseMove(e: MouseEvent): void {
        setTimeout(() => {
            const point = {x: e.clientX, y: e.clientY}
            this.updateLightSourceInStore(point)
        })
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
        background-color: hsl(240, var(--bgSat), var(--bgLight));
    }
    33% {
        background-color: hsl(360, var(--bgSat), var(--bgLight));
    }
    67% {
        background-color: hsl(480, var(--bgSat), var(--bgLight));
    }
    100% {
        background-color: hsl(600, var(--bgSat), var(--bgLight));
    }
}
</style>
