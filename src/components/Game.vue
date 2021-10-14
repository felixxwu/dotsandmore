<template>
    <div class="game" @click="addLine">
        <Grid />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

import Grid from './Grid.vue'
import store from '@/store/index'

@Options({
    components: {
        Grid,
    },
})
export default class Game extends Vue {
    addLine(): void {
        store.commit('addLine', {start: {x: 0, y: 0}, end: {x: 5, y: 2}})
    }
}
</script>

<style scoped>
.game {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--appWidth);
    height: var(--appHeight);
}
</style>
