import {createStore} from 'vuex'
import {LineType, Coord} from '@/types.d.ts'

const storeState = {
    // lengths
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    dotSize: 4,

    // numbers
    gridSizeW: 0,
    gridSizeH: 0,
    maxLineLength: 5,

    // colours
    bg: '#eee',
    fg: '#555',
    highlight: 'rgba(0,0,0,0.1)',

    // other
    lines: <LineType[]>[],
    clickedCoord: <Coord | null>null,
}

const units = <{[key in keyof typeof storeState]: string}>{
    // lengths
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    dotSize: 'px',

    // numbers
    gridSizeW: '',
    gridSizeH: '',
    maxLineLength: '',

    // colours
    bg: '',
    fg: '',
    highlight: '',

    // other
    lines: 'hide',
    clickedCoord: 'hide',
}

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
        addLine(state, line: LineType) {
            state.lines.push(line)
            state.clickedCoord = null
        },
        clickCoord(state, coord: Coord) {
            state.clickedCoord = coord
        },
        clearClickedCoord(state) {
            state.clickedCoord = null
        },
    },
    actions: {},
    modules: {},
})
