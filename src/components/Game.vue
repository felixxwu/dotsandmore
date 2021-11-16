<template>
    <div class="game">
        <div class="area">{{ areaCovered }}</div>
        <Grid />
        <div class="message">{{ message }}</div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import Grid from './Grid.vue'

@Options({
    components: {
        Grid,
    },
})
export default class Game extends Vue {
    get areaCovered(): string {
        const p0 = store.state.areaCovered[0]
        const p1 = store.state.areaCovered[1]
        if (p0 === 0 && p1 === 0) return 'Red: 0% Blue: 0%'
        const redPercent = ((p0 / (p0 + p1)) * 100).toFixed(2)
        const bluePercent = ((p1 / (p0 + p1)) * 100).toFixed(2)
        return `Red: ${redPercent}% Blue: ${bluePercent}%`
    }

    get message(): string {
        if (store.state.populatingLines) {
            return 'Populating...'
        } else {
            return `${store.state.turn === 0 ? 'Blue' : 'Red'}'s turn.`
        }
    }
}
</script>

<style scoped>
.game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--appWidth);
    height: var(--appHeight);
}

.area,
.message {
    padding: var(--padding1);
    font-family: 'Lexend Deca', sans-serif;
    color: var(--fg);
}
</style>
