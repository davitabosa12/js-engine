import { Component } from "./Component";
export default class Scene extends Component{
    constructor(...entities){
        super();
        this.entities = entities;
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

    addEntity(entity){
        if(entity instanceof Component){
            this.entities.push(entity);
        }
    }
    removeEntity(entity){
        let predicament = (element) =>{
            return element.id === entity.id;
        }
        let index = this.entities.findIndex(predicament); //find entity in array
        this.entities.splice(index,1); //remove the entity
    }
}