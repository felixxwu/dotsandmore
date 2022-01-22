<template>
    <div class="game">
        <Score />
        <Grid />
        <div class="message">{{ message }}</div>
        <Button
            v-if="showLinePopulatorButton"
            label="Populate with safe lines"
            :click-handler="populateWithSafeLines"
        />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import store from '@/store/index'

import Grid from './Grid.vue'
import Score from '@/components/Score.vue'
import Button from '@/components/Button.vue'
import addSafeLine from '@/utils/addSafeLine'

@Options({
    components: {
        Button,
        Score,
        Grid,
    },
})
export default class Game extends Vue {
    async populateWithSafeLines(): Promise<void> {
        store.commit('setPopulatingLines', true)
        let continueAdding = true
        setTimeout(() => {
            continueAdding = false
        }, store.state.populateLinesDuration)
        while (continueAdding) {
            addSafeLine()
            await new Promise((r) => setTimeout(r))
        }
        store.commit('setPopulatingLines', false)
        store.commit('setPopulatorButton', false)
    }

    get message(): string {
        if (store.state.populatingLines) return 'Populating...'
        if (store.state.errorMessage.length > 0) return store.state.errorMessage
        return `${store.state.turn === 0 ? 'Blue' : 'Red'}'s turn`
    }

    get showLinePopulatorButton(): boolean {
        return store.state.showLinePopulatorButton
    }
}
</script>

<style scoped>
.game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--appWidth);
    height: var(--appHeight);
}

.message {
    padding: var(--padding1);
    font-family: 'Lexend Deca', sans-serif;
    color: var(--fg);
    margin-bottom: var(--paddingMed);
}
</style>
