const canvasX = 400;
const canvasY = 200;
var ballPositionX = canvasX/2;
var ballPositionY = canvasY/4;
var ballVelocityX = 2;
var ballVelocityY = 2;
var bounceCount = 0;
var paddle1PositionX = 10;
var paddle1PositionY = canvasY/2 - 15;
var paddle1Score = 0;
var paddle2PositionX = canvasX - 20;
var paddle2PositionY = canvasY/2 - 15;
var paddle2Score = 0;

function setup() {
    createCanvas(canvasX, canvasY)
  }
  
  function draw() {
    background(100);
    text(paddle1Score, 100, 30);
    text(paddle2Score, 300, 30);
    if(!(key == "p")){
        ballPositionX += ballVelocityX;
        ballPositionY += ballVelocityY;
        if((ballPositionX <= paddle1PositionX +10) && (ballPositionX >= paddle1PositionX) &&
         (ballPositionY <= paddle1PositionY + 30) && (ballPositionY >= paddle1PositionY)){
            invertMovement("X");
         }
        else if((ballPositionX <= paddle2PositionX) && (ballPositionX >= paddle2PositionX -10) &&
        (ballPositionY <= paddle2PositionY + 40) && (ballPositionY >= paddle2PositionY)){
            invertMovement("X");
        }
        else if(ballPositionX >= canvasX - 10){
            resetBall(-2);
            paddle1Score ++;
        }
        else if(ballPositionX <= 0){
            resetBall(2);
            paddle2Score ++;
        }
        else if(ballPositionY >= canvasY - 10 | ballPositionY <= 0){
            invertMovement("Y");
        }
    }
    else{
        text("\t\t\t\t\tGame paused.\n Press any button to continue.", 125, 90)
    }
    if(keyIsPressed){
        if(key == "w"){
            paddle1PositionY -= 2;
        }
        else if(key == "d"){
            paddle1PositionY += 2;
        }
        else if(key == "o"){
            paddle2PositionY -= 2;
        }
        else if(key == "k"){
            paddle2PositionY += 2;
        }
        else if(key == "r"){
            restart();
        }
    }
    rect(ballPositionX, ballPositionY, 10, 10);
    rect(paddle1PositionX, paddle1PositionY, 10, 30)
    rect(paddle2PositionX, paddle2PositionY, 10, 30)
    rect(canvasX/2, 0, 1, canvasY)
}

function invertMovement(plane){
    if(plane == "X"){
        ballVelocityX -= ballVelocityX * 2;
    }
    else{
        ballVelocityY -= ballVelocityY * 2;
    }
}

function resetBall(direction){
    ballVelocityX = direction
    ballPositionX = canvasX / 2;
    ballpositionY = Math.floor(Math.random() * canvasY);
}

function restart(){
    paddle1Score = 0;
    paddle2Score = 0;
    resetBall(2);
}