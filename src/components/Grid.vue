<template>
    <div class="grid" ref="grid">
        <div
            class="touch-surface"
            @pointerdown="handlePointerDown"
            @pointermove="handlePointerMove"
            @pointerup="handlePointerUp"
            @pointerleave="handlePointerLeave"
        />
        <Canvas class="canvas" />
        <svg class="shadows">
            <Shadow v-for="line in lines" :key="line" :line-data="line" :grid="grid" />
        </svg>
        <svg class="lines">
            <Line v-if="linePreview !== null" :line-data="linePreview" :is-preview="true" />
            <Line v-for="line in lines" :key="line" :line-data="line" :is-preview="false" />
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
import isSameCoordinate from '@/utils/isSameCoordinate'
import createLine from '@/utils/createLine'
import getCoord from '@/utils/getCoord'
import Shadow from '@/components/Shadow.vue'
import {Ref} from 'vue-property-decorator'
import Canvas from '@/components/Canvas.vue'
import addLineIfItDoesntExist from '@/utils/addLineIfItDoesntExist'

@Options({
    components: {
        Canvas,
        Shadow,
        Cell,
        Line,
    },
})
export default class Grid extends Vue {
    @Ref() readonly grid: HTMLDivElement

    handlePointerDown(e: PointerEvent): void {
        const coord = getCoord(e)
        if (coord === null) return
        store.commit('clickCoord', coord)
    }

    handlePointerMove(e: PointerEvent): void {
        const coord = getCoord(e)
        if (e.buttons === 0) return
        if (store.state.clickedCoord === null) return
        if (coord === null || isSameCoordinate(store.state.clickedCoord, coord)) {
            store.commit('setLinePreview', null)
        } else {
            store.commit('setLinePreview', createLine(store.state.clickedCoord, coord))
        }
    }

    handlePointerUp(e: PointerEvent): void {
        const coord = getCoord(e)
        if (coord === null) return
        if (store.state.clickedCoord === null) return
        if (isSameCoordinate(store.state.clickedCoord, coord)) {
            this.resetPreview()
        } else {
            const newLine = createLine(store.state.clickedCoord, coord)
            const lineExists = addLineIfItDoesntExist(newLine)
            if (lineExists) this.resetPreview()
        }
    }

    handlePointerLeave(): void {
        store.commit('setLinePreview', null)
    }

    resetPreview(): void {
        store.commit('setLinePreview', null)
        store.commit('clickCoord', null)
    }

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

    get linePreview(): LineType | null {
        return store.state.linePreview
    }
}
</script>

<style scoped>
.grid,
.lines,
.touch-surface,
.canvas {
    width: calc(var(--gridSizeW) * var(--cellWidth));
    height: calc(var(--gridSizeH) * var(--cellWidth));
}

.grid {
    display: grid;
    grid-template-rows: repeat(var(--gridSizeH), 1fr);
    grid-template-columns: repeat(var(--gridSizeW), 1fr);
}

.lines {
    position: absolute;
    pointer-events: none;
}

.touch-surface {
    position: absolute;
    cursor: pointer;
    touch-action: none;
}

.canvas {
    position: absolute;
    pointer-events: none;
}

.shadows {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--appWidth);
    height: var(--appHeight);
    pointer-events: none;
    opacity: var(--shadowOpacity);
    filter: blur(var(--shadowBlurRadius));
}
</style>
