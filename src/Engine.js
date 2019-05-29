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
        Engine.scene = null;
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
        if(Engine.scene === null) return;
        while(this.delta >= this.timeStep){
            Engine.scene.move(this.timeStep / 100);
            this.delta -= this.timeStep;
        }
        Graphics.clearScreen();
        Engine.scene.draw();
        requestAnimationFrame(this.mainloop.bind(this));
    }
}



class Time{
    static delta = 0;
    static lastFrameTimeMs = 0;
	static timeStep = 1000/60;
}

