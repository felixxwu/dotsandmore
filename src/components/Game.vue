<template>
    <div class="game">
        <Grid />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

import Grid from './Grid.vue'

@Options({
    components: {
        Grid,
    },
})
export default class Game extends Vue {}
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
