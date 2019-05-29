import Component from "./Component";



export default class Collider extends Component{
    constructor(x, y, w, h, parent, name = ""){
        super(x, y, w, h, parent, name);
    }
    overlaps(){
        throw Error("overlaps not implemented");
    }
}