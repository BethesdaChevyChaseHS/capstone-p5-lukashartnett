let player;
let spaceshipImg;
let backgroundImg;
let bullets = [];
let enemies = [];
let enemyBullets = [];
let enemySpawnTimer = 0;

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

  // Update and display player
  player.move();
  player.display();

  // Update and display player bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();

    if (bullets[i].isOffScreen()) {
      bullets.splice(i, 1);
    }
  }

  // Spawn enemies every 60 frames (~1 second)
  enemySpawnTimer++;
  if (enemySpawnTimer > 60) {
    let enemyX = random(40, width - 40);
    enemies.push(new Enemy(enemyX, -40));
    enemySpawnTimer = 0;
  }

  // Update and display enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].update();
    enemies[i].display();
    enemies[i].shoot(enemyBullets);

    if (enemies[i].isOffScreen()) {
      enemies.splice(i, 1);
    }
  }

  // Update and display enemy bullets
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    enemyBullets[i].update();
    enemyBullets[i].display();

    if (enemyBullets[i].isOffScreen()) {
      enemyBullets.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    let bullet = new Bullet(player.x + 60, player.y);
    bullets.push(bullet);
  }
}
