import {Coord, LineType} from '@/types'

const aboveScreen = <Coord>{y: 0, x: window.innerWidth / 2}

const config = {
    // lengths
    appWidth:                   {value: 0,                     unit: 'px'},
    appHeight:                  {value: 0,                     unit: 'px'},
    paddingMed:                 {value: 10,                    unit: 'px'},
    cellWidth:                  {value: 30,                    unit: 'px'},
    dotSize:                    {value: 4,                     unit: 'px'},
    shadowBlurRadius:           {value: 0,                     unit: 'px'},

    // numbers
    gridSizeW:                  {value: 0,                     unit: ''},
    gridSizeH:                  {value: 0,                     unit: ''},
    maxLineLength:              {value: 2.5,                   unit: ''},
    mouseThrottle:              {value: 20,                    unit: ''},
    minDistanceToLineForShadow: {value: 1,                     unit: ''},
    shadowOpacity:              {value: 0.03,                  unit: ''},
    intersectionTolerance:      {value: 0.0001,                unit: ''},
    populateLinesDuration:      {value: 5000,                  unit: ''},

    // colours
    bg:                         {value: '#eee',                unit: ''},
    fg:                         {value: '#555',                unit: ''},
    fg1p5:                      {value: '#999',                unit: ''},
    fg2:                        {value: '#bbb',                unit: ''},
    highlight:                  {value: 'rgba(0,0,0,0.1)',     unit: ''},
    bgSat:                      {value: 60,                    unit: '%'},
    bgLight:                    {value: 95,                    unit: '%'},

    // other
    linePreview:                {value: <LineType | null>null, unit: 'hide'},
    lines:                      {value: <LineType[]>[],        unit: 'hide'},
    clickedCoord:               {value: <Coord | null>null,    unit: 'hide'},
    lightSource:                {value: aboveScreen,           unit: 'hide'},
    enableLogs:                 {value: true,                  unit: 'hide'},
}

const typeSafeSet = <T, K extends keyof T, V extends T[K]>(obj: T, key: K, value: V) => {
    obj[key] = value
}

const storeState = <{[T in keyof typeof config]: typeof config[T]['value']}>{}
const units      = <{[T in keyof typeof config]: string}>{}
for (const key in config) {
    const typeSafeKey = key as keyof typeof config
    typeSafeSet(storeState, typeSafeKey, config[typeSafeKey]['value'])
    typeSafeSet(units,      typeSafeKey, config[typeSafeKey]['unit'])
}

export {storeState, units}
