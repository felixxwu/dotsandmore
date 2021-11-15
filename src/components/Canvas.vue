<template>
    <canvas ref="canvas" :width="resolution.x" :height="resolution.y" />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Ref, Watch} from 'vue-property-decorator'
import store from '@/store/index'
import getCanvasResolution from '@/utils/getCanvasResolution'
import getCanvasLines from '@/utils/getCanvasLines'
import {CanvasLine} from '@/types'
import updateCanvas from '@/utils/updateCanvas'

export default class Canvas extends Vue {
    @Ref() readonly canvas: HTMLCanvasElement

    mounted(): void {
        store.commit('setCanvas', this.canvas)
    }

    get resolution(): ReturnType<typeof getCanvasResolution> {
        return getCanvasResolution()
    }

    get canvasLines(): CanvasLine[] | null {
        return getCanvasLines()
    }

    @Watch('canvasLines')
    canvasLinesChange(): void {
        updateCanvas()
    }
}
</script>

<style scoped></style>
