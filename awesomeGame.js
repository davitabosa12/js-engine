class HelloMessage extends Component{
    constructor(msg,position, name){
        super(name);
        this.text = msg;
        this.position = position;
    }

    draw(){
        Graphics.drawText(this.text, this.position.x, this.position.y, "red");
    }
    
}

class HelloBG extends Component{
    constructor(path, position, size, name){
        super(position.x, position.y, size.w, size.h, name);
        this.image = Graphics.loadImage(path);
        this.position = position;
        this.size = size;
        this.frames = 0;
    }
    draw(){
        frames++;
        Graphics.drawImage(this.x, this.y, this.w, this.h, this.image);
    }
    move(dt){
        this.x = MouseInput.x;
        this.y = MouseInput.y;
    }
    onCollision(other){
        
    }
}
class Quadrado extends Component{
    constructor(x, y, w, h, name){
        super(x, y, w, h, name);
        this.color = "white";
    }
    draw(){
        Graphics.drawRect(this.x, this.y, this.w, this.h, this.color);
        this.color = "white";
    }
    onCollision(){
        
        this.color = "red";
    }
}
new Engine().init(engine =>{
    var myScene = new Scene(new HelloBG("./res/dog.jpg", {x: 100, y:100}, {w: 200, h: 200}));
    myScene.addChild(new HelloMessage("Hello world!", {x: 100, y: Engine.canvas.width /2}));
    myScene.addChild(new Quadrado(300, 100, 200, 200, "Quadrado"));
    Engine.scene = myScene;
});