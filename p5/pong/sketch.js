class Paddle{
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.score = 0;
    }
}

class Ball{
    constructor(canvasX, canvasY){
        this.positionX = canvasX/2;
        this.positionY = canvasY/4;
        this.velocityX = 2;
        this.velocityY = 2;
    }
}

const canvasX = 400;
const canvasY = 200;
var ball = new Ball(canvasX, canvasY);
var paddle1 = new Paddle(10, canvasY/2 -15);
var paddle2 = new Paddle(canvasX - 20, canvasY/2 -15);

function setup() {
    createCanvas(canvasX, canvasY)
  }
  
function draw() {
    background(100);
    text(paddle1.score, 100, 30);
    text(paddle2.score, 300, 30);
    if(!(key == "p")){
        ball.positionX += ball.velocityX;
        ball.positionY += ball.velocityY;
        if((ball.positionX <= paddle1.positionX +10) && (ball.positionX >= paddle1.positionX) &&
         (ball.positionY <= paddle1.positionY + 30) && (ball.positionY >= paddle1.positionY)){
            invertMovement("X");
         }
        else if((ball.positionX <= paddle2.positionX) && (ball.positionX >= paddle2.positionX -10) &&
        (ball.positionY <= paddle2.positionY + 40) && (ball.positionY >= paddle2.positionY)){
            invertMovement("X");
        }
        else if(ball.positionX >= canvasX - 10){
            resetBall(-2);
            paddle1.score ++;
        }
        else if(ball.positionX <= 0){
            resetBall(2);
            paddle2.score ++;
        }
        else if(ball.positionY >= canvasY - 10 | ball.positionY <= 0){
            invertMovement("Y");
        }
    }
    else{
        text("\t\t\t\t\tGame paused.\n Press any button to continue.", 125, 90)
    }
    if(keyIsPressed){
        if(key == "w"){
            paddle1.positionY -= 2;
        }
        else if(key == "d"){
            paddle1.positionY += 2;
        }
        else if(key == "o"){
            paddle2.positionY -= 2;
        }
        else if(key == "k"){
            paddle2.positionY += 2;
        }
        else if(key == "r"){
            restart();
        }
    }
    rect(ball.positionX, ball.positionY, 10, 10);
    rect(paddle1.positionX, paddle1.positionY, 10, 30)
    rect(paddle2.positionX, paddle2.positionY, 10, 30)
    rect(canvasX/2, 0, 1, canvasY)
}

function invertMovement(plane){
    if(plane == "X"){
        ball.velocityX -= ball.velocityX * 2;
    }
    else{
        ball.velocityY -= ball.velocityY * 2;
    }
}

function resetBall(direction){
    ball.velocityX = direction
    ball.positionX = canvasX / 2;
    ball.positionY = Math.floor(Math.random() * canvasY);
}

function restart(){
    paddle1.score = 0;
    paddle2.score = 0;
    resetBall(2);
}
