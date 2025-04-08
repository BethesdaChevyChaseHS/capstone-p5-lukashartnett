function setup() {
    createCanvas(800, 600);
    setupDebugConsole();
}

function draw() {
    background(255); 
    textSize(32); // Set the text size
    textAlign(CENTER, CENTER); 
    fill(0); 
    text("Hello World", width / 2, height / 2); 
}
