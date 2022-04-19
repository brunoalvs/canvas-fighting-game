export const canvas = document.querySelector<HTMLCanvasElement>('canvas')!
export const ctx = canvas.getContext('2d')!

export const gravity = 0.7

// Keys
export const keys: IKeys = {
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  KeyA: {
    pressed: false,
  },
  KeyD: {
    pressed: false,
  },
  KeyW: {
    pressed: false,
  },
}
