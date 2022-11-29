export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    // this.pipes = Array(3).fill().map(() => {
    //   {x:0, }
    // });
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}