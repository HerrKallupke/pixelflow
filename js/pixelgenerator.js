const canvas = document.getElementsByTagName('canvas').item(0)
const pixelSize = Number(canvas.getAttribute('pixel-size'))
 
const ctx = canvas.getContext('2d')

function draw_pixels() {
    canvas.width = window.innerWidth + window.innerHeight
    canvas.height = window.innerWidth + window.innerHeight

    for (var x = 0; x < canvas.width; x += pixelSize) {
        for (var y = 0; y < canvas.height; y += pixelSize) {
            const r = Math.random() * 30 + 225
            const g = 130
            const b = 0
            ctx.fillStyle = `rgba(${r}, ${g}, ${b})`
            ctx.fillRect(x, y, pixelSize,  pixelSize)
        }
    }
}

setInterval(draw_pixels, 50)