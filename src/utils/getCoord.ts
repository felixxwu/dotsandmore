import {Coord} from '@/types'
import store from '@/store/index'

export default (e: PointerEvent): Coord | null => {
    if (e.target === null) return null
    const target = e.target as HTMLDivElement
    const rect = target.getClientRects()[0]
    const xPercent = (e.clientX - rect.left) / rect.width
    const yPercent = (e.clientY - rect.top) / rect.height
    const x = Math.floor(store.state.gridSizeW * xPercent)
    const y = Math.floor(store.state.gridSizeH * yPercent)
    if (x < 0 || x >= store.state.gridSizeW || y < 0 || y >= store.state.gridSizeH) return null
    return {x, y}
}
