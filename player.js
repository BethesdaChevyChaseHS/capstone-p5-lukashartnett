class Player {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.width = 80;
    this.height = 80;
    this.speed = 5;
    this.health = 3;
    this.hitTimer = 0;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, 0, width - this.width);
  }

  takeDamage() {
    if (this.hitTimer === 0) {
      this.health--;
      this.hitTimer = 30;
    }
  }

  display() {
    if (this.hitTimer > 0) {
      tint(255, 0, 0); // red flash
      this.hitTimer--;
    } else {
      noTint();
    }

    image(this.img, this.x, this.y, this.width, this.height);

    // Draw health text
    noStroke();
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Health: " + this.health, 10, 40); 
  }
}
