import { ctx } from './helper'
interface IPlayer {
  position: IPosition
}

export default class Player {
  position: IPosition = { x: 0, y: 0 }

  constructor({ ...props }: IPlayer) {
    this.position = props.position
  }

  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, 50, 150)
  }

  update() {
    this.draw()
  }

  // Actions
  gravity() {}
  jump() {}
  attack() {}
}
