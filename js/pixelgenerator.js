const canvas = document.getElementsByTagName('canvas').item(0)
 
const ctx = canvas.getContext('2d')

function draw_pixels() {
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth

    for (var x = 0; x <= canvas.width; x += 10) {
        for (var y = 0; y <= canvas.height; y += 10) {
            const r = 0
            const g = 0
            const b = Math.random() * 100
            ctx.fillStyle = `rgba(${r}, ${g}, ${b})`
            ctx.fillRect(x, y, 10,  10)   
        }
    }
}

setInterval(draw_pixels, 50)