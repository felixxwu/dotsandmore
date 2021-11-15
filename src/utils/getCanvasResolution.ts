import store from '@/store/index'

export default (): {x: number; y: number} => {
    return {
        x: store.state.gridSizeW * store.state.canvasResolutionPerCell,
        y: store.state.gridSizeH * store.state.canvasResolutionPerCell,
    }
}
