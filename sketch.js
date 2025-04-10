let player;
let spaceshipImg;
let backgroundImg; 

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
}
