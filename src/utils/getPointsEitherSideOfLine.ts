import store from '@/store/index'
import {CanvasLine, Position} from '@/types'
import getMidPoint from '@/utils/getMidPoint'
import shortenLine from '@/utils/shortenLine'

export default (canvasLine: CanvasLine): [Position, Position] => {
    const midPoint = getMidPoint(canvasLine.start, canvasLine.end)
    const dx = canvasLine.end.x - midPoint.x
    const dy = canvasLine.end.y - midPoint.y
    const rotateLeft: CanvasLine = {
        start: midPoint,
        end: {x: midPoint.x - dy, y: midPoint.y + dx},
    }
    const rotateRight: CanvasLine = {
        start: midPoint,
        end: {x: midPoint.x + dy, y: midPoint.y - dx},
    }
    const shortLeft = shortenLine(rotateLeft, store.state.fillStartDistance)
    const shortRight = shortenLine(rotateRight, store.state.fillStartDistance)
    return [shortLeft.end, shortRight.end]
}
