let player;
let spaceshipImg;
let backgroundImg;
let bullets = [];

function preload() {
  spaceshipImg = loadImage("assets/spaceship.png");
  backgroundImg = loadImage("assets/space-bg.png");
}

function setup() {
  createCanvas(800, 600);
  player = new Player(width / 2, height - 115, spaceshipImg);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  player.move();
  player.display();

  // Update and draw bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();

    if (bullets[i].isOffScreen()) {
      bullets.splice(i, 1); // Remove if off screen
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    let bullet = new Bullet(player.x + 60, player.y); // ship nose position
    bullets.push(bullet);
  }
}

