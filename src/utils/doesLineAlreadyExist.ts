import store from '@/store/index'
import {LineType} from '@/types'
import isSameLine from '@/utils/isSameLine'

export default (newLine: LineType): boolean => {
    const lines = store.state.lines
    for (const line of lines) {
        if (isSameLine(line, newLine)) {
            return true
        }
    }
    return false
}
