class Human extends Entity {
    timeCooldownMax = 500
    isCoolDown = false
    createHandlersMove() {
        const eventHandler = (e) => {
            console.log(e)
            switch (e.code) {
                case 'KeyW':
                    this.press.up = e.type === 'keydown';
                    break;
                case 'KeyS':
                    this.press.down = e.type === 'keydown';
                    break;
                case 'KeyA':
                    this.press.left = e.type === 'keydown';
                    break;
                case 'KeyD':
                    this.press.rigth = e.type === 'keydown';
                    break;
                case 'Space':
                    this.press.shot = e.type === 'keydown';
                    break;
                    
                default:
                    break;
            }
            if (e.type === 'blur') {
                this.press = {
                    up: false,
                    down: false,
                    left: false,
                    right: false,
                };
            }
        }
        window.addEventListener('keydown', eventHandler);
        window.addEventListener('keyup', eventHandler);
        window.addEventListener('blur', eventHandler);
    }
    collision() {
        if (this.x < 250) {
            this.x = 250
        }

        if (this.y > 800 - this.h) {
            this.y = 800 - this.h
        }
        if (this.x > 550 - this.w) {
            this.x = 550 - this.w
        }
        if (this.y < 675 ) {
            this.y = 675 
        }
    }
    logic() {

        if (this.press.shot && !this.isCoolDown) {
            setTimeout(() => {
                this.isCoolDown = false
            }, this.timeCooldownMax)
            this.isCoolDown = true

            bull.push(new Bull(this.x + this.w / 2, this.y, 10, 10, 'red', 10, { up: true }))
            score -= isHardcore? 30 :5
        }
    }

    constructor(X, Y, W, H, COLOR, SPEED) {
        super(X, Y, W, H, COLOR, SPEED)
        this.img = new Image()
        this.img.src = '../img/bow.png' ,

        this.createHandlersMove()


    }
}
const human = new Human(wall.w / 2 - 25, wall.h - 50, 50, 50, 'red', 1)
