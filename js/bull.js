class Bull extends Entity {
    collision() {
        if (this.x < 0) {
            this.isDead = true
        }
        if (this.x > wall.w - this.w) {
            this.isDead = true
        }
        if (this.y < 0) {
            this.isDead = true
        }
        if (this.y > wall.h - this.h) {
            this.isDead = true
        }
    }
    constructor(X, Y, W, H, COLOR, SPEED, press) {
        super(human.x + 5, human.y, 40, 50, COLOR, SPEED)
        this.img = new Image()
        this.img.src = '../img/bull.png'
        this.press = { ...this.press, ...press }
    }
}
const bull = []