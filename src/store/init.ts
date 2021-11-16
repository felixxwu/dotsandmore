import {Coord, FillPoint, LineType} from '@/types'

const playerColours = [{hex: 0xffaaaaff, css: '#ffaaaa'}, {hex: 0xffffaaaa, css: '#aaaaff'}]

const config = {
    // lengths
    appWidth:                   {value: 0,  unit: 'px'},
    appHeight:                  {value: 0,  unit: 'px'},
    paddingMed:                 {value: 10, unit: 'px'},
    cellWidth:                  {value: 40, unit: 'px'},
    dotSize:                    {value: 4,  unit: 'px'},
    shadowBlurRadius:           {value: 0,  unit: 'px'},
    padding1:                   {value: 10, unit: 'px'},

    // numbers
    gridSizeW:                  {value: 0,      unit: ''},
    gridSizeH:                  {value: 0,      unit: ''},
    maxLineLength:              {value: 2.5,    unit: ''},
    mouseThrottle:              {value: 20,     unit: ''},
    minDistanceToLineForShadow: {value: 1,      unit: ''},
    intersectionTolerance:      {value: 0.0001, unit: ''},
    populateLinesDuration:      {value: 5000,   unit: ''},
    canvasResolutionPerCell:    {value: 100,    unit: ''},
    fillStartDistance:          {value: 15,     unit: ''},
    gridLineWidth:              {value: 1,      unit: ''},
    minScoreWidth:              {value: 50,     unit: ''},
    scoreDecimalPlaces:         {value: 1,      unit: ''},
    errorMessageTimeout:        {value: 2000,   unit: ''},

    // colours
    bg:                         {value: '#eee',            unit: ''},
    fg:                         {value: '#555',            unit: ''},
    fg1p5:                      {value: '#999',            unit: ''},
    fg2:                        {value: '#bbb',            unit: ''},
    highlight:                  {value: 'rgba(0,0,0,0.1)', unit: ''},
    shadowOpacity:              {value: 0.03,              unit: ''},
    gridLineOpacity:            {value: 0.3,               unit: ''},
    bgSat:                      {value: 50,                unit: '%'},
    bgLight:                    {value: 93,                unit: '%'},

    // other
    populatingLines:            {value: false,                                   unit: ''},
    turn:                       {value: 0,                                       unit: ''},
    linePreview:                {value: <LineType | null>null,                   unit: 'hide'},
    lines:                      {value: <LineType[]>[],                          unit: 'hide'},
    clickedCoord:               {value: <Coord | null>null,                      unit: 'hide'},
    lightSource:                {value: <Coord>{y: 0, x: window.innerWidth / 2}, unit: 'hide'},
    enableLogs:                 {value: true,                                    unit: 'hide'},
    canvas:                     {value: <HTMLCanvasElement | null>null,          unit: 'hide'},
    fillPoints:                 {value: <FillPoint[]>[],                         unit: 'hide'},
    areaCovered:                {value: <number[]>[0, 0],                        unit: 'hide'},
    playerColours:              {value: playerColours,                           unit: 'hide'},
    errorMessage:               {value: '',                                      unit: 'hide'},
}

const typeSafeSet = <O, K extends keyof O, V extends O[K]>(obj: O, key: K, value: V) => {
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
