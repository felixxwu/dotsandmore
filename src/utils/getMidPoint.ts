import {Coord} from '@/types'

export default (p1: Coord, p2: Coord): Coord => {
    return {x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2}
}
