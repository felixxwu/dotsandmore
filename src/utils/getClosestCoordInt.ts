import {Coord} from '@/types'

export default (coord: Coord): Coord => {
    return {x: Math.round(coord.x), y: Math.round(coord.y)}
}
