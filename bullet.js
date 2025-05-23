class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  update(enemies) {
    this.y -= this.speed;


    for (let i = enemies.length - 1; i >= 0; i--) {
      if (dist(this.x, this.y, enemies[i].x, enemies[i].y) < 30) {
        enemies.splice(i, 1);
        return true; 
      }
    }

    return false; 
  }

  display() {
    fill(255, 255, 0);
    noStroke();
    ellipse(this.x, this.y, 8, 16);
  }

  isOffScreen() {
    return this.y < 0;
  }
}
