<template>
    <div />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import setStoreValue from '@/utils/setStoreValue'

export default class AppSizeUpdater extends Vue {
    // noinspection JSUnusedGlobalSymbols
    mounted(): void {
        window.onresize = this.updateWindowSize
        this.updateWindowSize()
    }

    updateWindowSize(): void {
        setStoreValue('appWidth', window.innerWidth)
        setStoreValue('appHeight', window.innerHeight)
        document.body.style.width = window.innerWidth + 'px'
        document.body.style.height = window.innerHeight + 'px'
    }
}
</script>
