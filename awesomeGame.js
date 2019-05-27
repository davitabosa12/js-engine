class Player extends Component{
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.speedX = 10;
        this.speedY = 5;
        
    }

    draw(){
        Graphics.drawCircle(this.x, this.y, this.radius, "red");
    }
    move(dt){        
        if(KeyboardInput.getButtonDown(" ")){
            console.log("SPACE");
        }
        if(this.x + this.radius >= Engine.canvas.width){
            this.speedX *= -1;
        }
        if(this.x - this.radius <= 0){
            this.speedX *= -1;
        }
        if(this.y + this.radius >= Engine.canvas.height){
            this.speedY *= -1;
        }
        if(this.y - this.radius <= 0){
            this.speedY *= -1;
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }
}

addEventListener('engineStart', () =>{
    var fase1 = new Scene(new Player(Engine.canvas.width/2, Engine.canvas.height /2));
    Engine.setScene(fase1);
});
