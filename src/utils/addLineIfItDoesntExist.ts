import {LineType} from '@/types'
import doesLineAlreadyExist from '@/utils/doesLineAlreadyExist'
import store from '@/store'
import updateCanvas from '@/utils/updateCanvas'
import findEnclosedSpaces from '@/utils/findEnclosedSpaces'

// returns false if line already exists
export default (newLine: LineType): boolean => {
    if (doesLineAlreadyExist(newLine)) {
        return false
    } else {
        store.commit('addLine', newLine)
        store.commit('changeTurn')
        updateCanvas()
        findEnclosedSpaces(newLine)
        updateCanvas()
        return true
    }
}
