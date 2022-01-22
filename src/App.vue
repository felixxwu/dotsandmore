<template>
    <div id="app" @mousemove="handleMouseMove">
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
    lightSourceUpdateQueued = false

    mounted(): void {
        document.title = 'Dots & More'
        store.commit('initialise')
        store.commit('setGridSize', {w: 8, h: 8})
        store.commit('setLineLength', 1.5)
    }

    handleMouseMove(e: MouseEvent): void {
        // don't try to update light source again if the previous one hasn't finished yet
        if (this.lightSourceUpdateQueued) return
        this.lightSourceUpdateQueued = true
        setTimeout(() => {
            const x = window.innerWidth / 3 + e.clientX / 3
            const point = {x: x, y: 0}
            store.commit('setLightSourcePos', point)
            this.lightSourceUpdateQueued = false
        })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

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
