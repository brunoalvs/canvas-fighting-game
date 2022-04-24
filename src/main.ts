import './style.css'

import { canvas, ctx, keys } from './settings'
import Sprite from './Sprite'

// Aspect ratio 16:9
canvas.width = 512
canvas.height = 512 * 0.5625

// Define canvas context and canvas size
ctx.fillRect(0, 0, canvas.width, canvas.height)

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  lastKeyPressed: '',
})

const enemy = new Sprite({
  position: {
    x: canvas.width - 25,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: 'blue',
  lastKeyPressed: '',
})

function animate() {
  window.requestAnimationFrame(animate)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw
  player.update()
  enemy.update()

  // Movement
  player.velocity.x = 0
  enemy.velocity.x = 0

  // Player movement
  if (keys.KeyA.pressed && player.lastKeyPressed === 'KeyA') {
    player.velocity.x = -5
  } else if (keys.KeyD.pressed && player.lastKeyPressed === 'KeyD') {
    player.velocity.x = 5
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKeyPressed === 'ArrowLeft') {
    enemy.velocity.x = -5
  } else if (keys.ArrowRight.pressed && enemy.lastKeyPressed === 'ArrowRight') {
    enemy.velocity.x = 5
  }

  // Detect collision
  if (
    player.attackBox.position.x + player.attackBox.width > enemy.position.x &&
    player.attackBox.position.x <= enemy.position.x + enemy.width &&
    player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
    player.attackBox.position.y <= enemy.position.y + enemy.height &&
    player.isAttacking
  ) {
    console.log('Collision detected')
    player.isAttacking = false
  }

  // Detect collision on Attack (Enemy to Player)
  if (
    enemy.attackBox.position.x + enemy.attackBox.width > player.position.x &&
    enemy.attackBox.position.x <= player.position.x + player.width &&
    enemy.attackBox.position.y + enemy.attackBox.height >= player.position.y &&
    enemy.attackBox.position.y <= player.position.y + player.height &&
    enemy.isAttacking
  ) {
    console.log('EnemyCollision detected')
    enemy.isAttacking = false
  }
}

animate()

// Controls

window.addEventListener('keydown', event => {
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
      player.jump()
      break
    case 'Space':
      player.attack()
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
      enemy.jump()
      break
    case 'KeyP':
      enemy.attack()
      break
    default:
      console.log(event.code)
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

