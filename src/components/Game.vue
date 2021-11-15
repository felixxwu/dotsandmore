<template>
    <div class="game">
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

.message {
    padding: var(--padding1);
    font-family: 'Lexend Deca', sans-serif;
    color: var(--fg1);
}
</style>
