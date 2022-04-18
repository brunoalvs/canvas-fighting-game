import { IPosition, ISprite, IVelocity } from './types'
import { canvas, ctx, gravity } from './helper'

function SpriteMovement(sprite: ISprite) {
  sprite.height = sprite.height || 150

  sprite.position.x += sprite.velocity.x
  sprite.position.y += sprite.velocity.y

  if (sprite.position.y + sprite.height + sprite.velocity.y >= canvas.height) {
    sprite.velocity.y = 0
  } else {
    sprite.velocity.y += gravity
  }
}

export default class Sprite implements ISprite {
  position: IPosition = { x: 0, y: 0 }
  velocity: IVelocity = { x: 0, y: 0 }
  height: number = 150
  color: string = '#d2b5ed'
  lastKeyPressed: string = ''

  constructor({ ...props }: ISprite) {
    this.position = props.position
    this.velocity = props.velocity
    this.height = props.height || this.height
    this.color = props.color || this.color
    this.lastKeyPressed = props.lastKeyPressed
  }

  draw() {
    ctx.fillStyle = this.color || 'red'
    ctx.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw()

    SpriteMovement(this)
  }
}
