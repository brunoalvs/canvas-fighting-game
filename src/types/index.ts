export interface ISprite {
  position: IPosition
  velocity: IVelocity
  height?: number
  color?: string
  lastKeyPressed: string
}

export interface IPosition {
  x: number
  y: number
}

export interface IVelocity {
  x: number
  y: number
}

export interface IKeys {
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
