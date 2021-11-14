import getRandomLine from '@/utils/getRandomLine'
import store from '@/store/index'
import getIntersection from '@/utils/getIntersection'

export default (): void => {
    const newLine = getRandomLine()
    let hasIntersections = false
    for (const line of store.state.lines) {
        if (getIntersection(newLine, line)) {
            hasIntersections = true
            break
        }
    }
    if (!hasIntersections) {
        store.commit('addLine', newLine)
    }
}
