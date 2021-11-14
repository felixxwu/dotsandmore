<template>
    <polygon class="polygon" :points="shadowPos" stroke="none" fill="black" />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
import {LineType} from '@/types.d.ts'
import store from '@/store/index'
import shortenLine from '@/utils/shortenLine'
import projectToLine from '@/utils/projectToLine'
import euclideanDistance from '@/utils/euclideanDistance'

export default class Shadow extends Vue {
    @Prop() readonly lineData: LineType
    @Prop() readonly grid: HTMLDivElement

    prevShadowPos = ''

    get shadowPos(): string {
        const p = store.state.lightSource
        const gridRect = this.grid.getClientRects()[0]
        const clientPosLine: LineType = {
            start: {
                x: gridRect.left + this.lineData.start.x * store.state.cellWidth + store.state.cellWidth / 2,
                y: gridRect.top + this.lineData.start.y * store.state.cellWidth + store.state.cellWidth / 2,
            },
            end: {
                x: gridRect.left + this.lineData.end.x * store.state.cellWidth + store.state.cellWidth / 2,
                y: gridRect.top + this.lineData.end.y * store.state.cellWidth + store.state.cellWidth / 2,
            },
        }
        const mouseToLineStart = {start: p, end: clientPosLine.start}
        const mouseToLineStartLonger = shortenLine(mouseToLineStart, window.innerWidth + window.innerHeight)
        const lineStartToHorizon = {start: clientPosLine.start, end: mouseToLineStartLonger.end}

        const mouseToLineEnd = {start: p, end: clientPosLine.end}
        const mouseToLineEndLonger = shortenLine(mouseToLineEnd, window.innerWidth + window.innerHeight)
        const lineEndToHorizon = {start: clientPosLine.end, end: mouseToLineEndLonger.end}

        const lineMidPoint = projectToLine(p, clientPosLine)
        const mouseToLineMid = {start: p, end: lineMidPoint}
        const lineMidLength = euclideanDistance(mouseToLineMid.start, mouseToLineMid.end)
        if (lineMidLength < store.state.minDistanceToLineForShadow) return this.prevShadowPos
        const mouseToLineMidLonger = shortenLine(mouseToLineMid, window.innerWidth + window.innerHeight)

        const shadowPos = `
            ${lineStartToHorizon.start.x},${lineStartToHorizon.start.y}
            ${lineStartToHorizon.end.x},${lineStartToHorizon.end.y}

            ${mouseToLineMidLonger.end.x},${mouseToLineMidLonger.end.y}

            ${lineEndToHorizon.end.x},${lineEndToHorizon.end.y}
            ${lineEndToHorizon.start.x},${lineEndToHorizon.start.y}
        `
        this.prevShadowPos = shadowPos
        return shadowPos
    }
}
</script>

<style scoped></style>
