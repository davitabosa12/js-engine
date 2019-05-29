class Component{

    constructor(x, y, w, h, name = "", parent=null){
        this.id = UUID.uuidv4();
        this.name = name;
        this.x =x;
        this.y = y
        this.w = w
        this.h = h;
        this.children = [];
        this.parent = parent;
    }

    addChild(component){
        if(component instanceof Component){
            this.children.push(component);
        }
    }
    removeChild(component){
        let predicament = (element) =>{
            return element.id === component.id;
        }
        let index = this.children.findIndex(predicament); //find entity in array
        this.children.splice(index,1); //remove the entity
    }

    destroy(){
        this.onDestroy();
        this.parent.removeChild(this);
    }

    setParent(parent){
        this.parent = parent;
    }

    getParent(){
        return parent;
    }
    onCollision(other){
        
    }

    
    //roda antes de eliminar o obj
    onDestroy(){

    }
    move(){

    }
    draw(){
        
    }
}