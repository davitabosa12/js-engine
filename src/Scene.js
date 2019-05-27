
import GameObject from "./GameObject";
export default class Scene extends GameObject {
    constructor(...entities){
        super();
        entities.forEach((entity) =>{
            entity.setParent(this);
        });
    }

    move(dt){
        this.entities.forEach((entity) => {
            entity.move(dt);
        });
    }
    draw(){
        this.entities.forEach((entity) =>{
            entity.draw();
        });
    }

}