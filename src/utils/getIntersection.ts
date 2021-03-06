// line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Determine the intersection point of two line segments
// Return FALSE if the lines don't intersect
import {Coord, LineType} from '@/types'
import store from '@/store/index'

export default (line1: LineType, line2: LineType): Coord | false => {
    const x1 = line1.start.x
    const y1 = line1.start.y
    const x2 = line1.end.x
    const y2 = line1.end.y
    const x3 = line2.start.x
    const y3 = line2.start.y
    const x4 = line2.end.x
    const y4 = line2.end.y

    // Check if none of the lines are of length 0
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false
    }

    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)

    // Lines are parallel
    if (denominator === 0) {
        return false
    }

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
    const tolerance = store.state.intersectionTolerance

    // is the intersection along the segments
    if (ua < -tolerance || ua > 1 + tolerance || ub < -tolerance || ub > 1 + tolerance) {
        return false
    }

    // Return an object with the x and y coordinates of the intersection
    const x = x1 + ua * (x2 - x1)
    const y = y1 + ua * (y2 - y1)

    return {x, y}
}
