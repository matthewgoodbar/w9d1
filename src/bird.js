const CONSTANTS = {
    GRAVITY: 0.5,
    FLAP_SPEED: -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};

export default class Bird {
    
    
    constructor(canvasWidth, canvasHeight, ctx) {
        this.velocity = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.ctx = ctx;
        this.x = canvasWidth / 3;
        this.y = canvasHeight / 2;
    }

    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);

    }

    animate(){
        this.move();
        this.drawBird(this.ctx);
    }

    move(){
        this.y += this.velocity;
        if(this.velocity < CONSTANTS.TERMINAL_VEL ){
            this.velocity += CONSTANTS.GRAVITY;
        }
    }

    flap(){
        this.velocity = -8;
    }
}