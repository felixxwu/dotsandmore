<template>
    <div class="menu">
        <div class="row">
            Line Length:
            <input
                type="number"
                :value="getStoreValue('maxLineLength')"
                @change="(e) => handleValueChange(e, 'maxLineLength')"
            />
        </div>
        <div class="row">
            Grid Size:
            <input
                type="number"
                :value="getStoreValue('gridSizeW')"
                @change="(e) => handleValueChange(e, 'gridSizeW')"
            />
            x
            <input
                type="number"
                :value="getStoreValue('gridSizeH')"
                @change="(e) => handleValueChange(e, 'gridSizeH')"
            />
        </div>
        <Button label="Start Game" :click-handler="handleClick" />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import Button from '@/components/Button.vue'
import setStoreValue from '@/utils/setStoreValue'
import store from '@/store/index'
import {storeState} from '@/store/init'

@Options({
    components: {
        Button,
    },
})
export default class Menu extends Vue {
    async handleClick(): Promise<void> {
        setStoreValue('currentScreen', 'game')
    }

    handleValueChange(event: InputEvent, key: 'maxLineLength' | 'gridSizeW' | 'gridSizeH'): void {
        const target = event.target as HTMLInputElement
        setStoreValue(key, parseFloat(target.value))
    }

    getStoreValue<T extends keyof typeof storeState>(key: T): typeof storeState[T] {
        return store.state[key]
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
    gap: var(--paddingMed);
}

.row {
    display: flex;
    align-items: center;
    gap: var(--paddingMed);
}

input {
    background-color: transparent;
    border: none;
    outline: none;
    padding: var(--paddingMed);
    width: 50px;
    text-align: center;
}
</style>
