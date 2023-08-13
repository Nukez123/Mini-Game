
var render = () => {
    ctx.fillRect(0, 0, 800, 800)
    ctx.drawImage(img2, 0, 0);
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(250, 800)
    ctx.lineTo(250, 700)
    ctx.arcTo(250, 675, 275, 675, 15)
    ctx.lineTo(525, 675)
    ctx.arcTo(550, 675, 550, 700, 15)
    ctx.lineTo(550, 800)
    ctx.stroke()
    if (isHardcore) {
        ctx.globalAlpha = 0.4
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(0, 0, wall.w, wall.h)
        ctx.drawImage(img3, 0, 0)
        ctx.globalAlpha = 1
    }
    displayText(10, 10, score, '#fff', 'left', 'top', '40px')



    human.display()
    for (let i = 0; i < bull.length; i++) {
        bull[i].display()
        if (bull[i].isDead) {
            bull.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].display()
        if (enemy[i].isDead) {
            if (isHardcore) {
                score += 10 * enemy[i].speed
            }
            else {
                score += 20 * enemy[i].speed
            }
            enemy.splice(i, 1)
            i--

        }
    }

    if (gameStatus == 'PAUSE') {
        window.requestAnimationFrame(renderPause)
        return
    }
    window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)



