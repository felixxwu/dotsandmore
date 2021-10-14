import {createStore} from 'vuex'

const state = {
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    gridSizeW: 0,
    gridSizeH: 0,
    dotSize: 5,
    bg: '#eee',
    fg: '#555',
}

const units = <{[key in keyof typeof state]: string}>{
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    gridSizeW: '',
    gridSizeH: '',
    dotSize: 'px',
    bg: '',
    fg: '',
}

export default createStore({
    state: new Proxy(state, {
        set: <T extends keyof typeof state>(obj: typeof state, prop: T, value: typeof state[T]): boolean => {
            obj[prop] = value
            document.body.style.setProperty(`--${prop}`, value + units[prop])
            return true
        },
    }),
    mutations: {
        initialise: <T extends keyof typeof state>(store: typeof state) => {
            const storeKeys = Object.keys(store) as Array<T>
            for (const storeKey of storeKeys) {
                // eslint-disable-next-line no-self-assign
                store[storeKey] = store[storeKey]
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
    },
    actions: {},
    modules: {},
})
