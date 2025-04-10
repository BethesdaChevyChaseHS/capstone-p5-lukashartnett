class Player {
    constructor(x, y, img) {
      this.x = x;
      this.y = y;
      this.img = img; 
      this.speed = 5;
    }
  
    move() {
      if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
      if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
      this.x = constrain(this.x, 20, width - 120); 
    }
  
    display() {
      
      image(this.img, this.x, this.y, 120, 120);
    }
  }
  