class Ladder {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.endY = y;
    this.endX = x;
    this.isGrowing = true;
    this.hasFallen = false;
    this.isBehind = false;
    this.isScored = false;
    this.offsetX = 0;
    this.rewindDistance = 0;
    this.rewindVel = 1;
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.strokeStyle = "rgb(55,65,185)";
    // ctx.strokeStyle = "red";
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
  }

  update() {
    if (this.offsetX > 0) {
      this.x--;
      this.endX--;
      this.offsetX--;
    }
    if (this.rewindDistance > 0) {
      // this.x++;
      // this.endX++;
      // this.rewindDistance--;
      this.x += this.rewindVel;
      this.endX += this.rewindVel;
      this.y += this.rewindVel * 0.5;
      this.endY += this.rewindVel;
      this.rewindDistance -= this.rewindVel;
      if (this.rewindVel < 7.5) {
        this.rewindVel += 0.5;
      }
    }
    if (this.hasFallen) return;
    // console.log("updating...");
    if (this.isGrowing) {
      this.endY--;
      this.size = Math.abs(this.y - this.endY);
      //   console.log("update", this.size);
    }
    if (!this.isGrowing) {
      if (this.endY < this.y) {
        this.endY++;
        this.endX++;
      } else {
        this.hasFallen = true;
      }
    }
  }

  stopGrowing() {
    this.isGrowing = false;
  }
}
