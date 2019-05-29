
class Scene extends Component {
    constructor(...entities){
        super();
        entities.forEach((entity) =>{
            entity.setParent(this);
            this.addChild(entity);
        });
    }

    move(dt){
        this.children.forEach((entity) => {
            entity.move(dt);
        });
    }
    draw(){
        this.children.forEach((entity) =>{
            entity.draw();
        });
    }

}