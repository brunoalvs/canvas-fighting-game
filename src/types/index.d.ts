interface ISprite {
  position: IPosition
  velocity: IVelocity
  width?: number
  height?: number
  color?: string
  lastKeyPressed: string
  attackBox?: {
    position: IPosition
    offset: {
      x: number
      y: number
    }
    width: number
    height: number
  }
  isAttacking?: boolean
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
