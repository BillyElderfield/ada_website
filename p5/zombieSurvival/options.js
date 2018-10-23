class Option{
    constructor(positionX, positionY, option){
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = 10;
        this.state = true;
        this.option = option;
    }

    update(){
        this.render();
    }

    render(){
        push();
        this.state ? fill("green") : fill("red");
        rect(this.positionX, this.positionY, this.size, this.size);
        pop();
    }

    changeState(){
        this.state = !this.state;
        options[this.option] = !options[this.option];
    }
}

class GameOption extends Option{
    constructor(positionX, positionY, option){
        super(positionX, positionY, option);
        this.size = 15;
        this.state = false;
        this.option = option;
    }

    changeState(){
        gameState = this.option;
        startTime = performance.now();
        respawnTimer = performance.now();
    }
}
