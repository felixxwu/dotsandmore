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
import {Prop} from 'vue-property-decorator'

export default class AppSizeUpdater extends Vue {
    @Prop() readonly size: {w: number; h: number} | null = null
}
</script>

<style scoped>
.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--cellWidth);
    height: var(--cellWidth);
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
    fill: black;
}
</style>
