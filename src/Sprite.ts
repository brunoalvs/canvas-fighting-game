import { canvas, ctx, gravity } from './settings'

export default class Sprite implements ISprite {
  position: IPosition
  velocity: IVelocity
  width: number
  height: number
  color: string
  lastKeyPressed: string
  attackBox: {
    position: IPosition
    width: number
    height: number
  }
  isAttacking: boolean

  constructor({ ...props }: ISprite) {
    this.position = props.position || { x: 0, y: 0 }
    this.velocity = props.velocity || { x: 0, y: 0 }
    this.width = props.width || 25
    this.height = props.height || 75
    this.color = props.color || '#d2b5ed'
    this.lastKeyPressed = props.lastKeyPressed || ''
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 50,
      height: 25,
    }
    this.isAttacking = this.isAttacking = false
  }

  draw() {
    ctx.fillStyle = this.color || 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    // HITBOX
    if (this.isAttacking) {
      ctx.fillStyle = '#ff0000'
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

  // Actions
  jump() {
    if (
      this.position.y + this.height + this.velocity.y <=
      canvas.height - this.height * 0.2
    ) {
      return
    }

    this.velocity.y = -12
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

