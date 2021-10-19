import {Coord, LineType} from '@/types'
import isLineTooLong from '@/utils/isLineTooLong'
import getFourClosestCoords from '@/utils/getFourClosestCoords'

export default (line: LineType): Coord | null => {
    const closestCoords = getFourClosestCoords(line.end)
    const closestCoord = closestCoords.find((coord) => {
        const lineToCheck = {start: line.start, end: coord}
        return !isLineTooLong(lineToCheck)
    })
    if (closestCoord) {
        return closestCoord
    } else {
        return null
    }
}
