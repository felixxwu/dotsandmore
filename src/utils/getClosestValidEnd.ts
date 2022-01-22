import {Coord, LineType} from '@/types'
import isLineTooLong from '@/utils/isLineTooLong'
import getFourClosestCoords from '@/utils/getFourClosestCoords'
import isSameCoordinate from "@/utils/isSameCoordinate";

export default (line: LineType): Coord | null => {
    const closestCoords = getFourClosestCoords(line.end)
    const closestCoord = closestCoords.find((coord) => {
        const lineToCheck = {start: line.start, end: coord}
        return !isLineTooLong(lineToCheck) && !isSameCoordinate(lineToCheck.start, lineToCheck.end)
    })
    if (closestCoord) {
        return closestCoord
    } else {
        return null
    }
}
