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

    static fps = 60;

    static getScene(){
        return Engine.scene;
    }

    static setFps(fps){
        Engine.fps = fps;
        Time.timeStep = 1000/fps;
    }

    static setScene(scene){
        Engine.scene = scene;
    }

    static mainloop(timeStamp){
        if(timeStamp < Time.lastFrameTimeMs + Time.timeStep){
            requestAnimationFrame(Engine.mainloop);
            return;
        }
        Time.delta += timeStamp - Time.lastFrameTimeMs;
        Time.lastFrameTimeMs = timeStamp;
        while(Time.delta >= Time.timeStep){
            
            Engine.scene.move(Time.timeStep / 100);
            Time.delta -= Time.timeStep;
        }
        
        Engine.scene.draw();
        requestAnimationFrame(Engine.mainloop);
    }


}

window.onload = function(){
    Engine.canvas = document.getElementById("game_canvas");
    Engine.ctx = Engine.canvas.getContext("2d");
    requestAnimationFrame(Engine.mainloop)
    Graphics.clearScreen();
    //window.addEventListener('keydown', KeyboardInput.onKeyDown);
    //window.addEventListener('keyup', KeyboardInput.onKeyUp);
    Engine.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
    dispatchEvent(new Event('engineStart'));
    
}

class Time{
    static delta = 0;
    static lastFrameTimeMs = 0;
	static timeStep = 1000/60;
}

