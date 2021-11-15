<template>
    <canvas ref="canvas" :width="resolution.x" :height="resolution.y" />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Ref} from 'vue-property-decorator'
import store from '@/store/index'
import getCanvasResolution from '@/utils/getCanvasResolution'

export default class Canvas extends Vue {
    @Ref() readonly canvas: HTMLCanvasElement

    mounted(): void {
        store.commit('setCanvas', this.canvas)
    }

    get resolution(): ReturnType<typeof getCanvasResolution> {
        return getCanvasResolution()
    }
}
</script>

<style scoped></style>
