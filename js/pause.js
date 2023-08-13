
var renderPause = () => {

    ctx.drawImage(img, 0, 0);
    displayRectArc(wall.w / 2 - 75, 250, 150, 50, 15, '#000')
    displayRectArc(wall.w / 2 - 75, 310, 150, 50, 15, '#000')
    displayRectArc(wall.w / 2 - 75, 370, 150, 50, 15, '#000')
    displayText(wall.w / 2, 100, 'PAUSE', '#88ff00', 'center', '', '75px', 'Stardew Valley ALL CAPS')
    displayText(wall.w / 2, 250 + 25, 'CONTINUE', '#000', 'center', 'middle', '30px')
    displayText(wall.w / 2, 310 + 25, 'RESTART', '#000', 'center', 'middle', '30px')
    displayText(wall.w / 2, 370 + 25, 'HARDCORE', '#ff0000', 'center', 'middle', '30px')
    if (gameStatus == 'GAME') {
        window.requestAnimationFrame(render)
        return
    }
    window.requestAnimationFrame(renderPause)
}
const buttonTrigger = (e) => {
    if (gameStatus == 'PAUSE' && e.type == 'click') {
        if (checkPoint(e.offsetX, e.offsetY, { x: wall.w / 2 - 75, y: 250 }, { w: 150, h: 50 })) {
            gameStatus = 'GAME'
        }
        if (checkPoint(e.offsetX, e.offsetY, { x: wall.w / 2 - 75, y: 310 }, { w: 150, h: 50 })) {
            window.location.reload()
        }
        if (checkPoint(e.offsetX, e.offsetY, { x: wall.w / 2 - 75, y: 370 }, { w: 150, h: 50 })) {
            isHardcore = true
            gameStatus = 'GAME'
            score = 0
        }
    }
}
canvas.addEventListener('click', buttonTrigger)
canvas.addEventListener('mousemove', buttonTrigger)

const createPauseMove = () => {
    const eventHandler = (e) => {
        switch (e.key) {
            case 'Escape':
                gameStatus = gameStatus == 'PAUSE' ? 'GAME' : 'PAUSE';
                break;

        }


    }
    window.addEventListener('keydown', eventHandler);

}
createPauseMove()



