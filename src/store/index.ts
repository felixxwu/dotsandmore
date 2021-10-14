import {createStore} from 'vuex'

const state = {
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    gridSizeW: 0,
    gridSizeH: 0,
    dotSize: 5,
}

const units = <{[key in keyof typeof state]: string}>{
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    gridSizeW: '',
    gridSizeH: '',
    dotSize: 'px',
}

export default createStore({
    state: new Proxy(state, {
        set: (obj, prop: keyof typeof state, value): boolean => {
            obj[prop] = value
            document.body.style.setProperty(`--${prop}`, value + units[prop])
            return true
        },
    }),
    mutations: {
        initialise(state) {
            const storeKeys = Object.keys(state) as Array<keyof typeof state>
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
    },
    actions: {},
    modules: {},
})
