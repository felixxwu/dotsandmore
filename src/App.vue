<template>
    <div id="app" @mousemove="handleMouseMove">
        <Game v-if="currentScreen === 'game'" />
        <Menu v-if="currentScreen === 'menu'" />

        <AppSizeUpdater />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'
import AppSizeUpdater from '@/components/AppSizeUpdater.vue'
import Game from '@/components/Game.vue'
import {Screen} from '@/types.d.ts'
import Menu from '@/components/Menu.vue'
import setStoreValue from '@/utils/setStoreValue'

@Options({
    components: {
        Menu,
        AppSizeUpdater,
        Game,
    },
})
export default class App extends Vue {
    lightSourceUpdateQueued = false

    mounted(): void {
        document.title = 'Dots & More'
        store.commit('initialise')
    }

    handleMouseMove(e: MouseEvent): void {
        // don't try to update light source again if the previous one hasn't finished yet
        if (this.lightSourceUpdateQueued) return
        this.lightSourceUpdateQueued = true
        setTimeout(() => {
            const x = window.innerWidth / 3 + e.clientX / 3
            const point = {x: x, y: 0}
            setStoreValue('lightSource', point)
            this.lightSourceUpdateQueued = false
        })
    }

    get currentScreen(): Screen {
        return store.state.currentScreen
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

body {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    margin: 0;
    overflow: hidden;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

input {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
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
