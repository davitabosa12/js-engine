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
    constructor(path, position, size){
        super();
        this.image = Graphics.loadImage(path);
        this.position = position;
        this.size = size
        
    }
    draw(){
        Graphics.drawImage(this.position.x, this.position.y, this.size.w, this.size.h, this.image);
    }
}