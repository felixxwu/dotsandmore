<template>
    <div class="grid">
        <Cell v-for="coord in cellCoords" :key="coord" />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
// import {Prop} from 'vue-property-decorator'
import store from '@/store/index'

import Cell from './Cell.vue'

@Options({
    components: {
        Cell,
    },
})
export default class Grid extends Vue {
    get cellCoords(): {x: number; y: number}[] {
        let coords: {x: number; y: number}[] = []
        for (let x = 0; x < store.state.gridSizeW; x++) {
            for (let y = 0; y < store.state.gridSizeH; y++) {
                coords.push({x, y})
            }
        }
        return coords
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
</style>
