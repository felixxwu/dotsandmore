<template>
    <div class="row" v-for="row in Object.keys([...Array(size.w)])" :key="row">
        <div class="cell" v-for="col in Object.keys([...Array(size.h)])" :key="col">{{ row }}{{ col }}</div>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

export default class AppSizeUpdater extends Vue {
    @Prop() readonly size: {w: number; h: number} | null = null
}
</script>

<style scoped>
.row {
    border: 1px grey solid;
    width: min-content;
    padding: var(--paddingMed);
}

.cell {
    display: inline;
    padding: var(--paddingMed);
}
</style>
