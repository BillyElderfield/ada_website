class BasicZombie{
    constructor(canvasX, canvasY){
        let randNum = Math.random();
        if (randNum <= 0.25){
            this.positionX = 0;
            this.positionY = Math.random() * canvasY;
        }
        else if (randNum <= 0.5){
            this.positionX = canvasX;
            this.positionY = Math.random() * canvasY;
        }
        else{
            this.positionX = Math.random() * canvasX;
            randNum <= 0.75 ? this.positionY = 0: this.positionY = canvasY;
        }
        this.velocityX = 0;
        this.velocityY = 0;
        this.lookAngle = 0;
        this.moving = true;
        this.size = 20;
    }

    update(playerPositionX, playerPositionY){
        this.lookAngle = track(this.positionX, this.positionY, playerPositionX, playerPositionY);
        this.trackPlayer();
        if(this.moving) this.move();
        this.render();
    }

    render(){
        push();
        fill("green")
        ellipse(this.positionX, this.positionY, this.size, this.size);
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