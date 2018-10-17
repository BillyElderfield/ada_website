var ballPositionX = 100;
var ballPositionY = 10;
var canvasX = 400;
var canvasY = 200;
var moving = true;
var ballMovementX = 1;
var ballMovementY = 1;
var bounceCount = 0;
function setup() {
    createCanvas(canvasX, canvasY)
  }
  
  function draw() {
    background(100);
    text("Bounces: " + bounceCount, 10, 30);
    if(moving){
        ballPositionX += ballMovementX;
        ballPositionY += ballMovementY;
        if(ballPositionX >= canvasX - 10){
            ballMovementX = -1;
            bounceCount ++;
        }
        else if(ballPositionX <= 0){
            ballMovementX = 1;
            bounceCount ++;
        }
        else if(ballPositionY >= canvasY - 10){
            ballMovementY = -1;
            bounceCount ++;
        }
        else if(ballPositionY <= 0){
            ballMovementY = 1;
            bounceCount ++;
        }
    }
    rect(ballPositionX, ballPositionY, 10, 10);
}

function mousePressed(){
    moving = !moving;
}