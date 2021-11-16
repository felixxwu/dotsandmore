import getGCD from '@/utils/getGCD'
import {Coord, LineType} from '@/types'

// TODO this fails when the end of a line is non integer
export default (line: LineType): Coord[] => {
    const dx = line.end.x - line.start.x
    const dy = line.end.y - line.start.y
    const gcd = getGCD(dx, dy)
    const reducedX = dx / Math.floor(Math.abs(gcd))
    const reducedY = dy / Math.floor(Math.abs(gcd))
    const numPointsOnLine = Math.floor(Math.abs(gcd)) + 1
    const pointsOnLine = []
    for (let i = 0; i < numPointsOnLine; i++) {
        pointsOnLine.push({x: line.start.x + reducedX * i, y: line.start.y + reducedY * i})
    }
    return pointsOnLine
}
