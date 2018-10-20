class Bullet{
    constructor(positionX, positionY, velocityX, velocityY, canvasX, canvasY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.moving = true;
    }

    update(){
        if(this.moving) this.move();
        this.render();
    }

    render(){
        push();
        fill("black");
        ellipse(this.positionX, this.positionY, 5, 5);
        pop();
    }

    move(){
        this.positionX += this.velocityX;
        this.positionY -= this.velocityY;
    }

    checkInBounds(){
        if(this.positionX < 0 || this.positionX > canvasX){
            return false;
        }
        else if(this.positionY < 0 || this.positionY > canvasY){
            return false;
        }
        else{
            return true;
        }
    }
}