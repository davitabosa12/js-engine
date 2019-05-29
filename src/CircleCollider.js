import Collider from "./Collider";

export default class CircleCollider extends Collider{
    constructor(x, y, r, parent, name = ""){
        super(x, y, r, r, parent, name);
    }

    overlaps(other){
        if(other instanceof AABBCollider){
            return other.overlaps(this);
        } else if(other instanceof CircleCollider){
            let sum = other.r + this.r;
            let dist = Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2);
            return dist <= sum;
        }
        else return false;
    }
}