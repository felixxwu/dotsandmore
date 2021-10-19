<template>
    <div class="cell" @pointerdown="handlePointerDown" @pointermove="handlePointerMove" @pointerup="handlePointerUp">
        <svg class="dot">
            <!--suppress RequiredAttributes -->
            <circle class="circle" />
        </svg>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop, Watch} from 'vue-property-decorator'
import {Coord, LineType} from '@/types'
import store from '@/store/index'
import isLineTooLong from '@/utils/isLineTooLong'
import createLine from '@/utils/createLine'
import isSameCoordinate from '@/utils/isSameCoordinate'

export default class Cell extends Vue {
    @Prop() readonly coord: Coord

    inRangeOfFirstClick = false

    handlePointerDown(): void {
        store.commit('clickCoord', this.coord)
    }

    handlePointerMove(): void {
        if (store.state.clickedCoord === null) return
        if (isSameCoordinate(store.state.clickedCoord, this.coord)) {
            store.commit('setLinePreview', null)
        } else {
            store.commit('setLinePreview', createLine(store.state.clickedCoord, this.coord))
        }
    }

    handlePointerUp(): void {
        if (store.state.clickedCoord === null) return
        if (isSameCoordinate(store.state.clickedCoord, this.coord)) {
            store.commit('setLinePreview', null)
            store.commit('clickCoord', null)
        } else {
            store.commit('addLine', createLine(store.state.clickedCoord, this.coord))
        }
    }

    @Watch('$store.state.clickedCoord') clickedCoordChange(): void {
        if (!store.state.clickedCoord) {
            this.inRangeOfFirstClick = false
            return
        }
        const line: LineType = {start: store.state.clickedCoord, end: this.coord}
        this.inRangeOfFirstClick = !isLineTooLong(line)
    }
}
</script>

<style scoped>
.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--cellWidth);
    height: var(--cellWidth);
    cursor: pointer;
}

.dot {
    width: var(--dotSize);
    height: var(--dotSize);
}

/*noinspection CssUnknownProperty*/
.circle {
    cx: calc(var(--dotSize) / 2);
    cy: calc(var(--dotSize) / 2);
    r: calc(var(--dotSize) / 2);
    fill: var(--fg);
}
</style>
