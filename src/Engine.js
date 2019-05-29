class Engine{
    /**
     * @type HTMLCanvasElement
     */
    static canvas;
    /**
     * @type CanvasRenderingContext2D
     */
    static ctx;
    /**
     * @type Scene
     */
    static scene;

    constructor(){
		this.delta = 0;
		this.lastFrameTimeMs = 0;
        this.timeStep = 1000/60;
        
    }

    init(callback){
        Engine.canvas = document.getElementById("game_canvas");
        Engine.ctx = Engine.canvas.getContext("2d");
        var asda = new HelloMessage("Hello World!", {x: Engine.canvas.width/2, y: Engine.canvas.height/2}, "mensagem");
        Engine.scene = new Scene(new HelloBG("./res/golden-retriever-puppy.jpg", {x: 100, y: 100}, {w: 100, h:100}), asda
        );
        requestAnimationFrame(this.mainloop.bind(this));
        Graphics.clearScreen();
        //window.addEventListener('keydown', KeyboardInput.onKeyDown);
        //window.addEventListener('keyup', KeyboardInput.onKeyUp);
        Engine.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
        callback(this);
        
    }
    

    getScene(){
        return Engine.scene;
    }

    setScene(scene){
        Engine.scene = scene;
    }
    mainloop(timeStamp){
        if(timeStamp < this.lastFrameTimeMs + this.timeStep){
            requestAnimationFrame(this.mainloop.bind(this));
            return;
        }
        this.delta += timeStamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timeStamp;
        while(this.delta >= this.timeStep){
            Engine.scene.move(this.timeStep);
            this.delta -= this.timeStep;
        }
        
        Engine.scene.draw();
        requestAnimationFrame(this.mainloop.bind(this));
    }
}



class Time{
    static delta = 0;
    static lastFrameTimeMs = 0;
	static timeStep = 1000/60;
}

