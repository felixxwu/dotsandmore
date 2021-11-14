import getRandomCoord from '@/utils/getRandomCoord'
import isSameCoordinate from '@/utils/isSameCoordinate'
import createLine from '@/utils/createLine'
import {LineType} from '@/types'

export default (): LineType => {
    let randomStart = getRandomCoord()
    let randomEnd = getRandomCoord()
    while (isSameCoordinate(randomStart, randomEnd)) {
        randomStart = getRandomCoord()
        randomEnd = getRandomCoord()
    }
    return createLine(randomStart, randomEnd)
}
