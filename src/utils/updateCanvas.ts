import store from '@/store/index'
import floodFill from '@/utils/floodFill'
import getCanvasLines from '@/utils/getCanvasLines'
import calculateAreaCovered from '@/utils/calculateAreaCovered'

export default (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const context = store.state.canvas!.getContext('2d')!
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.beginPath()
    context.imageSmoothingEnabled = false
    for (const canvasLine of getCanvasLines()) {
        context.moveTo(canvasLine.start.x, canvasLine.start.y)
        context.lineTo(canvasLine.end.x, canvasLine.end.y)
        context.stroke()
    }
    for (const fillPoint of store.state.fillPoints) {
        const colour = fillPoint.player === 0 ? 0xff8888ff : 0xffff8888
        floodFill(context, Math.floor(fillPoint.position.x), Math.floor(fillPoint.position.y), colour)
    }
    calculateAreaCovered()
}
