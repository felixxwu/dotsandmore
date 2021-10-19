import {Coord, LineType} from '@/types'
import isLineTooLong from '@/utils/isLineTooLong'
import getFourClosestCoords from '@/utils/getFourClosestCoords'

export default (line: LineType): Coord | null => {
    const closestCoords = getFourClosestCoords(line.end)
    console.log('closestCoords', closestCoords)
    const closestCoord = closestCoords.find((coord) => {
        const lineToCheck = {start: line.start, end: coord}
        console.log('lineToCheck', lineToCheck)
        return !isLineTooLong(lineToCheck)
    })
    if (closestCoord) {
        return closestCoord
    } else {
        return null
    }
}
