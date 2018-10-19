class Player{
    constructor(){
        this.positionX = canvasX / 2;
        this.positionY = canvasY / 2;
        this.size = 20;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.speed = 2;
        this.lookAngle = 0;
    }

    update(){
        this.turn();
        this.move();
        this.render();
    }

    render(){
        push();
        translate(this.positionX, this.positionY);
        rotate(this.lookAngle);
        ellipse(0, 0, this.size, this.size);
        rect(0 - (this.size / 6), 0, 5, 15);
        pop();
        stroke("white");
    }

    move(){
        if(this.up){
            this.positionY -= this.speed;
        }
        if(this.down){
            this.positionY += this.speed;
        }
        if(this.left){
            this.positionX -= this.speed;
        }
        if(this.right){
            this.positionX += this.speed;
        }
    }

    turn(){
        let x = mouseX - this.positionX;
        let y = this.positionY - mouseY;
        let relativeAngle = Math.asin(sqrt(x ** 2) / sqrt((x)**2 + ((y)**2)))
        if(x < 0 && y < 0){
            this.lookAngle = relativeAngle
        }
        else if(x < 0 && y > 0){
            this.lookAngle = Math.PI - relativeAngle
        }
        else if(x > 0, y > 0){
            this.lookAngle = Math.PI + relativeAngle
        }
        else if(x > 0, y < 0){
            this.lookAngle = Math.PI * 2 - relativeAngle
        }
    }
}

const canvasX = 600;
const canvasY = 300;
var player = new Player();

function setup(){
    createCanvas(canvasX, canvasY)
  }
  
function draw(){
    background(100);
    player.update();
}

function keyPressed(){
    changeMovementState();
}


function keyReleased(){
    changeMovementState();
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
