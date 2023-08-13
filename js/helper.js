const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')
var img = new Image();
img.src = "../img/fon.jpg";
var img2 = new Image();
img2.src = "../img/fon2.jpg";
var img3 = new Image();
img3.src = "../img/hardfon.jpg";

const font = new FontFace('StardewValley', 'url(../font/StardewValley/StardewValley.otf)');
font.load().then(function () {
    document.fonts.add(font);
})
let score = 0
const wall = {
    w: 800,
    h: 800
}
const wall2 = {
    w: 250,
    h: 125
}
let isHardcore = false
let gameStatus = 'GAME'
const checkPoint = (x, y, pos, size) => {
    if (x >= pos.x && y >= pos.y && x <= pos.x + size.w && y <= pos.y + size.h) {
        return true;
    }

    return false;
}

const checkCollision = (pos1, size1, pos2, size2) => {
    if (
        checkPoint(pos1.x, pos1.y, pos2, size2) ||
        checkPoint(pos1.x + size1.w, pos1.y, pos2, size2) ||
        checkPoint(pos1.x + size1.w, pos1.y + size1.h, pos2, size2) ||
        checkPoint(pos1.x, pos1.y + size1.h, pos2, size2)
    ) {
        return true;
    }

    return false;
}

const displayRectArc = (x, y, w, h, r, color) => {
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + w - r, y)
    ctx.arcTo(x + w, y, x + w, y + r, r)
    ctx.lineTo(x + w, y + h - r)
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
    ctx.lineTo(x + r, y + h)
    ctx.arcTo(x, y + h, x, y + h - r, r)
    ctx.lineTo(x, y + r)
    ctx.arcTo(x, y, x + r, y, r)
    ctx.stroke()
}
const displayText = (x, y, text, color, pos = 'left', posBase, fontSize, font = 'StardewValley') => {
    ctx.font = `${fontSize} ${font}`
    ctx.fillStyle = color
    ctx.textBaseline = posBase
    ctx.textAlign = pos
    ctx.fillText(text, x, y)

}
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
