import {Coord} from '@/types'

export default (start: Coord, end: Coord, squared = false): number => {
    const squaredDistance = Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)
    if (!squared) {
        return Math.sqrt(squaredDistance)
    } else {
        return squaredDistance
    }
}
