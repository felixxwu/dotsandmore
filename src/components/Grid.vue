<template>
    <div class="grid">
        <svg class="lines">
            <Line v-for="line in lines" :key="line" :lineData="line" />
        </svg>
        <Cell v-for="coord in cellCoords" :key="coord" :coord="coord" />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import Cell from './Cell.vue'
import Line from './Line.vue'
import {Coord, LineType} from '@/types.d.ts'

@Options({
    components: {
        Cell,
        Line,
    },
})
export default class Grid extends Vue {
    get cellCoords(): Coord[] {
        let coords: Coord[] = []
        for (let y = 0; y < store.state.gridSizeH; y++) {
            for (let x = 0; x < store.state.gridSizeW; x++) {
                coords.push({x, y})
            }
        }
        return coords
    }

    get lines(): LineType[] {
        return store.state.lines
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    width: calc(var(--gridSizeW) * var(--cellWidth));
    height: calc(var(--gridSizeH) * var(--cellWidth));
    grid-template-rows: repeat(var(--gridSizeH), 1fr);
    grid-template-columns: repeat(var(--gridSizeW), 1fr);
}

.lines {
    position: absolute;
    pointer-events: none;
    width: calc(var(--gridSizeW) * var(--cellWidth));
    height: calc(var(--gridSizeH) * var(--cellWidth));
}
</style>
