<template>
    <div />
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import store from '../store/index'

export default class AppSizeUpdater extends Vue {
    // noinspection JSUnusedGlobalSymbols
    mounted(): void {
        window.onresize = this.updateWindowSize
        this.updateWindowSize()
    }

    updateWindowSize(): void {
        store.commit('setAppSize', {
            w: window.innerWidth,
            h: window.innerHeight,
        })
        document.body.style.width = window.innerWidth + 'px'
        document.body.style.height = window.innerHeight + 'px'
    }
}
</script>
