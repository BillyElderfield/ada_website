class Player{
    constructor(canvasX, canvasY){
        this.positionX = canvasX / 2;
        this.positionY = canvasY / 2;
        this.size = 20;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.velocity = 2;
        this.lookAngle = 360;
    }

    update(){
        this.lookAngle = track(this.positionX, this.positionY, mouseX, mouseY);
        this.move();
        this.render();
    }

    render(){
        push();
        translate(this.positionX, this.positionY);
        rotate(this.lookAngle);
        fill("black");
        noStroke();
        ellipse(0, 0, this.size, this.size);
        rect(0 - (this.size / 6), 0, 5, 15);
        pop();
    }

    move(){
        if(this.up) this.positionY -= this.velocity;
        if(this.down) this.positionY += this.velocity;
        if(this.left) this.positionX -= this.velocity;
        if(this.right) this.positionX += this.velocity;
    }

    shoot(){
        let velocities = calculateVelocities(this.lookAngle, 5);
        let velocityX = velocities[0];
        let velocityY = velocities[1];
        bullets.push(new Bullet(this.positionX, this.positionY, velocityX, velocityY));
    }
}

class Bullet{
    constructor(positionX, positionY, velocityX, velocityY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    update(){
        this.move();
        this.render();
    }

    render(){
        ellipse(this.positionX, this.positionY, 5, 5);
        fill("black");
    }

    move(){
        this.positionX += this.velocityX;
        this.positionY -= this.velocityY;
    }
}

class BasicZombie{
    constructor(canvasX, canvasY){
        let randNum = Math.random();
        let offset = 0;
        if (randNum <= 0.25){
            this.positionX = -offset;
            this.positionY = Math.random() * canvasY;
        }
        else if (randNum <= 0.5){
            this.positionX = canvasX + offset;
            this.positionY = Math.random() * canvasY;
        }
        else{
            this.positionX = Math.random() * canvasX;
            randNum <= 0.75 ? this.positionY = -offset : this.positionY = canvasY + offset;
        }
        this.velocityX = 0;
        this.velocityY = 0;
        this.lookAngle = 0;
    }

    update(playerPositionX, playerPositionY){
        this.lookAngle = track(this.positionX, this.positionY, playerPositionX, playerPositionY);
        this.trackPlayer();
        this.move();
        this.render();
    }

    render(){
        push();
        fill("green")
        ellipse(this.positionX, this.positionY, 20, 20);
        pop();
    }

    move(){
        this.positionX += this.velocityX;
        this.positionY -= this.velocityY;
    }

    trackPlayer(playerPositionX, playerPositionY){
        let velocities = calculateVelocities(this.lookAngle, 1);
        this.velocityX = velocities[0];
        this.velocityY = velocities[1];
    }

}

const canvasX = 600;
const canvasY = 600;
var player = new Player(canvasX, canvasY);
var basicZombie = new BasicZombie(canvasX, canvasY);
var bullets = [];

function setup(){
    createCanvas(canvasX, canvasY)
  }
  
function draw(){
    background(100);
    player.update();
    basicZombie.update(player.positionX, player.positionY);
    for(let i = 0; i < bullets.length; i++){
        bullets[i].update();
    }
}

function keyPressed(){
    changeMovementState();
}


function keyReleased(){
    changeMovementState();
}

function mousePressed(){
    player.shoot();
}

function changeMovementState(){
    switch(key){
        case "w":
            return player.up = !player.up;
        case "a":
            return player.left = !player.left;
        case "s":
            return player.down = !player.down;
        case "d":
            return player.right = !player.right;
    }
}

function track(fromX, fromY, toX, toY){
    let relativeX = toX - fromX;
    let relativeY = fromY - toY;
    let relativeAngle = Math.asin(sqrt(relativeX ** 2) / sqrt((relativeX)**2 + ((relativeY)**2)));
    if(relativeX < 0 && relativeY < 0){
        return relativeAngle;
    }
    else if(relativeX < 0 && relativeY > 0){
        return Math.PI - relativeAngle;
    }
    else if(relativeX > 0, relativeY > 0){
        return Math.PI + relativeAngle;
    }
    else if(relativeX > 0, relativeY < 0){
        return Math.PI * 2 - relativeAngle;
    }
    else{
        return "cats";
    }
}

function calculateVelocities(trackAngle, maxVelocity){
    let velocityY = -maxVelocity * Math.cos(trackAngle);
    if(trackAngle >= 0 && trackAngle <= Math.PI){
        var velocityX = -sqrt((maxVelocity ** 2) - (velocityY ** 2));
    }
    else if(trackAngle > Math.PI && trackAngle <= Math.PI * 2){
        var velocityX = sqrt((maxVelocity ** 2) - (velocityY ** 2));
    }
    return [velocityX, velocityY];
}
