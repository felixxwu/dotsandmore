import {createStore} from 'vuex'
import set from '../utils/setStoreValue'

export default createStore({
    state: {
        appWidth: <number | null>null,
        appHeight: <number | null>null,
    },
    mutations: {
        setAppSize(state, size: {width: number; height: number}) {
            set('appWidth', size.width, 'px')
            set('appHeight', size.height, 'px')
        },
    },
    actions: {},
    modules: {},
})
