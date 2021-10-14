<template>
    <line class="line" :x1="x1" :y1="y1" :x2="x2" :y2="y2" />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
import {LineType} from '@/types.d.ts'
import store from '@/store/index'

export default class Line extends Vue {
    @Prop() readonly lineData: LineType

    get x1(): number {
        return this.lineData.start.x * store.state.cellWidth + store.state.cellWidth / 2
    }

    get y1(): number {
        return this.lineData.start.y * store.state.cellWidth + store.state.cellWidth / 2
    }

    get x2(): number {
        return this.lineData.end.x * store.state.cellWidth + store.state.cellWidth / 2
    }

    get y2(): number {
        return this.lineData.end.y * store.state.cellWidth + store.state.cellWidth / 2
    }
}
</script>

<style scoped>
.line {
    stroke-width: var(--dotSize);
    stroke: var(--fg);
    stroke-linecap: round;
}
</style>
