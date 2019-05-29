class Paddle extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h, "Paddle");
    }

    move(dt){
        
        this.y = MouseInput.y;
    }
    draw(){
        Graphics.drawRect(this.x, this.y, this.w, this.h, "white");
    }
}

class Ball extends Component{
    constructor(x, y, radius, speedX, speedY){
        super(x, y, radius, radius, "Ball");
        this.speedX = speedX;
        this.speedY = speedY;
        this.originalSpeedX = speedX;
        this.originalSpeedY = speedY;
    }

    draw(){
        Graphics.drawCircle(this.x, this.y, this.w, "red");
    }
    move(dt){
        const width = Engine.canvas.width;
        const height = Engine.canvas.height;
        if(this.x >= width || this.x <= 0){
            this.speedX *= -1;
        }
        if(this.y >= height || this.y <= 0){
            this.speedY *= -1;
        }
        this.x += this.speedX * dt;
        this.y += this.speedY * dt;

    }

    onCollision(other){
        if(other instanceof Paddle){
            this.speedX = -this.speedX;
        }
    }
}

new Engine().init(engine =>{
    var myScene = new Scene();
    var paddle = new Paddle(15, 0, 20,150);
    var ball = new Ball(Engine.canvas.width/2, Engine.canvas.height, 15, 100, 5);
    myScene.addChild(paddle);
    myScene.addChild(ball);
    Engine.scene = myScene;

})