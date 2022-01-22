import store from '@/store/index'
import setStoreValue from '@/utils/setStoreValue'

export default (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const context = store.state.canvas!.getContext('2d')!
    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
    const array = new Uint32Array(imageData.data.buffer)
    const player0Colour = store.state.playerColours[0].hex
    const player1Colour = store.state.playerColours[1].hex
    const player0Area = array.filter((i) => i === player0Colour).length
    const player1Area = array.filter((i) => i === player1Colour).length
    setStoreValue('areaCovered', [player0Area, player1Area])
}
