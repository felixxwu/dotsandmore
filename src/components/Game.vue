<template>
    <div class="game">
        <Score />
        <Grid />
        <div class="message">{{ message }}</div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import Grid from './Grid.vue'
import Score from '@/components/Score.vue'

@Options({
    components: {
        Score,
        Grid,
    },
})
export default class Game extends Vue {
    get message(): string {
        if (store.state.populatingLines) return 'Populating...'
        if (store.state.errorMessage.length > 0) return store.state.errorMessage
        return `${store.state.turn === 0 ? 'Blue' : 'Red'}'s turn`
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

.message {
    padding: var(--padding1);
    font-family: 'Lexend Deca', sans-serif;
    color: var(--fg);
}
</style>
