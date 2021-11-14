import {Coord, LineType} from '@/types'

const storeState = {
    // lengths
    appWidth: 0,
    appHeight: 0,
    paddingMed: 10,
    cellWidth: 30,
    dotSize: 4,
    shadowBlurRadius: 0,

    // numbers
    gridSizeW: 0,
    gridSizeH: 0,
    maxLineLength: 2.5,
    mouseThrottle: 20,
    minDistanceToLineForShadow: 1,
    shadowOpacity: 0.03,
    intersectionTolerance: 0.0001,

    // colours
    bg: '#eee',
    fg: '#555',
    fg1p5: '#999',
    fg2: '#bbb',
    highlight: 'rgba(0,0,0,0.1)',
    bgSat: 60,
    bgLight: 95,

    // other
    linePreview: <LineType | null>null,
    lines: <LineType[]>[],
    clickedCoord: <Coord | null>null,
    lightSource: <Coord>{y: 0, x: window.innerWidth / 2},
}

const units = <{[key in keyof typeof storeState]: string}>{
    // lengths
    appWidth: 'px',
    appHeight: 'px',
    paddingMed: 'px',
    cellWidth: 'px',
    dotSize: 'px',
    shadowBlurRadius: 'px',

    // numbers
    gridSizeW: '',
    gridSizeH: '',
    maxLineLength: '',
    mouseThrottle: '',
    minDistanceToLineForShadow: '',
    shadowOpacity: '',
    intersectionTolerance: '',

    // colours
    bg: '',
    fg: '',
    fg1p5: '',
    fg2: '',
    highlight: '',
    bgSat: '%',
    bgLight: '%',

    // other
    linePreview: 'hide',
    lines: 'hide',
    clickedCoord: 'hide',
    lightSource: 'hide',
}

export {storeState, units}
