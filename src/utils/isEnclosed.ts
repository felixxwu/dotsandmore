import {Position} from '@/types'
import floodFill from '@/utils/floodFill'

export default (context: CanvasRenderingContext2D, position: Position): boolean => {
    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
    floodFill(context, Math.floor(position.x), Math.floor(position.y), 0xffffffff)
    const floodedImage = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
    const array = new Uint32Array(floodedImage.data.buffer)
    // reset canvas to how it was before
    context.putImageData(imageData, 0, 0)
    return array[0] !== 0xffffffff
}
