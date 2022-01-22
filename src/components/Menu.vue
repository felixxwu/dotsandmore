<template>
    <div class="menu">
        <Button label="Start Game" :click-handler="handleClick" />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import Button from '@/components/Button.vue'
import setStoreValue from '@/utils/setStoreValue'

@Options({
    components: {
        Button,
    },
})
export default class Menu extends Vue {
    async handleClick(): Promise<void> {
        setStoreValue('currentScreen', 'game')
    }
}
</script>

<style scoped>
.menu {
    width: var(--appWidth);
    height: var(--appHeight);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
