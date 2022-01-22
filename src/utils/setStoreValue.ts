import {storeState} from '@/store/init'
import store from '@/store/index'

export default <T extends keyof typeof storeState>(key: T, value: typeof storeState[T]): void => {
    store.commit('set', {key, value})
}
