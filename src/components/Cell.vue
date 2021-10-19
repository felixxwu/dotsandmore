<template>
    <div class="cell" @click="handleClick" :style="style">
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

export default class Cell extends Vue {
    @Prop() readonly coord: Coord

    inRangeOfFirstClick = false

    handleClick(): void {
        if (store.state.clickedCoord) {
            store.commit('addLine', createLine(store.state.clickedCoord, this.coord))
            console.log('line added')
        } else {
            store.commit('clickCoord', this.coord)
            console.log('click again...')
        }
    }

    get style(): string {
        return `
            background-color: ${this.inRangeOfFirstClick ? 'var(--highlight)' : ''};
        `
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

.cell:hover {
    background-color: var(--highlight);
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
