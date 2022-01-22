<template>
    <div class="button">
        <div v-if="loading" class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div v-else @click="handleClick">{{ label }}</div>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

export default class Button extends Vue {
    @Prop() readonly label: string
    @Prop() readonly clickHandler: () => Promise<void>

    loading = false

    handleClick(): void {
        this.loading = true
        this.clickHandler().then(() => {
            this.loading = false
        })
    }
}
</script>

<style scoped>
.button {
    font-family: 'Lexend Deca', sans-serif;
    width: var(--buttonWidth);
    height: var(--buttonHeight);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--fg);
    cursor: pointer;
    color: var(--fg);
}

.button:hover {
    background-color: var(--highlight);
}

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 13px;
    transform: scale(0.5);
}

.lds-ellipsis div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--fg);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
}
</style>
