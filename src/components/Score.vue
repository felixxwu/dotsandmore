<template>
    <div class="bar">
        <div
            v-for="score in scores"
            :key="score"
            class="score"
            :style="`width: ${score.width}px; background-color: ${score.colour}; transition: 1s;`"
        >
            <span v-show="score.score > minScore">{{ score.score }}%</span>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import store from '@/store/index'

export default class Score extends Vue {
    get scores(): {colour: string; score: number; width: number}[] {
        const red = store.state.playerColours[0].css
        const blue = store.state.playerColours[1].css
        const p0 = store.state.areaCovered[0]
        const p1 = store.state.areaCovered[1]
        const gridSize = store.state.gridSizeW * store.state.cellWidth
        if (p0 === 0 && p1 === 0)
            return [
                {colour: red, score: 50, width: gridSize / 2},
                {colour: blue, score: 50, width: gridSize / 2},
            ]
        const redPercent = parseFloat(((p0 / (p0 + p1)) * 100).toFixed(store.state.scoreDecimalPlaces))
        const bluePercent = parseFloat(((p1 / (p0 + p1)) * 100).toFixed(store.state.scoreDecimalPlaces))
        return [
            {colour: red, score: redPercent, width: (redPercent * gridSize) / 100},
            {colour: blue, score: bluePercent, width: (bluePercent * gridSize) / 100},
        ]
    }

    get minScore(): typeof store.state.hideScoresUnder {
        return store.state.hideScoresUnder
    }
}
</script>

<style scoped>
.bar {
    width: calc(var(--gridSizeW) * var(--cellWidth));
    display: flex;
    margin: var(--padding1);
    font-family: 'Lexend Deca', sans-serif;
    color: var(--fg);
    border-radius: 10px;
    overflow: hidden;
}

.score {
    display: inline-block;
    text-align: center;
}
</style>
