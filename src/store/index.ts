import {createStore} from 'vuex'
import {LineType, FillPoint} from '@/types.d.ts'
import {units, storeState} from '@/store/init'

export default createStore({
    state: new Proxy(storeState, {
        set: <T extends keyof typeof storeState>(
            obj: typeof storeState,
            prop: T,
            value: typeof storeState[T],
        ): boolean => {
            obj[prop] = value
            if (units[prop] !== 'hide') {
                document.body.style.setProperty(`--${prop}`, value + units[prop])
            }
            return true
        },
    }),
    mutations: {
        initialise: <T extends keyof typeof storeState>(state: typeof storeState) => {
            // just runs through the proxy set function for all store values once
            const storeKeys = Object.keys(state) as Array<T>
            for (const storeKey of storeKeys) {
                // eslint-disable-next-line no-self-assign
                state[storeKey] = state[storeKey]
            }
        },
        set: <T extends keyof typeof storeState>(
            state: typeof storeState,
            payload: {key: T; value: typeof storeState[T]},
        ) => {
            state[payload.key] = payload.value
        },

        addLine(state, line: LineType) {
            state.lines.push(line)
            state.clickedCoord = null
            state.linePreview = null
        },
        changeTurn(state) {
            state.turn = state.turn === 0 ? 1 : 0
        },
        addFillPoint(state, fillPoint: FillPoint) {
            state.fillPoints.push(fillPoint)
        },
        setErrorMessageTemporarily(state, message: string) {
            state.errorMessage = message
            setTimeout(() => {
                state.errorMessage = ''
            }, state.errorMessageTimeout)
        },
    },
    actions: {},
    modules: {},
})
