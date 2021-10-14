import {createStore} from 'vuex'

const state = {
    paddingMed: 10,
    appWidth: 0,
    appHeight: 0,
}

const units = <{[key in keyof typeof state]: string}>{
    paddingMed: 'px',
    appWidth: 'px',
    appHeight: 'px',
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
        setAppSize(state, size: {width: number; height: number}) {
            state.appWidth = size.width
            state.appHeight = size.height
        },
    },
    actions: {},
    modules: {},
})
