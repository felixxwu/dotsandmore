import {LineType} from '@/types'
import isSameCoordinate from '@/utils/isSameCoordinate'

export default (line1: LineType, line2: LineType): boolean => {
    return (
        (isSameCoordinate(line1.start, line2.start) && isSameCoordinate(line1.end, line2.end)) ||
        (isSameCoordinate(line1.start, line2.end) && isSameCoordinate(line1.end, line2.start))
    )
}
