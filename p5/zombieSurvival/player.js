class Player{
    constructor(canvasX, canvasY){
        this.positionX = canvasX / 2;
        this.positionY = canvasY / 2;
        this.size = 20;
        this.colour = "black";
        this.shape = "circle";
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.velocity = 2;
        this.lookAngle = 360;
        this.alive = true;
    }

    update(){
        if(this.alive){
            this.lookAngle = track(this.positionX, this.positionY, mouseX, mouseY);
            this.move();
        }
        this.render();
    }

    render(){
        push();
        translate(this.positionX, this.positionY);
        rotate(this.lookAngle);
        fill(this.colour);
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
