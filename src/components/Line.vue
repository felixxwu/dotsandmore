<template>
    <line class="line" :x1="linePos.x1" :y1="linePos.y1" :x2="linePos.x2" :y2="linePos.y2" :style="style" />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
import {LineType} from '@/types.d.ts'
import store from '@/store/index'

export default class Line extends Vue {
    @Prop() readonly lineData: LineType
    @Prop() readonly isPreview: boolean

    get linePos(): {x1: number; y1: number; x2: number; y2: number} {
        return {
            x1: (this.lineData.start.x + 0.5) * store.state.cellWidth,
            y1: (this.lineData.start.y + 0.5) * store.state.cellWidth,
            x2: (this.lineData.end.x + 0.5) * store.state.cellWidth,
            y2: (this.lineData.end.y + 0.5) * store.state.cellWidth,
        }
    }

    get style(): string {
        return `
            stroke: var(--${this.isPreview ? 'fg2' : 'fg'})
        `
    }
}
</script>

<style scoped>
.line {
    stroke-width: var(--dotSize);
    stroke-linecap: round;
}
</style>
