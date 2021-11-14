import {Coord} from '@/types'
import store from '@/store/index'

export default (): Coord => {
    return {
        x: Math.floor(Math.random() * store.state.gridSizeW),
        y: Math.floor(Math.random() * store.state.gridSizeH),
    }
}
