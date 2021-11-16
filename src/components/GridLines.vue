<template>
    <div class="grid-lines">
        <svg class="svg">
            <line
                v-for="line in lines"
                :key="line"
                :x1="line.start.x"
                :y1="line.start.y"
                :x2="line.end.x"
                :y2="line.end.y"
                class="line"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {CssLine} from '@/types'
import store from '@/store/index'

export default class Cell extends Vue {
    get lines(): CssLine[] {
        const lines = []
        // vertical lines
        for (let i = 0; i < store.state.gridSizeH; i++) {
            lines.push({
                start: {
                    x: (i + 0.5) * store.state.cellWidth,
                    y: store.state.cellWidth / 2,
                },
                end: {
                    x: (i + 0.5) * store.state.cellWidth,
                    y: store.state.cellWidth * (store.state.gridSizeH - 0.5),
                },
            })
        }
        // horizontal lines
        for (let i = 0; i < store.state.gridSizeW; i++) {
            lines.push({
                start: {
                    x: store.state.cellWidth / 2,
                    y: (i + 0.5) * store.state.cellWidth,
                },
                end: {
                    x: store.state.cellWidth * (store.state.gridSizeW - 0.5),
                    y: (i + 0.5) * store.state.cellWidth,
                },
            })
        }
        return lines
    }
}
</script>

<style scoped>
.grid-lines {
    position: absolute;
    opacity: var(--gridLineOpacity);
    z-index: 0;
    width: calc(var(--gridSizeW) * var(--cellWidth));
    height: calc(var(--gridSizeH) * var(--cellWidth));
    touch-action: none;
}

.svg {
    touch-action: none;
    width: calc(var(--gridSizeW) * var(--cellWidth));
    height: calc(var(--gridSizeH) * var(--cellWidth));
}

.line {
    stroke: var(--fg2);
    stroke-width: var(--gridLineWidth);
}
</style>
