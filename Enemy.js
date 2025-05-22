class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.size = 40;
    this.image = enemyImg;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }

  isOffScreen() {
    return this.y > height;
  }

  hit(bullet) {
    return dist(this.x + this.size / 2, this.y + this.size / 2, bullet.x, bullet.y) < this.size / 2;
  }
}
