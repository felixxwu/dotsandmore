import {Coord} from '@/types'

export default (coord1: Coord, coord2: Coord): boolean => {
    return coord1.x === coord2.x && coord1.y === coord2.y
}
