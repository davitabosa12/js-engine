export default class Component{

    constructor(parent, name = ""){
        this.id = UUID.uuidv4();
        this.name = name;
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

    
    //roda antes de eliminar o obj
    onDestroy(){

    }
}