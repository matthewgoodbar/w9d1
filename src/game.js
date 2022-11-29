import Bird from './bird';
import Level from './level'

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    console.log(this);
    
    this.level.drawBackground(this.ctx);
    this.bird.animate();
    if (this.running){
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions.width, this.dimensions.height, this.ctx);
    // this.animate();
  }

  play(){
    this.running = true;
    this.animate();
  }

  click(){
    this.bird.flap();
  }
}