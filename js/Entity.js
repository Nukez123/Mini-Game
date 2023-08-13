class Entity {
    isDead = false
    press = { up: false, down: false, rigth: false, left: false, shot: false };
    constructor(X, Y, W, H, COLOR, SPEED) {
        this.x = X
        this.y = Y
        this.w = W
        this.h = H
        this.color = COLOR
        this.speed = SPEED
    }
    collision() {
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x > wall.w - this.w) {
            this.x = wall.w - this.w
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y > wall.h - this.h) {
            this.y = wall.h - this.h
        }
    }
    logic() {

    }
    logicAfter() {

    }
    display() {
        this.logic();
        if (this.press.up) {
            this.y -= this.speed
        }
        if (this.press.down) {
            this.y += this.speed
        }
        if (this.press.left) {
            this.x -= this.speed
        }
        if (this.press.rigth) {
            this.x += this.speed
        }
        this.logicAfter()
        this.collision()
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}