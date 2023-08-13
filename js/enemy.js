class Enemy extends Entity {
    lastPos = {
        x: -1,
        y: -1
    }


    move() {
        if (this.lastPos.x != this.x || this.lastPos.y != this.y) {
            this.lastPos.x = this.x
            this.lastPos.y = this.y
        }
        else {
            if (this.press.rigth) {
                this.press.left = true
                this.press.rigth = false
            }
            else if (this.press.left) {
                this.press.left = false
                this.press.rigth = true
            }
        }
    }
    dead() {

        for (let ib = 0; ib < bull.length; ib++) {
            if (checkCollision({ x: bull[ib].x, y: bull[ib].y }, { w: bull[ib].w, h: bull[ib].h }, { x: this.x, y: this.y }, { w: this.w, h: this.h })) {

                this.isDead = true
                bull[ib].isDead = true
                for (let i = 0; i < enemy.length; i++) {
                    enemy[i].speed += 1
                }
                break;
            }
        }
    }

    logicAfter() {
        this.move()
        this.dead()
    }
    constructor(X, Y, W, H, COLOR, SPEED) {
        super(X, Y, W, H, COLOR, SPEED)
        this.img = new Image()
        this.img.src = '../img/mishen.png'
        this.press.rigth = true
    }
}
var enemy = [
    // new Enemy(0, 225, 50, 50, 'red', 1.5),
    // new Enemy(wall.w - 50, 225, 50, 50, 'red', 0.6),
    // new Enemy( 0, wall.h/2 , 50, 50, 'red', 0.8),
    // new Enemy(wall.w , wall.h/2, 50, 50, 'red', 1),

]
setInterval(() => {
    if (enemy.length < 4 && gameStatus == 'GAME') {
        const y = random(225, wall.h / 2)
        const speed = isHardcore ?random(15, 25) / 10 :random(5, 15) / 10
        const size = isHardcore ? random(15, 50) : 50
        enemy.push(new Enemy(0, y, size, size, 'red', speed))
    }

}, 1500)