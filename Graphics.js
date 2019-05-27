class Graphics{

    /**
     * 
     * @param {String} path path to the image
     * @returns {Image} the loaded image
     * @throws Error
     */
    static loadImage(path){
        let i = new Image();
        i.src = path;
        return i;
    }

    

    static drawRect(x, y, w, h, color = "white"){
        Engine.ctx.fillStyle = color;
        Engine.ctx.fillRect(x, y, w, h);
    }

    static drawCircle(x, y, radius, color="white"){
        Engine.ctx.fillStyle = color;
        Engine.ctx.beginPath();
        Engine.ctx.arc(x, y, radius, 0,Math.PI*2, true);
        Engine.ctx.fill();
    }

    static drawText(text, x, y, color = "white"){
        Engine.ctx.fillStyle = color;
        Engine.ctx.fillText(text, x, y);
    }
    static clearScreen(clearColor = "black"){
        Graphics.drawRect(0, 0, Engine.canvas.width, Engine.canvas.height, clearColor);
    }
}