class EnemyBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.speed = 5;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(0); // black bullet
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  isOffScreen() {
    return this.y > height;
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x + player.width / 2, player.y + player.height / 2);
    return d < this.size / 2 + player.width / 2;
  }
}
