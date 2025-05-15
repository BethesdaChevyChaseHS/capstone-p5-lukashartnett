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
  player.move();
  player.display();

  // Update and display player bullets + check collisions
  for (let i = bullets.length - 1; i >= 0; i--) {
    let hit = bullets[i].update(enemies);
    bullets[i].display();

    if (hit || bullets[i].isOffScreen()) {
      bullets.splice(i, 1);
    }
  }

 
  enemySpawnTimer++;
  if (enemySpawnTimer > 60) {
    let enemyX = random(40, width - 40);
    enemies.push(new Enemy(enemyX, -40));
    enemySpawnTimer = 0;
  }

  
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].update();
    enemies[i].display();

    // Enemy shoots every 90 frames
    if (frameCount % 90 === 0) {
      enemyBullets.push(new EnemyBullet(enemies[i].x + 20, enemies[i].y + 20));
    }

    if (enemies[i].isOffScreen()) {
      enemies.splice(i, 1);
    }
  }

  // Update and display enemy bullets
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    enemyBullets[i].update();
    enemyBullets[i].display();

    if (enemyBullets[i].hits(player)) {
      player.takeDamage();
      enemyBullets.splice(i, 1);
      continue;
    }

    if (enemyBullets[i].isOffScreen()) {
      enemyBullets.splice(i, 1);
    }
  }

  // Game over
  if (player.health <= 0) {
    noLoop();
    fill(255, 0, 0);
    textSize(50);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === ' ') {
    let bullet = new Bullet(player.x + 60, player.y);
    bullets.push(bullet);
  }
}
