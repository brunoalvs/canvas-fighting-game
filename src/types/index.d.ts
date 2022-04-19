interface ISprite {
  position: IPosition
  velocity: IVelocity
  height?: number
  color?: string
  lastKeyPressed: string
}

interface IPosition {
  x: number
  y: number
}

interface IVelocity {
  x: number
  y: number
}

interface IKeys {
  ArrowLeft: {
    pressed: boolean
  }
  ArrowRight: {
    pressed: boolean
  }
  ArrowUp: {
    pressed: boolean
  }
  KeyA: {
    pressed: boolean
  }
  KeyD: {
    pressed: boolean
  }
  KeyW: {
    pressed: boolean
  }
}
