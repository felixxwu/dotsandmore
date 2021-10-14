import {createStore} from 'vuex'
import {Line} from '@/types.d.ts'

const storeState = {
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    gridSizeW: 0,
    gridSizeH: 0,
    dotSize: 4,
    bg: '#eee',
    fg: '#555',
    lines: <Line[]>[],
}

const units = <{[key in keyof typeof storeState]: string}>{
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    gridSizeW: '',
    gridSizeH: '',
    dotSize: 'px',
    bg: '',
    fg: '',
    lines: '',
}

export default createStore({
    state: new Proxy(storeState, {
        set: <T extends keyof typeof storeState>(
            obj: typeof storeState,
            prop: T,
            value: typeof storeState[T],
        ): boolean => {
            obj[prop] = value
            document.body.style.setProperty(`--${prop}`, value + units[prop])
            return true
        },
    }),
    mutations: {
        initialise: <T extends keyof typeof storeState>(state: typeof storeState) => {
            const storeKeys = Object.keys(state) as Array<T>
            for (const storeKey of storeKeys) {
                // eslint-disable-next-line no-self-assign
                state[storeKey] = state[storeKey]
            }
        },
        setAppSize(state, size: {w: number; h: number}) {
            state.appWidth = size.w
            state.appHeight = size.h
        },
        setGridSize(state, size: {w: number; h: number}) {
            state.gridSizeW = size.w
            state.gridSizeH = size.h
        },
        addLine(state, line: Line) {
            state.lines.push(line)
            console.log('line', line)
        },
    },
    actions: {},
    modules: {},
})
