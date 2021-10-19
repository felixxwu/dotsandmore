import {Coord, LineType} from '@/types'

const storeState = {
    // lengths
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    dotSize: 4,

    // numbers
    gridSizeW: 0,
    gridSizeH: 0,
    maxLineLength: 2.5,

    // colours
    bg: '#eee',
    fg: '#555',
    highlight: 'rgba(0,0,0,0.1)',

    // other
    lines: <LineType[]>[],
    clickedCoord: <Coord | null>null,
}

const units = <{[key in keyof typeof storeState]: string}>{
    // lengths
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    dotSize: 'px',

    // numbers
    gridSizeW: '',
    gridSizeH: '',
    maxLineLength: '',

    // colours
    bg: '',
    fg: '',
    highlight: '',

    // other
    lines: 'hide',
    clickedCoord: 'hide',
}

export {storeState, units}
