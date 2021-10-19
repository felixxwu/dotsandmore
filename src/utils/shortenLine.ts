import {LineType} from '@/types'
import euclideanDistance from '@/utils/euclideanDistance'

export default (line: LineType, distance: number): LineType => {
    const lineLength = euclideanDistance(line.start, line.end)
    const distanceRatio = distance / lineLength
    const newEnd = {
        x: (1 - distanceRatio) * line.start.x + distanceRatio * line.end.x,
        y: (1 - distanceRatio) * line.start.y + distanceRatio * line.end.y,
    }
    return {start: line.start, end: newEnd}
}
