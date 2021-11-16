import store from '@/store/index'
import {LineType} from '@/types'
import isSameLine from '@/utils/isSameLine'
import getCoordsLinePassesThrough from '@/utils/getCoordsLinePassesThrough'
import isSameCoordinate from '@/utils/isSameCoordinate'

export default (newLine: LineType): boolean => {
    const pointsOnNewLine = getCoordsLinePassesThrough(newLine)
    const lines = store.state.lines
    for (const line of lines) {
        if (isSameLine(line, newLine)) {
            return true
        }
        const pointsOnLine = getCoordsLinePassesThrough(line)
        let overlappingPoints = 0
        for (const pointOnLine of pointsOnLine) {
            for (const pointOnNewLine of pointsOnNewLine) {
                if (isSameCoordinate(pointOnNewLine, pointOnLine)) {
                    overlappingPoints++
                    if (overlappingPoints > 1) {
                        return true
                    }
                }
            }
        }
    }
    return false
}
