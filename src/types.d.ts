type Coord = {x: number; y: number}
type Position = {x: number; y: number}
type CanvasLine = {start: Position; end: Position}
type LineType = {start: Coord; end: Coord}
type CssLine = {start: Position; end: Position}
type FillPoint = {position: Position; player: number}
type Screen = 'menu' | 'game'

export {Coord, LineType, Position, CanvasLine, CssLine, FillPoint, Screen}
