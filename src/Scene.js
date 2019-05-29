
class Scene extends Component {
    constructor(...entities){
        super();
        entities.forEach((entity) =>{
            entity.setParent(this);
            this.addChild(entity);
        });
    }

    move(dt){
        this.checkForCollisions();
        this.children.forEach((entity) => {
            entity.move(dt);
        });
    }
    draw(){
        this.children.forEach((entity) =>{
            entity.draw();
        });
    }

    checkForCollisions(){
        for(var i = 0; i < this.children.length; i++){
            for(var j = 0; j < this.children.length; j++){
                let child1 = this.children[i];
                let child2 = this.children[j];
                if(this.overlaps(child1, child2)){
                    child1.onCollision(child2);
                }
            }
            
        }
    }

    overlaps(a, b){
        if(a.id === b.id) {
            
            return false;
        }
        
        
        if(a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y)
        {
            
           return true;
        }
        return false;
    }

}