class Bullet {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 10;
    }
  
    update() {
      this.y -= this.speed;
    }
  
    display() {
      fill(255, 255, 0); // yellow bullet
      noStroke();
      ellipse(this.x, this.y, 8, 8);
    }
  
    isOffScreen() {
      return this.y < 0;
    }
  }
  