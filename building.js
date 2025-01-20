class Building {
  constructor(x, width, color) {
    this.width = width;
    this.height = 200;
    this.x = x;
    this.y = innerHeight - this.height;
    this.color = color;
    this.offsetX = 0;
    this.windowColor = [
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
      Math.random() > 0.5 ? "yellow" : "black",
    ];
    this.isSuccess = false;
    this.offScreen = false;
    this.rewindDistance = 0;
    this.hasSpawned = false;
    this.rewindVel = 1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y + 10, this.width, this.height);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x, this.y + 10, this.width, this.height);

    if (this.isSuccess) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = "green";
      this.illuminateBuilding();
    } else {
      ctx.shadowBlur = 0;
    }
  }

  illuminateBuilding() {
    // console.log("turn on lights!");
    let windowWidth = this.width / 2 - 15 > 7.5 ? this.width / 2 - 15 : 7.5;
    let posX = this.x + this.width / 2 - windowWidth - 5;
    let posY = this.y + 20;
    for (let i = 0; i < 12; i++) {
      ctx.fillStyle = this.windowColor[i];
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.windowColor[i];
      ctx.fillRect(posX, posY, windowWidth, 20);
      posX += windowWidth + 10;
      if (posX + windowWidth >= this.x + this.width - 2.5) {
        posX = this.x + this.width / 2 - windowWidth - 5;
        posY += 25;
      }
      ctx.shadowBlur = 0;
    }
  }

  update() {
    if (this.offsetX >= 0) {
      this.offsetX--;
      this.x--;
    }
    if (this.x < 0) {
      this.offScreen = true;
    }
    if (this.rewindDistance > 0) {
      this.x += this.rewindVel;
      this.rewindDistance -= this.rewindVel;
      if (this.rewindVel < 7.5) {
        this.rewindVel += 0.5;
      }
      // this.x += 1;
      // this.rewindDistance--;

      // console.log("rewind buildings!");
    }
  }
}
