import {LineType} from '@/types'
import store from '@/store/index'

export default (line: LineType): boolean => {
    const squaredLength = Math.pow(line.start.x - line.end.x, 2) + Math.pow(line.start.y - line.end.y, 2)
    const squaredMaxLength = Math.pow(store.state.maxLineLength, 2)
    return squaredMaxLength > squaredLength
}
