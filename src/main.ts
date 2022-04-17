import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// Canvas
const canvas = document.querySelector<HTMLCanvasElement>('canvas')!
const cxt = canvas?.getContext('2d')

// Aspect ratio 16:9
canvas.width = window.innerWidth
canvas.height = window.innerWidth * (9 / 16)

cxt?.fillRect(0, 0, canvas.width, canvas.height)
