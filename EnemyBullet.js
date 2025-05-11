class EnemyBullet {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 8;
      this.speed = 5;
    }
  
    update() {
      this.y += this.speed;
    }
  
    display() {
        fill(0); // black
        noStroke();
        ellipse(this.x, this.y, this.size);
      }
      
    isOffScreen() {
      return this.y > height;
    }
  }
  