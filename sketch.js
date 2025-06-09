let player;
let spaceshipImg;
let backgroundImg;
let enemyImg;
let bullets = [];
let enemies = [];
let enemyBullets = [];
let enemySpawnTimer = 0;
let score = 0;

function preload() {
  spaceshipImg = loadImage("assets/spaceship.png");
  backgroundImg = loadImage("assets/space-bg.png");
  enemyImg = loadImage("assets/enemy.png"); 
}

function setup() {
  createCanvas(800, 600);
  player = new Player(width / 2, height - 115, spaceshipImg);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  player.move();
  player.display();

  // Update and display bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    let hit = bullets[i].update(enemies);
    bullets[i].display();

    

    if (hit || bullets[i].isOffScreen()) {
      bullets.splice(i, 1);
    }
  }

  // Spawn enemies every 60 frames
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

    // Enemy shoots
    if (frameCount % 90 === 0) {
      enemyBullets.push(new EnemyBullet(enemies[i].x + 20, enemies[i].y + 20));
    }

    // Check collision with player
    let d = dist(
      enemies[i].x + enemies[i].size / 2,
      enemies[i].y + enemies[i].size / 2,
      player.x + player.width / 2,
      player.y + player.height / 2
    );
    if (d < (enemies[i].size / 2 + player.width / 2)) {
      player.takeDamage();
      enemies.splice(i, 1);
      continue;
    }

    if (enemies[i].isOffScreen()) {
      enemies.splice(i, 1);
    }
  }

  // Enemy bullets
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

  // Score
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);

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
    let bullet = new Bullet(player.x + player.width / 2, player.y);
    bullets.push(bullet);
  }
}
