import {FillPoint, LineType} from '@/types'
import getPointsEitherSideOfLine from '@/utils/getPointsEitherSideOfLine'
import coordToCanvasPixel from '@/utils/coordToCanvasPixel'
import store from '@/store/index'
import isEnclosed from '@/utils/isEnclosed'

export default (newLine: LineType): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const context = store.state.canvas!.getContext('2d')!
    const newCanvasLine = {start: coordToCanvasPixel(newLine.start), end: coordToCanvasPixel(newLine.end)}
    const pointsToFill = getPointsEitherSideOfLine(newCanvasLine)

    for (const point of pointsToFill) {
        if (isEnclosed(context, point)) {
            const fillPoint: FillPoint = {position: point, player: store.state.turn}
            store.commit('changeTurn') // TODO dont change turn twice here
            store.commit('addFillPoint', fillPoint)
        }
    }
}
