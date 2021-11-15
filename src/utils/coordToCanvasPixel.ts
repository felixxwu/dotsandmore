import {Coord, Position} from '@/types'
import store from '@/store/index'
import getCanvasResolution from '@/utils/getCanvasResolution'

export default (coord: Coord): Position => {
    const resolution = getCanvasResolution()
    const offset = store.state.canvasResolutionPerCell / 2
    return {
        x: (coord.x * resolution.x) / store.state.gridSizeW + offset,
        y: (coord.y * resolution.y) / store.state.gridSizeH + offset,
    }
}
