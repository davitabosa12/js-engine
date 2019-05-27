class MouseInput {
	
	static x = 400;
	static y = 400;
	
	static updateMousePos(evt) {
		var rect = Engine.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;

	}
}

class KeyboardInput {
	debugger;
	static keys = {
		down: false,
		up: false,
		left: false,
		right: false,
		enter: false,
		escape: false,
	}

	static onKeyDown(evt){
		switch(evt.key){
			case "Down": // IE/Edge specific value
			case "ArrowDown":
				KeyboardInput.keys.down = true;
				break;
			case "Up": // IE/Edge specific value
			case "ArrowUp":
					KeyboardInput.keys.up = true;
				break;
			case "Left": // IE/Edge specific value
			case "ArrowLeft":
					KeyboardInput.keys.left = true;
				break;
			case "Right": // IE/Edge specific value
			case "ArrowRight":
					KeyboardInput.keys.right = true;
				break;
			case "Enter":
					KeyboardInput.keys.enter = true;
				break;
			case "Esc": // IE/Edge specific value
			case "Escape":
					KeyboardInput.keys.escape = true;
				break;
			default:
					KeyboardInput.keys[evt.key] = true;
				break;
		}
	}

	static onKeyUp(evt){
		switch(evt.key){
			case "Down": // IE/Edge specific value
			case "ArrowDown":
				KeyboardInput.keys.down = false;
				break;
			case "Up": // IE/Edge specific value
			case "ArrowUp":
					KeyboardInput.keys.up = false;
				break;
			case "Left": // IE/Edge specific value
			case "ArrowLeft":
					KeyboardInput.keys.left = false;
				break;
			case "Right": // IE/Edge specific value
			case "ArrowRight":
					KeyboardInput.keys.right = false;
				break;
			case "Enter":
					KeyboardInput.keys.enter = false;
				break;
			case "Esc": // IE/Edge specific value
			case "Escape":
					KeyboardInput.keys.escape = false;
				break;
			default:
					KeyboardInput.keys[evt.key] = false;
				break;
		}
	}

	static getButtonDown(btn){
		return KeyboardInput.keys[btn] || false;
	}
}
export {MouseInput, KeyboardInput};