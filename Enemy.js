class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.speed = 2;
    this.shootTimer = 0;
  }
  
  shoot(enemyBullets) {
    this.shootTimer++;
    if (this.shootTimer > 90) { // shoot every ~1.5 seconds
      enemyBullets.push(new EnemyBullet(this.x, this.y + this.size / 2));
      this.shootTimer = 0;
    }
  }
  
    update() {
      this.y += this.speed;
    }
  
    display() {
      fill(255, 0, 0); // red enemy
      ellipse(this.x, this.y, this.size);
    }
  
    isOffScreen() {
      return this.y > height + this.size;
    }
  }
  