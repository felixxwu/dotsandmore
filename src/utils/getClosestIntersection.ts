import {Coord, LineType} from '@/types'
import getIntersection from '@/utils/getIntersection'
import euclideanDistance from '@/utils/euclideanDistance'

export default (line: LineType, lines: LineType[]): Coord | null => {
    let closestIntersection: Coord | null = null
    let shortedDistance = Infinity
    const intersections: Coord[] = []
    for (const l of lines) {
        const intersection = getIntersection(line, l)
        if (intersection !== false) intersections.push(intersection)
    }
    for (const i of intersections) {
        const distance = euclideanDistance(line.start, i)
        if (distance < shortedDistance && distance !== 0) {
            closestIntersection = i
            shortedDistance = distance
        }
    }
    return closestIntersection
}
