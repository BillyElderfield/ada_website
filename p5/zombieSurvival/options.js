class Option{
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = 10;
        this.state = true;
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
    }
}

class GameOption extends Option{
    constructor(positionX, positionY, gameMode){
        super(positionX, positionY);
        this.size = 15;
        this.state = false;
        this.gameMode = gameMode;
    }

    changeState(){
        gameState = this.gameMode;
        console.log("safas")
    }
}
