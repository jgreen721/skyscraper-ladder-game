class City {
  constructor(img, x) {
    this.img = img;
    this.x = x;
    this.toDelete = false;
  }

  draw() {
    ctx.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
  }

  update() {
    this.x -= 0.25;
    if (this.x < -innerWidth) {
      this.toDelete = true;
    }
  }
}
