
class World {
	
	static canvas; 
	static canvasContext;

	constructor() {
		//variables for the mainLoop
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;
		
		//game entities
		
		
		//game entities list
		this.entities = [];
	}
	
	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		
		requestAnimationFrame(this.mainLoop.bind(this));	
		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
		window.addEventListener('keydown', KeyboardInput.onKeyDown);
		window.addEventListener('keyup', KeyboardInput.onKeyUp);
		socket.open();


		//receive init things
		socket.emit("new player", this)
		socket.on('initialization', (players) =>{
			console.log(JSON.stringify(players));
		});
		
	}

	mainLoop(timeStamp) {
		if(timeStamp < this.lastFrameTimeMs + this.timeStep) {
			requestAnimationFrame(this.mainLoop.bind(this));
			return;
		}
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		while(this.delta >= this.timeStep) {
			this.moveEverything(this.timeStep); 
			this.delta -= this.timeStep;
		}
		this.drawEverything();
		requestAnimationFrame(this.mainLoop.bind(this));
	}
	
	moveEverything(deltaTime) {	
		for (var i=0; i < this.entities.length; i++)
			this.entities[i].move(deltaTime);
	}
	drawEverything() {
		Utils.clearScreen();

		for (var i=0; i < this.entities.length; i++)
			this.entities[i].draw();		
	}

	

	
}








