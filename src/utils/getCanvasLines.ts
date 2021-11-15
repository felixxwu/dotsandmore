import store from '@/store/index'
import coordToCanvasPixel from '@/utils/coordToCanvasPixel'
import {CanvasLine} from '@/types'

export default (): CanvasLine[] => {
    const lines = store.state.lines
    const canvasLines: CanvasLine[] = []
    for (const line of lines) {
        canvasLines.push({
            start: coordToCanvasPixel(line.start),
            end: coordToCanvasPixel(line.end),
        })
    }
    return canvasLines
}
