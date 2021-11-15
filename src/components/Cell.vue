<template>
    <div class="cell">
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

export default class Cell extends Vue {
    @Prop() readonly coord: Coord

    inRangeOfFirstClick = false

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
    position: relative;
    justify-content: center;
    align-items: center;
    width: var(--cellWidth);
    height: var(--cellWidth);
    cursor: pointer;
    touch-action: none;
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
    fill: var(--fg1p5);
}
</style>
