import {createStore} from 'vuex'
import {LineType, Coord, FillPoint} from '@/types.d.ts'
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
        setLineLength(state, length: number) {
            state.maxLineLength = length
        },
        addLine(state, line: LineType) {
            state.lines.push(line)
            state.clickedCoord = null
            state.linePreview = null
        },
        clickCoord(state, coord: Coord) {
            state.clickedCoord = coord
        },
        clearClickedCoord(state) {
            state.clickedCoord = null
        },
        setLinePreview(state, line: LineType) {
            state.linePreview = line
        },
        setLightSourcePos(state, pos: Coord) {
            state.lightSource = pos
        },
        setCanvas(state, canvas: HTMLCanvasElement) {
            state.canvas = canvas
        },
        changeTurn(state) {
            state.turn = state.turn === 0 ? 1 : 0
        },
        addFillPoint(state, fillPoint: FillPoint) {
            state.fillPoints.push(fillPoint)
        },
        setPopulatingLines(state, value: boolean) {
            state.populatingLines = value
        },
        setAreaCovered(state, value: number[]) {
            state.areaCovered = value
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
