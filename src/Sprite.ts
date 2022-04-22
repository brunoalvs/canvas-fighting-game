import { canvas, ctx, gravity } from './helper'

export default class Sprite implements ISprite {
  position: IPosition = { x: 0, y: 0 }
  velocity: IVelocity = { x: 0, y: 0 }
  width: number = 50
  height: number = 150
  color: string = '#d2b5ed'
  lastKeyPressed: string = ''
  attackBox: {
    position: IPosition
    width: number
    height: number
  } = {
    position: {
      x: this.position.x,
      y: this.position.y,
    },
    width: 100,
    height: 50,
  }
  isAttacking = false

  constructor({ ...props }: ISprite) {
    this.position = props.position
    this.velocity = props.velocity
    this.width = this.width
    this.height = props.height || this.height
    this.color = props.color || this.color
    this.lastKeyPressed = props.lastKeyPressed || this.lastKeyPressed
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: this.attackBox.width,
      height: this.attackBox.height,
    }
    this.isAttacking = this.isAttacking
  }

  // Actions
  jump() {
    if (
      this.position.y + this.height + this.velocity.y <=
      canvas.height - this.height * 0.2
    ) {
      return
    }

    this.velocity.y = -20
  }

  draw() {
    ctx.fillStyle = this.color || 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    // HITBOX
    // Attack box
    if (this.isAttacking) {
      ctx.strokeStyle = 'red'
      ctx.strokeRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      )
      ctx.fillStyle = 'green'
      ctx.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      )
    }
  }

  update() {
    this.draw()
    this.attackBox.position.x = this.position.x
    this.attackBox.position.y = this.position.y

    this.move()
  }

  attack() {
    this.isAttacking = true

    setTimeout(() => {
      this.isAttacking = false
    }, 200)
  }

  move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else {
      this.velocity.y += gravity
    }
  }
}
