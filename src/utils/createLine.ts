import {Coord, LineType} from '@/types'
import store from '@/store'
import isLineTooLong from '@/utils/isLineTooLong'
import getClosestValidEnd from '@/utils/getClosestValidEnd'
import shortenLine from '@/utils/shortenLine'
import getClosestIntersection from '@/utils/getClosestIntersection'

export default (start: Coord, end: Coord): LineType => {
    const line: LineType = {start, end}
    const tooLong = isLineTooLong(line)
    if (tooLong) {
        const maxLengthLine = shortenLine(line, store.state.maxLineLength)
        const closestValidEnd = getClosestValidEnd(maxLengthLine)
        if (closestValidEnd === null) throw Error('no valid coordinates found for shortening this line')
        line.end = closestValidEnd
    }
    const closestIntersection = getClosestIntersection(line, store.state.lines)
    if (closestIntersection) line.end = closestIntersection
    return line
}
