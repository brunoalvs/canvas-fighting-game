import './style.css'
import { IKeys } from './types'

import { canvas, ctx } from './helper'
import Sprite from './Sprite'

// Aspect ratio 16:9
canvas.width = innerWidth
canvas.height = innerHeight

// Define canvas context and canvas size
ctx.fillRect(0, 0, canvas.width, canvas.height)

const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  lastKeyPressed: '',
})

const enemy = new Sprite({
  position: { x: canvas.width - 50, y: 0 },
  velocity: { x: 0, y: 0 },
  color: '#ff0000',
  lastKeyPressed: '',
})

const keys: IKeys = {
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

function animate() {
  window.requestAnimationFrame(animate)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw
  player.update()
  enemy.update()

  // Player Movement
  player.velocity.x = 0
  enemy.velocity.x = 0

  // Controls Player
  if (keys.KeyA.pressed && player.lastKeyPressed === 'KeyA') {
    player.velocity.x = -1
  } else if (keys.KeyD.pressed && player.lastKeyPressed === 'KeyD') {
    player.velocity.x = 1
  }

  // Controls Enemy
  if (keys.ArrowLeft.pressed && enemy.lastKeyPressed === 'ArrowLeft') {
    enemy.velocity.x = -1
  } else if (keys.ArrowRight.pressed && enemy.lastKeyPressed === 'ArrowRight') {
    enemy.velocity.x = 1
  }
}

animate()

// Controls

window.addEventListener('keydown', event => {
  console.log(event.code)

  switch (event.code) {
    case 'KeyD':
      keys.KeyD.pressed = true
      player.lastKeyPressed = 'KeyD'
      break
    case 'KeyA':
      keys.KeyA.pressed = true
      player.lastKeyPressed = 'KeyA'
      break
    case 'KeyW':
      if (
        player.position.y + player.height + player.velocity.y <=
        canvas.height
      ) {
        break
      }
      player.velocity.y = -20
      player.lastKeyPressed = 'KeyW'
      break

    case 'ArrowRight':
      keys.ArrowRight.pressed = true
      enemy.lastKeyPressed = 'ArrowRight'
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true
      enemy.lastKeyPressed = 'ArrowLeft'
      break
    case 'ArrowUp':
      enemy.velocity.y = -20
      enemy.lastKeyPressed = 'ArrowUp'
      break
  }
})

window.addEventListener('keyup', event => {
  switch (event.code) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowUp':
      keys.ArrowUp.pressed = false
      break
    case 'KeyD':
      keys.KeyD.pressed = false
      break
    case 'KeyA':
      keys.KeyA.pressed = false
      break
    case 'KeyW':
      keys.KeyW.pressed = false
      break
  }
})
