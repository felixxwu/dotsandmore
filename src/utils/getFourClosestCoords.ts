import {Coord} from '@/types'
import euclideanDistance from '@/utils/euclideanDistance'

export default (coord: Coord): [Coord, Coord, Coord, Coord] => {
    const xFloor = Math.floor(coord.x)
    const yFloor = Math.floor(coord.y)
    const coords: [Coord, Coord, Coord, Coord] = [
        {x: xFloor, y: yFloor},
        {x: xFloor + 1, y: yFloor},
        {x: xFloor, y: yFloor + 1},
        {x: xFloor + 1, y: yFloor + 1},
    ]
    coords.sort((a, b) => euclideanDistance(a, b, true))
    return coords
}
