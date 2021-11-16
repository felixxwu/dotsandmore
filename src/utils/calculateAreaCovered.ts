import store from '@/store/index'

export default (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const context = store.state.canvas!.getContext('2d')!
    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
    const array = new Uint32Array(imageData.data.buffer)
    const player0Area = array.filter((i) => i === 0xff8888ff).length
    const player1Area = array.filter((i) => i === 0xffff8888).length
    store.commit('setAreaCovered', [player0Area, player1Area])
}
