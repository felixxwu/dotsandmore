import {Coord, LineType} from '@/types'

export default (p: Coord, line: LineType): Coord => {
    const a = line.start
    const b = line.end
    const atob = {x: b.x - a.x, y: b.y - a.y}
    const atop = {x: p.x - a.x, y: p.y - a.y}
    const len = atob.x * atob.x + atob.y * atob.y
    const dot = atop.x * atob.x + atop.y * atob.y
    const t = Math.min(1, Math.max(0, dot / len))

    return {
        x: a.x + atob.x * t,
        y: a.y + atob.y * t,
    }
}
