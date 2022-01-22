import {LineType} from '@/types'
import store from '@/store/index'
import euclideanDistance from '@/utils/euclideanDistance'

export default (line: LineType): boolean => {
    const squaredLength = euclideanDistance(line.start, line.end, true)
    const squaredMaxLength = Math.pow(store.state.maxLineLength, 2)
    return squaredMaxLength < squaredLength
}
